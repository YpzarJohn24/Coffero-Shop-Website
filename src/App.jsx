import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Menu from "./components/Menu/Menu";
import Choose from "./components/Choose/Choose";
import Stats from "./components/Stats/Stats";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Choose />
      <Stats />
      <Gallery />
    </>
  );
}

export default App;
