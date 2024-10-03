import React from 'react'
import './App.css'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'

function App() {
  document.title = "Atharv Joundal | Portfolio";
  return (
    <div className="App">
      <Header />
      <Nav />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
