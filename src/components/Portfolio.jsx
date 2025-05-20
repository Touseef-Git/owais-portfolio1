import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Brainbook from "../assets/portfolio/Brainbook.jpg";
import new_logo from "../assets/portfolio/new_logo.jpg";
import egasi from "../assets/portfolio/egasi.png";
import lingua from "../assets/portfolio/lingua.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: "Crypto Miners",
      title: "Modern Dashboard Interface",
      description:
        "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
      image: new_logo,
    },
    {
      id: 2,
      category: "Egasi",
      title: "Creative Brand Identity",
      description:
        "Vestibulum id ligula porta felis euismod semper at vulputate.",
      image: egasi,
    },
    {
      id: 3,
      category: "Brainbook",
      title: "Modern Dashboard Interface",
      description:
        "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
      image: Brainbook,
    },
    {
      id: 4,
      category: "Lingua",
      title: "Creative Brand Identity",
      description:
        "Vestibulum id ligula porta felis euismod semper at vulputate.",
      image: lingua,
    },
  ];

  return (
    <section
      id="portfolio"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#FCB415]">Portfolio</h2>
          <div className="w-20 h-1 bg-[#FCB415] mx-auto mt-3 rounded-full animate-wave"></div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mt-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
            <div className="bg-white h-[400px] flex flex-col justify-between rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs uppercase font-bold text-[#FCB415]">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
