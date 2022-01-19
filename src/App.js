import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import HomePage from './components/MainBody/Home'

function App() {

  const [loggedIn, setloggedIn] = useState(true)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          {loggedIn ? (<Route exact path="/home" element={<HomePage setloggedIn={setloggedIn}/>} />) : null}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
