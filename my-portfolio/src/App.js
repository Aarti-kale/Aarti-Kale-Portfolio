import react from "react";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";

import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
