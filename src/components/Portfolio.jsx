import React, { useState } from "react";
import product1 from '../assets/portfolio/product1.jpg'
import app1 from '../assets/portfolio/app1.jpg'
import branding1 from '../assets/portfolio/branding1.jpg'
import product2 from '../assets/portfolio/product2.jpg'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const categories = ["All Work", "Web Design", "Graphics", "Motion", "Branding"];

  const projects = [
    {
      id: 1,
      category: "Web Design",
      title: "Modern Dashboard Interface",
      description: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
      image: app1,
    },
    {
      id: 2,
      category: "Graphics",
      title: "Creative Brand Identity",
      description: "Vestibulum id ligula porta felis euismod semper at vulputate.",
      image: product1,
    },
    {
        id: 3,
        category: "Motion",
        title: "Modern Dashboard Interface",
        description: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
        image: branding1,
      },
      {
        id: 3,
        category: "Branding",
        title: "Creative Brand Identity",
        description: "Vestibulum id ligula porta felis euismod semper at vulputate.",
        image: product2,
      },
  ];
    return (
        <section id="portfolio" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className=" py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#FCB415]">Portfolio</h2>
                    <div className="w-20 h-1 bg-[#FCB415] mx-auto mt-3 rounded-full animate-wave"></div>
                    {/* <p className="text-gray-600 mt-2">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                        consequatur vel illum qui dolorem.
                    </p> */}

                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mt-5 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-semibold ${
                activeFilter === category
                  ? "bg-[#FCB415] text-white"
                  : "text-gray-800 hover:text-[#FCB415]"
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((project) => activeFilter === "All Work" || project.category === activeFilter)
            .map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <span className="text-xs uppercase font-bold text-[#FCB415]">{project.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
        </section>
    )
}

export default Portfolio
