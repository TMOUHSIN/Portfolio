import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Health from './Health.jsx';
function HomePage() {
    return (
        <>
            <div className="HomePage">
                <Header />
                <section id="about">
                    <About />
                </section>
                <section id="services">
                    <Services />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </>
    );
}

export default HomePage;
