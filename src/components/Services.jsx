import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const services = [
  {
    icon: <i class="bi bi-activity"></i>,
    title: "Eget nulla facilisi etiam",
    description: "Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.",
  },
  {
    icon: <i class="bi bi-easel"></i>,
    title: "Duis aute irure dolor",
    description: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor.",
  },
  {
    icon: <i class="bi bi-broadcast"></i>,
    title: "Excepteur sint occaecat",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
  {
    icon: <i class="bi bi-bounding-box-circles"></i>,
    title: "Tempor incididunt ut labore",
    description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
  },
];

const Services = () => {
  return (
    <section id="services" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="py-16">
      <div className="container mx-auto px-6 lg:px-16">
      <div className="text-center mb-5">
                    <h2 className="text-3xl font-bold text-[#3d03b8]">Services</h2>
                    <div className="w-20 h-1 bg-[#3d03b8] mx-auto mt-3 rounded-full animate-wave"></div>
                    <p className="text-gray-600 mt-2">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                        consequatur vel illum qui dolorem.
                    </p>

                </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2943]">
              Consectetur adipiscing elit sed do eiusmod tempor
            </h2>
            <p className="text-gray-600 mt-4">
              Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora.
            </p>
            <button className="mt-6 px-6 py-3 border-2 border-[#3d03b8] text-[#3d03b8] rounded-full transition duration-300 hover:bg-[#3d03b8] hover:text-white">
              See all services
            </button>
          </div>

          {/* Right Side Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="text-4xl text-[#3d03b8] mb-4">{service.icon}</div>
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
