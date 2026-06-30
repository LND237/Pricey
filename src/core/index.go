package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os/exec"
	"path/filepath"
	"strings"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /search", withCORS(getProduct))
	mux.HandleFunc("OPTIONS /search", withCORS(optionsHandler))

	log.Fatal(http.ListenAndServe(":8001", mux))
}

func withCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next(w, r)
	}
}

func optionsHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNoContent)
}

func getProduct(w http.ResponseWriter, r *http.Request) {
	log.Print("Request received:", r.URL)

	query := strings.TrimSpace(r.URL.Query().Get("q"))
	if query == "" {
		query = "product"
	}

	scriptPath := filepath.Join("..", "scraper", "s.py")
	pythonBin, err := exec.LookPath("python3")
	if err != nil {
		pythonBin, err = exec.LookPath("python")
		if err != nil {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusInternalServerError)
			_ = json.NewEncoder(w).Encode(map[string]any{
				"query": query,
				"error": "python interpreter not found",
			})
			return
		}
	}

	cmd := exec.Command(pythonBin, scriptPath, query)
	cmd.Dir = "."
	output, err := cmd.CombinedOutput()
	if err != nil {
		log.Printf("scraper failed: %v\n%s", err, output)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		_ = json.NewEncoder(w).Encode(map[string]any{
			"query":   query,
			"error":   "scraper failed",
			"details": string(output),
		})
		return
	}

	var payload map[string]any
	if err := json.Unmarshal(output, &payload); err != nil {
		payload = map[string]any{"query": query, "raw": string(output)}
	}

	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(payload)
}
