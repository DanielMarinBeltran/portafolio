import React from "react";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import LastProjects from "../components/LastProjects/LastProjects";

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Articles />
      <LastProjects />
      <Footer />
    </div>
  )
}

export default Home