import React from "react";

const Resume = () => {
    return (
        <section id="resume" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className=" py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#3d03b8] ">Resume</h2>
                    <div className="w-20 h-1 bg-[#3d03b8] mx-auto mt-3 rounded-full animate-wave"></div>
                    <p className="text-gray-600 mt-2">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                        consequatur vel illum qui dolorem.
                    </p>

                </div>

                {/* Work Experience Section */}
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold text-[#0f2943]">Work Experience</h3>
                    <p className="text-gray-600 mt-2 mb-5">
                        Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.
                    </p>

                    {/* Timeline */}

                    <div className="space-y-6">
                        {/* Experience 1 */}
                        <div className="flex ">
                            <div className="w-1/3">
                                <h4 className="text-lg font-bold text-[#0f2943]">Etiam Industries</h4>
                                <p className="text-sm text-gray-500">Jun, 2023 - Current</p>
                            </div>
                            <div className="w-2/3">
                                <h5 className="text-lg font-bold text-[#0f2943]">Project Lead</h5>
                                <p className="text-gray-600 mt-1">
                                    Quia nobis sequi est occaecati aut. Reprehenderit et iusto quae reciendis et quis. Eius vel ratione.
                                </p>
                            </div>
                        </div>

                        {/* Experience 2 */}
                        <div className="flex ">
                            <div className="w-1/3">
                                <h4 className="text-lg font-bold text-[#0f2943]">Nullam Corp</h4>
                                <p className="text-sm text-gray-500">2019 - 2023</p>
                            </div>
                            <div className="w-2/3">
                                <h5 className="text-md font-bold text-[#0f2943]">Senior Graphic Design Specialist</h5>
                                <p className="text-gray-600 mt-1">
                                    Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials.</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                                    <li>Supervise the assessment of all graphic materials to ensure quality and accuracy.</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience 3  */}
                        <div className="flex">
                            <div className="w-1/3">
                                <h4 className="text-lg font-bold text-[#0f2943]">Stepping Stone Ltd.</h4>
                                <p className="text-sm text-gray-500">2015 - 2019</p>
                            </div>

                            <div className="w-2/3">
                            <h5 className="text-md font-bold text-[#0f2943]">Graphic Design Specialist</h5>
                            <p className="text-gray-600 mt-1">
                                Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus.
                            </p>
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
