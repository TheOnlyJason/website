import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      {/* multiple record discs */}
      <div className="record-bg record-bg--small" />
      <div className="record-bg record-bg--medium" />
      <div className="record-bg record-bg--large" />
      {/* <Navbar /> */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
