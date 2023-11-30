import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import About from './pages/About.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
);
