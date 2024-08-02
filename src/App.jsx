import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
    </>
  );
}

export default App;
