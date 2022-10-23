import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TechStack from "./Components/TechStack/TechStack";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
