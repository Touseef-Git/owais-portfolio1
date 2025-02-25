import React from 'react'; // Add this line
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Hero from './components/HeroSection';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonials';
import Services from './components/Services';
import FAQs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>   
      <Navbar/>   
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Testimonial/>
      <Services/>
      <FAQs/>
      <Contact/>
      <Footer/>
      {/* <Hero/> */}
    </div>
  );
}

export default App;
