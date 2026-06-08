
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";
import Quiz from "./quiz";
import Questions from "./assets/questions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;