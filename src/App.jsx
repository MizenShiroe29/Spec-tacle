import React from "react";
import './App.css';
import SiteNav from "./SiteNav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Specs from "./components/Specs";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <SiteNav></SiteNav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/specs" element={<Specs />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
