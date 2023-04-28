import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/contact"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <Nav />
       {/* <Footer /> */}
       <About />
       <Projects />
       <Contact />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
