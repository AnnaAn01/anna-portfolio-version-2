import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
