import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi"; // Import Icons

const faqsData = [
    {
        question: "What services do you offer?",
        answer: "I specialize in mobile app development (iOS and Android), website development using React.js, and server-side development with Node.js. Additionally, I offer project consultation, API integration, app deployment, and technical troubleshooting. My expertise also includes project management, leading development teams, and providing professional graphic design services through my skilled team of designers."
    },
    {
        question: "Do you work on both Android and iOS apps and websites?",
        answer: "Yes, I develop apps for both platforms using Flutter, ensuring a seamless user experience across devices."
    },
    {
        question: "Can you help with app deployment to the App Store and Google Play Store?",
        answer: "Absolutely! I handle the complete app deployment process, including ensuring compliance with store policies and guidelines."
    },
    {
        question: "Do you provide project consultation?",
        answer: "Yes, I offer professional consultation to help you refine your project idea, define technical requirements, and plan a roadmap for successful development and deployment."
    },
    {
        question: "Can you work with existing apps or projects?",
        answer: "Yes, I can enhance, maintain, or troubleshoot existing projects. I also help in adding new features and improving app performance."
    },
    {
        question: "What industries have you worked with?",
        answer: "I've worked across various industries, including e-commerce, real estate, finance, sports media, social networking, and rewards-based platforms."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, I offer post-launch support, including updates, bug fixes, and performance optimization to ensure your app remains reliable and up-to-date."
    },
    {
        question: "What is your development process?",
        answer: "My process involves understanding your requirements, creating a project plan, developing the app, rigorous testing, and finally deploying it to the respective app stores. I ensure continuous communication and feedback throughout the project."
    },
    {
        question: "Do you work on fixed-price projects or hourly rates?",
        answer: "I offer flexible pricing models, including fixed-price contracts for well-defined projects and hourly rates for tasks requiring ongoing work or flexibility."
    },
    {
        question: "Can you integrate third-party services or APIs into the app?",
        answer: "Yes, I can integrate various third-party services and APIs, such as payment gateways, Firebase, social media platforms, and more, based on your app's requirements."
    },
    {
        question: "How can I get started?",
        answer: "Simply reach out through the contact form on my website, provide a brief overview of your project or query, and I'll get back to you promptly to discuss further."
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="max-w-3xl mx-auto mt-10 p-6">

            <div className="text-center mb-5">
                <h2 className="text-3xl font-bold text-[#FCB415]">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-[#FCB415] mx-auto mt-3 rounded-full animate-wave"></div>
                {/* <p className="text-gray-600 mt-2">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                    consequatur vel illum qui dolorem.
                </p> */}

            </div>
            <div className="mt-6 space-y-4">
                {faqsData.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg ">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`flex justify-between items-center w-full p-6 text-lg font-medium transition-all ${openIndex === index
                                    ? "bg-yellow-100 border-yellow-500 text-yellow-700"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <BiChevronDown className="text-yellow-600 text-2xl" />
                            ) : (
                                <BiChevronRight className="text-gray-500 text-2xl" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="p-6 text-gray-700 bg-yellow-50 border-t border-yellow-500">
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
