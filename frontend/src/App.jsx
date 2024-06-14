// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Feedback from './pages/Feedback';
import Footer from './components/Footer';
import Contact from './pages/Contact';

const App = () => (
  <HelmetProvider>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </Router>
  </HelmetProvider>
  
);

export default App;
