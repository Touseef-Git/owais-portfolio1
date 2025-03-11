import React from "react";

const Resume = () => {
    return (
        <section id="resume" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className=" py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#FCB415] ">Resume</h2>
                    <div className="w-20 h-1 bg-[#FCB415] mx-auto mt-3 rounded-full animate-wave"></div>
                    {/* <p className="text-gray-600 mt-2">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                        consequatur vel illum qui dolorem.
                    </p> */}

                </div>

                {/* Work Experience Section */}
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold text-[#0f2943]">Work Experience</h3>
                    <p className="text-gray-600 mt-2 mb-5">
                        Experienced Senior Flutter Developer with 5+ years in building high-performance Android & iOS apps. Skilled in Dart, Flutter, Firebase, Restful APIs, and State Management (GetX).<br />

                        Proven expertise in team leadership, real-time chat, in-app purchases, live streaming, and payment integrations (Stripe, Square, Google Pay, Apple Pay).Passionate about creating scalable, user-friendly, and innovative mobile solutions.
                    </p>

                    {/* Timeline */}

                    <div className="space-y-6">
                        {/* Experience 1 */}
                        <div className="flex ">
                            <div className="w-1/3">
                                <h4 className="text-lg font-bold text-[#0f2943]">Esols Technologies Private Ltd
                                </h4>
                                <p className="text-sm text-gray-500">Feb, 2022 - Current</p>
                            </div>
                            <div className="w-2/3">
                                <h5 className="text-lg font-bold text-[#0f2943]">Chief Technology Officer (CTO)</h5>
                                {/* <p className="text-gray-600 mt-1">
                                    Quia nobis sequi est occaecati aut. Reprehenderit et iusto quae reciendis et quis. Eius vel ratione.
                                </p> */}
                                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                                    <li> Lead and manage technical teams to ensure successful project delivery.</li>
                                    <li>Solve complex technical issues in existing projects.</li>
                                    <li>Evaluate and plan new projects to align with company goals.</li>
                                    <li> Ensure the technical quality and scalability of all projects.</li>
                                    <li>Foster a collaborative environment to enhance team productivity and technical expertise.</li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience 2 */}
                        <div className="flex ">
                            <div className="w-1/3">
                                <h4 className="text-lg font-bold text-[#0f2943]">Powernow Technology INC</h4>
                                <p className="text-sm text-gray-500"> Mar 2023 - Oct 2023
                                    Remote</p>
                            </div>
                            <div className="w-2/3">
                                <h5 className="text-md font-bold text-[#0f2943]">Senior Flutter Developer
                                </h5>
                                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                                    <li>Collaborated with a team of Flutter developers on the GR Live project, a large-scale
                                        application similar to TikTok.</li>
                                    <li>CollaboratedDeveloped and integrated key modules including chat functionality and live streaming
                                        features.</li>
                                    <li>Collaborated Maintained and optimized the project to ensure consistent performance and reliability.</li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience 3  */}
                        <div className="flex">
                            <div className="w-1/3">
                                <h4 className="text-lg font-bold text-[#0f2943]">Techorra.
                                </h4>
                                <p className="text-sm text-gray-500">Jun 2021 - Sept 2021
                                </p>
                            </div>

                            <div className="w-2/3">
                                <h5 className="text-md font-bold text-[#0f2943]">Frontend Developer (Flutter)</h5>
                                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                               <li> UI Development: Build and design mobile app interfaces using Flutter’s widget-based
                                framework, ensuring responsive and adaptive user experiences across both Android and iOS.</li>
                                <li>State Management: Implement and manage application state management using GetX to
                                maintain a consistent user experience.</li>
                                </ul>
                            </div>
                            {/* <div className="absolute -left-6 top-1.5 w-4 h-4 bg-purple-500 rounded-full"></div> */}


                        </div>
                    </div>


                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default Resume;
