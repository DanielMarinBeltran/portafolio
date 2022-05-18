import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutRedux from "./pages/AboutRedux/AboutRedux";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/FirstStepsWithRedux" element={<AboutRedux/>} />
      </Routes>
    </div>
  );
}

export default App;
