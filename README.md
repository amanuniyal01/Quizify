📚 Quizify – Interactive React Quiz App

Quizify is a modern, responsive, and dynamic React-based quiz application that allows users to test their knowledge with multiple-choice questions.
The app highlights correct and incorrect answers, calculates score, and lets users restart the quiz.

🚀 Features

✔️ Fully responsive UI (Mobile + Desktop)

✔️ Multiple-choice questions

✔️ Highlights correct & incorrect answers

✔️ Displays final score

✔️ Reset quiz option

✔️ Smooth navigation using React Router

✔️ Clean UI built with Tailwind CSS

🛠 Tech Stack

React JS

React Router DOM

Tailwind CSS

JavaScript (ES6+)


📂 Project Structure
Quizify/
│
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Quiz.js
│   ├── Data.js
│   ├── App.js
│   ├── index.js
│
├── public/
│   ├── index.html
│
├── package.json
├── README.md

⚙️ Installation & Setup

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/your-username/quizify.git

2️⃣ Navigate into the project folder
cd quizify

3️⃣ Install dependencies
npm install

4️⃣ Start the development server

If you used Vite:

npm run dev


If you used Create-React-App:

npm start

🧠 How It Works

Questions are stored in Data.js

User selects an option → app checks correctness

Correct answer → turns green

Incorrect answer → selected option red, correct one green

Score increases automatically

After last question → result screen appears

User can restart the quiz
