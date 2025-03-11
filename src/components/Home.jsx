import React from "react";
import profile2 from "../assets/profile2.png"; // Profile image import

const Home = () => {
  return (
    <section id="home" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="flex flex-col md:flex-row mx-auto max-w-7xl items-center justify-between px-10 py-16">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left ">
        <h1 className="text-5xl font-bold text-[#1b1b1b] leading-tight">
        Building the Digital World
        <br /> <span className="text-[#FCB415]">You Imagine </span>
        </h1>
        <p className="text-gray-600 mt-5">
        Creating unique, engaging digital experiences that connect brands with their audience in meaningful ways.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-[#FCB415] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#3d03b8]">
            View My Work
          </button>
          <button className="border border-gray-400 text-[#FCB415] px-8 py-3 rounded-full shadow-md hover:bg-[#3d03b8] hover:text-white">
            Let's Connect
          </button>
        </div>
        {/* Stats */}
        <div className="mt-8 flex justify-center md:justify-start space-x-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1b1b1b]">5+</h2>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1b1b1b]">30+</h2>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1b1b1b]">20+</h2>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative">
        {/* <div className="absolute w-64 h-64 bg-purple-200 rounded-full -z-10 animate-wave"></div> */}
        <img src={profile2} alt="Profile" className="w-90 md:w-98 z-10" />
        {/* <div className="absolute w-64 h-64 bg-gray-200 rounded-full -z-10 left-0 bottom-0"></div> */}
      </div>
    </section>
  );
};

export default Home;
