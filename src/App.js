
import React from "react";
// import logo from "./logo.svg";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills"
import Project from  "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience"
import "./App.css";




function App() {
  return (
    <div className="App">
      <Navbar/>
  <Intro/>
  <Skills/>
  <Project/>
  <Experience/>
  <Contact/>
    </div>
  );
}

export default App;
