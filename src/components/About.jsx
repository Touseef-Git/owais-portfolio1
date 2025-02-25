import React from "react";
import profile from '../assets/profile.webp'
import signature from '../assets/signature.webp'

const About = () => {
    return (
        <section id="about" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="bg-gray-100 flex md:flex-row mx-auto max-w-8xl items-center justify-between py-16">
            <div className="max-w-6xl mx-auto max-w-7xl px-6 lg:px-12">
                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-[#3d03b8]">
                    About
                </h2>
                <div className="w-20 h-1 bg-[#3d03b8] mx-auto mt-3 rounded-full animate-wave"></div>
                <p className="text-center text-gray-600 mt-2">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem
                </p>

                {/* About Container */}
                <div className="mt-12 flex flex-col lg:flex-row items-center gap-12">
                    {/* Profile Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={profile}
                            alt="Profile"
                            className="rounded-lg shadow-lg w-100 h-100 object-cover transform hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold text-[#3d03b8]">
                            About Me
                        </h3>
                        <h2 className="text-2xl font-bold text-[#0f2943] mt-2">
                            Flutter Developer
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>

                        {/* Details Card */}
                        <div className="mt-6 bg-white shadow-md p-6 rounded-lg">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-700">Name</p>
                                    <p className="text-[#0f2943] font-bold">Muhammad Owais</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Phone</p>
                                    <p className="text-[#0f2943] font-bold">+123 456 7890</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Age</p>
                                    <p className="text-[#0f2943] font-bold">26 Years</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Email</p>
                                    <p className="text-[#0f2943] font-bold">email@example.com</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Occupation</p>
                                    <p className="text-[#0f2943] font-bold">Software Engineer</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">Nationality</p>
                                    <p className="text-[#0f2943] font-bold">Pakistani</p>
                                </div>
                            </div>
                        </div>

                        {/* Signature */}
                        
                            
                        <div className="mt-6">
                            <p className="italic text-gray-700 font-semibold">Muhammad Owais</p>
                            <p className="text-gray-500 text-sm">Adipiscing Elit, Lorem Ipsum</p>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default About;
