import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default App;
