import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/contact"; 
import AboutTag from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <Nav />
      <AboutTag />
       <About />
       <Skills />
       <Projects />
       <Contact />
      </header>
    </div>
  );
}

export default App;
