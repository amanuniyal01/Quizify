import React from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />

      </Routes>
    </Router>
  );

}

export default App