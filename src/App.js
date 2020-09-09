import React from "react";
// import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
