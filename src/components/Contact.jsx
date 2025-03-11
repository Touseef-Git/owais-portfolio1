import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send Form Data to Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "e5e3f4a9-cf85-4fdc-92fd-6bdb99334069"); // Replace with your Web3Forms access key
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully!", result);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        console.error("Form submission failed:", result.message);
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
      className="p-6 md:p-12 flex flex-col md:flex-row gap-10 bg-gray-100"
    >
      {/* Left Side - Contact Info */}
      <div className="md:w-1/2 space-y-5">
        <h3 className="text-[#FCB415] uppercase text-3xl font-bold">Contact</h3>
        <h2 className="text-4xl font-bold text-[#1b1b1b]">
        Get in Touch & Let's Create!
        </h2>
        <p className="text-gray-600">
        Let’s Connect! Whether you have a project idea, need technical expertise, or just want to discuss Flutter development, feel free to reach out. I’m always open to new opportunities and collaborations! 
        </p>
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-[#FCB415] text-xl" />
            muh.owais.dev@gmail.com

          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#FCB415] text-xl" />
            +923352410002 

          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#FCB415] text-xl" />
            G 9/2, Islamabad, Pakistan
          </p>
          <a href="#" className="text-[#FCB415] font-semibold flex items-center gap-2 hover:underline">
            Open Map →
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 bg-white shadow-lg rounded-xl p-6 md:p-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FCB415]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FCB415]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FCB415]"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FCB415]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FCB415] text-white p-3 rounded-lg font-semibold hover:bg-[#FCB415] transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;