import React from "react";
import Articles from "../../components/Articles/Articles";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
// import SkillsBar from "../../components/Profiencies";
import { Projects } from "../../components/Projects/Projects";

function Home() {
  return (
    <div style={{backgroundColor:'#eeeeee'}}>
      <Header />
      <Hero />
      {/* <SkillsBar /> */}
      <Articles />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home