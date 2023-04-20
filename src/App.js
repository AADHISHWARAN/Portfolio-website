import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './App.css';
import Portfolio from './Components/portfolio';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <About />
        <Portfolio/>
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;

