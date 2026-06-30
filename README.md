
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
* **Communication Layer: REST API (HTTP + JSON)** 💬
    * Connects the Go backend and the Python scraping engine over a simple, language-agnostic HTTP/JSON interface on the local loopback. Plain REST keeps the contract easy to read, debug, and curl by hand — no code generation or binary wire format required.
* **Data Extraction Layer: Python Worker** 🏗️
    * A stateless microservice built using advanced web scraping libraries like `BeautifulSoup` and `Playwright`. Isolating this logic into Python ensures that when online stores update their HTML frontend, the scraper can be updated instantly without rewriting or recompiling the core application structure.
* **Local Storage Engine: SQLite** 
    * A lightweight, file-based embedded relational database managed directly by the Go backend. It eliminates the need for complex database server setups on your local machine while safely keeping track of your URLs, historic data points, and notification settings.

---

## Installation 🤖
currently the only installation availabe is dev-ready, not production-ready. Later on I will provide a production ready project (core is more important for now!). 
### Option 1 - dev containers
thiis by far the easiest method. just install dev containers on your ide as an extension,  then it will prompt you to reopen the project in a container and it will do the setup for you just fine. It may take some time for installing all dependecies. 
for more info about about it: [dev containers](https://code.visualstudio.com/docs/devcontainers/containers)
### option 2 - taskfile
To get the core setup installation without containers and docker fluff you may just do in the project dir: ```task setup``` and it will install all the technologies and dependecies for you.
**Note: the taskfile is desgined for unix-based os and may not work on windows machines. That's why I would suggest option 1. Do it if you know what you are doing.**

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. 

Before opening a Pull Request (PR), **please review our contribution guidelines**. PRs that do not adhere to the contribution guidelines will be ignored to maintain standard formatting and project continuity.

### Feature Requests & Support
If you have any feature requests, suggestions, or feedback, feel free to reach out via email at: **yoavlevy@levy.net**

---

## 📄 License

This project is licensed under the **MIT License**. For more details, please see the `LICENSE` file at the root of this repository.
