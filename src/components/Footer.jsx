import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-white">
      <p className="text-gray-600 text-sm">
        © Copyright <span className="font-bold">M,Owais</span> All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 my-3">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-white hover:bg-gray-600 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-white hover:bg-gray-600 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-white hover:bg-gray-600 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:text-white hover:bg-gray-600 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Designed By Text */}
      <p className="text-sm text-gray-600">
        Designed by{" "}
        <a
          href="https://www.linkedin.com/in/muhammad-tauseef-544104231"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3d03b8] font-semibold hover:underline"
        >
          Muhammad Tauseef
        </a>
      </p>
    </footer>
  );
};

export default Footer;
