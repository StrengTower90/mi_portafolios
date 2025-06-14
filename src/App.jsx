import React, { useState, useEffect } from "react";
import "./styles.css";
import "./App.css";
import { Cover } from "./components/cover/Cover";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/slider/Projects.jsx";
import { Process } from "./components/work-process/Process.jsx";
import { Contact } from './components/contacto/Contact.jsx';
import CreatedBy from './components/created/CreatedBy.jsx';


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
      <div className="header-container">
        <Navbar isScrolling={scrollHeight} />
        <Cover />
      </div>
      <section className="section__container">
        <About />
        <section className="middle_container">
          <Skills />
          <Projects />
          <Process />
          <Contact />
          <CreatedBy />
        </section>
      </section>
    </div>
  );
};

export default App;

