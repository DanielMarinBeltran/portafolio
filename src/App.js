import React from "react";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Articles />
      <Footer/>
    </div>
  );
}

export default App;
