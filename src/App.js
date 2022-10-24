import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TechStack from "./Components/TechStack/TechStack";
import Pages from "./pages/pages";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Pages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
