import React, { useState } from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setActiveSection(id);
    setMenuOpen(false); // Close menu on click
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return ( 
    <header className="bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-full mt-4 mx-auto max-w-7xl px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <a href="/" className="text-2xl font-bold text-[#0f2943]">
        Owais Folio
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {["home", "about", "resume", "portfolio", "services", "contact"].map(
          (section) => (
            <a
              key={section}
              onClick={() => handleScroll(section)}
              className={`cursor-pointer font-semibold ${
                activeSection === section
                  ? "text-[#3d03b8] border-b-2 border-[#3d03b8]"
                  : "text-gray-700 hover:text-[#3d03b8]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          )
        )}
      </nav>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-4">
        <img src={facebook} alt="Facebook" className="w-5 h-5 hover:opacity-75" />
        <img src={instagram} alt="Instagram" className="w-5 h-5 hover:opacity-75" />
        <img src={twitter} alt="Twitter" className="w-5 h-5 hover:opacity-75" />
        <img src={linkedin} alt="LinkedIn" className="w-5 h-5 hover:opacity-75" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg p-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">EasyFolio</h2>
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        {/* Menu Items */}
        <ul className="space-y-4 text-lg font-medium">
          {["home", "about", "resume", "portfolio", "services", "contact"].map(
            (section) => (
              <li
                key={section}
                className={`cursor-pointer ${
                  activeSection === section ? "text-[#3d03b8] font-bold" : "text-gray-600"
                }`}
                onClick={() => handleScroll(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
