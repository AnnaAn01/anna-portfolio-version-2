import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TechStack from "./Components/TechStack/TechStack";
import Pages from "./pages/pages";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
      <Portfolio />
      <About />
    </>
  );
}

export default App;
