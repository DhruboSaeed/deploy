import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import HomePage from "./components/MainBody/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="https://kind-bose-c112f6.netlify.app/" element={<Login />} />
          <Route path="https://kind-bose-c112f6.netlify.app/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
