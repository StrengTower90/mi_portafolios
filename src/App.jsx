import React, { useState, useEffect } from "react";
import "./App.css";
import { Cover } from "./components/cover/Cover";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Slider } from "./components/slider/Slider";
import { Info } from "./components/info/Info";
import { Footer } from "./components/footer/Footer";
import { Skills } from "./components/skills/Skills";
import { Phrase } from "./components/info";


 const App = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

   const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      {/* <Navbar /> */}
      <Cover />
      <section className="section__container">
        <About />
        <section className="middle_container">
          <Skills />
          <Phrase />   
          <Slider />
          <Info />
          <Footer />          
        </section>            
      </section>      
    </div>
  );
};

export default App;

