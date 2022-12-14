import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import About from "./components/About";
import Home from "./components/Home";
import ModalError from "./components/ModalError";
import Nav from "./components/Nav";
import Video from "./components/Video";
import Videos from "./components/Videos";
import Search from "./components/Search";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
