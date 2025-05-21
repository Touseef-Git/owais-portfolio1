import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Portfolio Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonials";
import Services from "./components/Services";
import FAQs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CompanySlider from "./components/CompanySlider";

// Admin Components (you will create these)
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import AddProject from "./admin/AddProject";
import EditProject from "./admin/EditProject";

function PortfolioPage() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section>
        <CompanySlider />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section>
        <Testimonial />
      </section>
      <section id="services">
        <Services />
      </section>
      <section>
        <FAQs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public SPA (portfolio site) */}
        <Route path="/" element={<PortfolioPage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add" element={<AddProject />} />
        <Route path="/admin/edit/:id" element={<EditProject />} />
      </Routes>
    </Router>
  );
}

export default App;
