import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const services = [
  {
    icon: <i className="bi bi-phone"></i>,
    title: "Mobile App & Website Development",
    description: "High-quality Flutter apps and responsive React.js website development.",
  },
  {
    icon: <i className="bi bi-server"></i>,
    title: "Server-Side Development",
    description: "Backend development using Node.js for scalable and secure server-side solutions.",
  },
  {
    icon: <i className="bi bi-clipboard-check"></i>,
    title: "Project Consultation",
    description: "Expert consultation to refine ideas and create detailed project roadmaps.",
  },
  {
    icon: <i className="bi bi-palette"></i>,
    title: "Graphic Designing",
    description: "Custom graphic design solutions for branding, UI/UX, and promotional materials.",
  },
];

const Services = () => {
  return (
    <section id="services" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-[#FCB415]">Services</h2>
          <div className="w-20 h-1 bg-[#FCB415] mx-auto mt-3 rounded-full animate-wave"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1b1b1b]">
              Turning Your Ideas Into Reality
            </h2>
            <p className="text-gray-600 mt-4">
              Delivering high-quality apps, websites, and designs. Helping you create solutions that stand out.
            </p>
            {/* <button className="mt-6 px-6 py-3 border-2 border-[#FCB415] text-[#FCB415] rounded-full transition duration-300 hover:bg-[#FCB415] hover:text-white">
              See all services
            </button> */}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="text-4xl text-[#FCB415] mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;