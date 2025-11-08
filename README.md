<div align="center">
  
  <h1>MEVN Full Stack App</h1>
  <p>Full-stack web application built with MongoDB, Express, Vue.js, and Node.js 🚀</p>

<!-- Badges -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/mevn_full_stack_app)
![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/mevn_full_stack_app)
![GitHub stars](https://img.shields.io/github/stars/yourusername/mevn_full_stack_app?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/mevn_full_stack_app?style=social)

<h4>
    <a href="https://github.com/yourusername/mevn_full_stack_app/issues/new?template=bug_report.md&title=[BUG]">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/yourusername/mevn_full_stack_app/issues/new?template=feature_request.md&title=[FR]">Request Feature</a>
</h4>
</div>

---

## 🌟 About the Project

**MEVN Full Stack App** — это учебный и демонстрационный проект, основанный на стеке:
- **MongoDB** — база данных  
- **Express.js** — серверная логика  
- **Vue.js** — фронтенд  
- **Node.js** — серверное окружение  

Проект демонстрирует, как можно связать backend и frontend в одном приложении, используя REST API и современные подходы к разработке на JavaScript.


---

## ⚙️ Project Structure

```
mevn_full_stack_app/
│
├── client/      # Vue.js frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/      # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   └── package.json
│
└── README.md
```

---

## 🧰 Tech Stack

<details>
<summary>Server</summary>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express.js</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  <li><a href="https://mongoosejs.com/">Mongoose</a></li>
</ul>
</details>

<details>
<summary>Client</summary>
<ul>
  <li><a href="https://vuejs.org/">Vue.js</a></li>
  <li><a href="https://cli.vuejs.org/">Vue CLI</a></li>
  <li><a href="https://vuetifyjs.com/">Vuetify</a></li>
  <li><a href="https://axios-http.com/">Axios</a></li>
</ul>
</details>

<details>
<summary>Dev Tools</summary>
<ul>
  <li><a href="https://nodemon.io/">Nodemon</a></li>
  <li><a href="https://eslint.org/">ESLint</a></li>
  <li><a href="https://prettier.io/">Prettier</a></li>
</ul>
</details>

---

## 🧭 Getting Started

### 📦 Installation

Клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/PPavell234/mevn_full_stack_app
cd .......\mevn_full_stack_app
```

---


### 🖥️ Запуск сервера (Backend)

Перейдите в директорию `server`:
```bash
cd .......\mevn_full_stack_app\server
```

Установите зависимости и запустите сервер:
```bash
npm install
npm run dev
```

По умолчанию сервер запустится на **http://localhost:5000**

---

### 💻 Запуск клиента (Frontend)

Перейдите в директорию `client`:
```bash
cd .......\mevn_full_stack_app\client
```

Установите зависимости и запустите клиент:
```bash
npm install
npm run serve
```

Клиент будет доступен по адресу **http://localhost:8080**

---

### 🗄️ Database Configuration (MongoDB)

Проект подключается к базе данных MongoDB через MongoDB Compass.
Используется локальная база данных по адресу:

```bash
DB_URL = mongodb://localhost:27017/mevn_full_stack
PORT = 5000
```


Вы можете открыть MongoDB Compass, нажать "New Connection", и вставить строку подключения:

**mongodb://localhost:27017/mevn_full_stack**


После запуска сервера вы сможете увидеть коллекции, создаваемые приложением в MongoDB.

---

## Features

✅ REST API  
✅ CRUD операции  
✅ Подключение к MongoDB  
✅ UI с Vuetify  
✅ Разделённый frontend и backend  

---


---

<div align="center">
  <b>Made with ❤️ using the MEVN stack</b>
</div>
