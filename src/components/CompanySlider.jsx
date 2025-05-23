import React from "react";
import egasi from "../assets/companieslogo/egasi.png";
import lingua from "../assets/companieslogo/lingua.png";
import yoogi from "../assets/companieslogo/yoogi.png";
import Brainbook from "../assets/companieslogo/Brainbook.jpg";
import new_logo from "../assets/companieslogo/new_logo.jpg";

const companies = [
  { name: "Egasi", logo: egasi, link: "https://www.google.com" },
  { name: "Lingua", logo: lingua, link: "https://www.facebook.com" },
  { name: "Yoogi", logo: yoogi, link: "https://www.amazon.com" },
  { name: "Brainbook", logo: Brainbook, link: "https://www.microsoft.com" },
  { name: "Crypto Miner", logo: new_logo, link: "https://www.apple.com" },
];

const CompanySlider = () => {
  return (
    <div className="overflow-hidden bg-white/80 p-5 rounded-xl w-full">
      <div className="flex gap-10 animate-scroll">
        {[...companies, ...companies, ...companies].map((company, index) => (
          <a key={index} href={company.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <img src={company.logo} alt={company.name} className="h-12 opacity-70 hover:opacity-100 transition-all" />
            <span className="text-gray-600 text-sm mt-2">{company.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;
