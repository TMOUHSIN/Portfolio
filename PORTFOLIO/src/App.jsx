import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Health from './Health.jsx';
import HomePage from './HomePage.jsx';
import Hyatt from './Hyatt.jsx';
import './index.css'
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <HomePage/>
          </>
        } />
        
        <Route path="/HealthViewAI.app" element={<Health />} />
        <Route path="/HyattStay.app" element={<Hyatt />} />
      </Routes>
    </Router>
  );
}

export default App;
