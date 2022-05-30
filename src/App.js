import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutRedux from "./pages/AboutRedux/AboutRedux";
import InConstructionPage from "./pages/InConstruction/InConstructionPage";
import LocalStorageBlogPage from "./pages/LocalStorageBlogPage/LocalStorageBlogPage";
import WatchListLocal from "./pages/ProjectLocalStorage/WatchListLocal";
import './lib/font-awesome/css/all.min.css';
import './components/Projects/LocalStorage/localStyle.css';
import AddLocal from "./pages/ProjectLocalStorage/AddLocal";
import WatchedLocal from "./pages/ProjectLocalStorage/WatchedLocal";
import { GlobalProvider } from './contexts/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/FirstStepsWithRedux" element={<AboutRedux/>} />
        <Route path="/InConstruction" element={<InConstructionPage/>} />
        <Route path="/LocalStorage" element={<LocalStorageBlogPage/>} />
        <Route path="/WatchList" element={<WatchListLocal/>} />
        <Route path="/Add" element={<AddLocal/>} />
        <Route path="/Watched" element={<WatchedLocal/>} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
