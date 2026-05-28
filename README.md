
# Pricey 🏷️

Pricey is the ultimate yet simple price tracker app you'll ever need. 

It takes your item URL from an online store and tracks its price, notifying you about price drops you might be interested in. No more browsing the web just to manually check all the different stores you need. All your wish items, in one application.

This is an open-source project created for habit building and out of goodwill.

---

## 🛠️ Tech Stack

Pricey is designed using a modern, decoupled **Microservices Architecture** running locally on your machine. This ensures high performance, minimal resource usage, and isolated components that prevent a single breaking website change from crashing the entire app.

* **Frontend UI Layer: TypeScript + Expo (React Native)** 📱
    * Provides a beautiful, modern cross-platform dashboard that runs on iOS, Android, and the web from a single codebase. Built on Expo Router for file-based navigation, with React Native delivering native UI performance and a fast iteration loop during development.
* **Core Logic & Orchestration Layer: Go (Golang)** 🧠
    * Acts as the central "brain" running silently in the background. Go handles internal routing, scheduling periodic automated price checks via high-performance concurrent routines, and checking for price history fluctuations.
* **Communication Layer: gRPC (HTTP/2 + Protocol Buffers)** 💬
    * Connects the Go backend and the Python scraping engine using strictly-typed contracts. This delivers lightning-fast communication over local loopback interfaces with optimized data transmission sizes.
* **Data Extraction Layer: Python Worker** 🏗️
    * A stateless microservice built using advanced web scraping libraries like `BeautifulSoup` and `Playwright`. Isolating this logic into Python ensures that when online stores update their HTML frontend, the scraper can be updated instantly without rewriting or recompiling the core application structure.
* **Local Storage Engine: SQLite** 
    * A lightweight, file-based embedded relational database managed directly by the Go backend. It eliminates the need for complex database server setups on your local machine while safely keeping track of your URLs, historic data points, and notification settings.

---

## 🗺️ Roadmap

* [ ] Framework initialization and repository directory structural layout.
* [ ] Defining core proto schemas for gRPC-driven service contracts.
* [ ] Implementing structural data parsing hooks inside the Python scraper pipeline.
* [ ] Deploying local SQLite telemetry recording configurations under the Go controller.
* [ ] Constructing the cross-platform frontend dashboard via Expo (React Native).

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. 

Before opening a Pull Request (PR), **please review our contribution guidelines**. PRs that do not adhere to the contribution guidelines will be ignored to maintain standard formatting and project continuity.

### Feature Requests & Support
If you have any feature requests, suggestions, or feedback, feel free to reach out via email at: **yoavlevy@levy.net**

---

## 📄 License

This project is licensed under the **MIT License**. For more details, please see the `LICENSE` file at the root of this repository.
