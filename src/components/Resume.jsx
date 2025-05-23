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
                    <h3 className="text-3xl font-semibold mb-3 text-[#0f2943]">Work Experience</h3>

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
                                <ul className="list-disc list-outside text-gray-600 mt-2 space-y-1">
                                    <li> Lead and manage technical teams to ensure successful project delivery.</li>
                                    <li>Solve complex technical issues in existing projects.</li>
                                    <li>Evaluate and plan new projects to align with company goals.</li>
                                    <li> Ensure the technical quality and scalability of all projects.</li>
                                    <li>Foster a collaborative environment to enhance team productivity and technical expertise.</li>
                                </ul>
                                <h5 className="text-lg font-bold mt-3 text-[#0f2943]">Team Lead.
                                </h5>
                                <ul className="list-disc list-outside text-gray-600 mt-2 space-y-1">
                                    <li>Lead and manage a team, dividing projects into modules and assigning tasks to ensure
                                        efficient workflow.</li>
                                    <li>Review and provide feedback on team members' code to maintain high-quality standards.</li>
                                    <li>Address and resolve technical issues, ensuring smooth project progress and maintenance of
                                        ongoing projects.</li>
                                    <li>Mentor and train interns, fostering their growth and development within the team.</li>

                                </ul>
                                <h5 className="text-lg font-bold mt-3 text-[#0f2943]">Senior Flutter Developer
                                </h5>
                                <ul className="list-disc list-outside text-gray-600 mt-2 space-y-1">
                                    <li>Lead the development and deployment of mobile applications on both Google Play Store
                                    and Apple App Store.</li>
                                    <li>Ensure smooth functionality by identifying and resolving technical issues throughout the
                                    development process.</li>
                                    <li>Oversee the management and maintenance of both new and existing projects, ensuring
                                    continuous improvement and scalability.</li>
                                    <li>Collaborate with cross-functional teams to deliver high-performance, responsive mobile applications.</li>
                                    <li>Provide technical guidance and support to junior developers, ensuring adherence to project
                                    timelines and quality standards.</li>
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
                                <ul className="list-disc list-outside text-gray-600 mt-2 space-y-1">
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
                                <ul className="list-disc list-outside text-gray-600 mt-2 space-y-1">
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
