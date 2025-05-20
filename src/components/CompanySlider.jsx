import React from "react";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", link: "https://www.google.com" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", link: "https://www.facebook.com" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", link: "https://www.amazon.com" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://www.microsoft.com" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", link: "https://www.apple.com" },
];

const CompanySlider = () => {
  return (
    <div className="overflow-hidden bg-white/80 p-5 rounded-xl w-full">
      <div className="flex gap-10 animate-scroll">
        {[...companies, ...companies].map((company, index) => (
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
