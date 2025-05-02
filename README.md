# 🧠 Quiz

A dynamic, browser-based quiz application built with **React**, **TypeScript**, **Vite**, and tested with **Cypress** and **Vitest**. Users can take a 10-question quiz, view their score, and restart to improve.

---

## 🚀 Features

- 🧩 Randomized quiz questions
- ✅ Real-time scoring
- 🔁 Restart quiz functionality
- ⚛️ Built using React + TypeScript
- 🧪 Component and E2E tests via Cypress
- ⚙️ Fast build and dev workflow with Vite

---

## 🖼️ Demo

Coming soon — deployed on [Render](https://render.com/)

---

## 📂 Project Structure

```md
.
├── client/ // the client application
├── cypress/ // Folder for Cypress
├── component/ // Folder for component tests
└── Quiz.cy.jsx // Component tests for the Quiz component
├── e2e/ // Folder for end-to-end tests
└── quiz.cy.js // End-to-end tests for the Tech Quiz
├── fixtures/ // Folder for test fixtures
└── questions.json // Mock data for testing
└── tsconfig.json
├── server/ // the server application
├── .gitignore
├── cypress.config.ts // Runs the application using imports from lib/
├── package.json
├── tsconfig.json
└── README.md // App description, link to video, setup and usage instructions
```

## 🛠️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/anshul1555/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies and see the DB
   ```
   npm install && npm run seed
   ```
3. Run the app locally
   ```
   npm run start:dev
   ```
4. Run Cypress tests
   ```
   npm run cypress
   ```

## 🧩 Component Testing (Quiz.cy.tsx)

- Start Cypress in Component Mode

```
  npx cypress open --component
```

- Choose a browser (Chrome, Electron, etc.)

- Select the test file

- cypress/component/Quiz.cy.tsx

- Cypress will launch and mount the React component in isolation.

## 🔁 End-to-End Testing (quiz.cy.ts)

- Make sure your app is running
  npm run dev

- Start Cypress in E2E mode
  npx cypress open --e2e

- Choose a browser
- Select the test file
- cypress/e2e/quiz.cy.ts
- Cypress will open your app in a browser and simulate real user behavior.

## 📚 Technologies Used

- React 18
- TypeScript
- Vite
- Cypress
- Vitest
- Bootstrap (optional UI styling)

---

## 👨‍💻 Author

**Anshul Sharma**

- 📫 [GitHub](https://github.com/Anshul1555)
- 📧 anshulsharma@gmail.com
