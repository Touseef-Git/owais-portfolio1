import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonials2 from '../assets/testimonials/testimonials2.jpg'
import testimonials7 from '../assets/testimonials/testimonials7.jpeg'
import testimonials8 from '../assets/testimonials/testimonials8.png'
import testimonials10 from '../assets/testimonials/testimonials10.webp'
import testimonials9 from '../assets/testimonials/testimonials9.webp'
import { section } from "framer-motion/client";

const testimonials = [
  {
    id: 1,
    name: "Matt Brandon",
    role: "CEO",
    text: "Muhammad Owais is a highly skilled developer and a quick problem solver. He consistently delivers quality work and approaches challenges with efficiency and expertise. I always enjoy working with him and look forward to collaborating again in the future!",
    image: testimonials7,
  },
  {
    id: 2,
    name: "Muhammad Umer",
    role: "CEO",
    text: "Muhammad Owais transformed our project idea into a fully functional app and website. His technical expertise, combined with clear communication and professional insights, made the entire process smooth and efficient. We look forward to collaborating again!",
    image: testimonials7,
  },
  {
    id: 3,
    name: "Bahram Bahtiyar",
    role: "CEO",
    text: "Owais and his team delivered exceptional results for our branding and app development needs. The designs were creative and aligned perfectly with our vision. The app was flawlessly deployed and has been a hit with our users. Outstanding work!",
    image: testimonials7,
  },
];

const TestimonialSlider = () => {
  return (
    

    <div id="testimonials" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="py-16 px-6 lg:px-12 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold text-[#FCB415]">Testimonials</h2>
        <div className="w-20 h-1 bg-[#FCB415] mx-auto mt-3 rounded-full animate-wave"></div>
        {/* <p className="text-gray-600 mt-2">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur vel illum qui dolorem.
        </p> */}

      </div>
      <div className=" lg:px-12 max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 flex items-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-3/4 text-center md:text-left p-8">
                  <h3 className="text-xl font-bold text-[#1b1b1b]">
                  Transforming Ideas into Reality
                  </h3>
                  <p className="italic text-gray-700 mt-3">{testimonial.text}</p>
                  <div className="flex items-center mt-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="text-[#1b1b1b] font-semibold">
                        {testimonial.name}
                      </h4>
                      <span className="text-gray-500 text-sm">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center p-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-36 h-36 md:w-48 md:h-48 rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        {/* <div className="swiper-button-prev absolute left-4 text-gray-600 cursor-pointer hover:text-purple-700">
          <FaChevronLeft size={24} />
        </div>
        <div className="swiper-button-next absolute right-4 text-gray-600 cursor-pointer hover:text-purple-700">
          <FaChevronRight size={24} />
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSlider;
