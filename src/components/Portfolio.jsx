import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { db } from "../firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(data);
    });

    return () => unsubscribe();
  }, []);

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
        {projects.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No projects found.</p>
        ) : (
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
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
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg justify-between rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
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
        )}
      </div>
    </section>
  );
};

export default Portfolio;
