import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import { Footer, Header  } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Consulting from './pages/Consulting';


const App = () => {
  return (
    <div className="App">

      <div className="gradient__bg">
        {/* <Navbar /> */}
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/consulting' element={<Consulting />} />
      </Routes>

      <Footer />

      {/* <Brand />
      <WhatVIC />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />*/}

    </div>
  )
}

export default App