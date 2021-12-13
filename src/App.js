import "./App.css";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import MyImage from "./components/MyImage";

function App() {
  return (
    <Router>
      <div >
        <Header />
        <nav id="button-container">
          <button className="about-button">
            <Link to="/about">About Me</Link>
          </button>
          <button className="project-button">
            <Link to="/projects">Projects</Link>
          </button>
          <button className="contact-button">
            <Link to="/contact">Contact Me</Link>
          </button>
        </nav>
        <MyImage />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      ;{" "}
    </Router>
  );
}

export default App;
