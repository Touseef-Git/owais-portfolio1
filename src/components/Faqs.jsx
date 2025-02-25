import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi"; // Import Icons

const faqsData = [
    {
        question: "Non consectetur a erat nam at lectus urna duis?",
        answer:
            "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
    },
    {
        question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
        answer:
            "Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada.",
    },
    {
        question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
        answer:
            "Faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu.",
    },
    {
        question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
        answer:
            "Ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus.",
    },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="max-w-3xl mx-auto mt-10 p-6">

            <div className="text-center mb-5">
                <h2 className="text-3xl font-bold text-[#3d03b8]">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-[#3d03b8] mx-auto mt-3 rounded-full animate-wave"></div>
                <p className="text-gray-600 mt-2">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                    consequatur vel illum qui dolorem.
                </p>

            </div>
            <div className="mt-6 space-y-4">
                {faqsData.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg ">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`flex justify-between items-center w-full p-6 text-lg font-medium transition-all ${openIndex === index
                                    ? "bg-purple-100 border-purple-500 text-purple-700"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <BiChevronDown className="text-purple-600 text-2xl" />
                            ) : (
                                <BiChevronRight className="text-gray-500 text-2xl" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="p-6 text-gray-700 bg-purple-50 border-t border-purple-500">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
