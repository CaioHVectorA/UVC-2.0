import Header from "./components/Header"
import Footer from "./components/Footer"
import useGetCreateStorage from "./Hooks/useGetCreateStorage";
import React from "react";
import Inicial from "./components/Inicial";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
const App = () => {
return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Inicial />} />
    <Route path="Home" element={<Home />} />
  </Routes>
</BrowserRouter>
)
}

export default App;
