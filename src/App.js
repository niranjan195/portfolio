import React from "react";
import MyChatBot from "./components/ChatBot";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Contact />
      <MyChatBot />
    </div>
  );
}

export default App;
