import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

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

  // Send Email Function
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_iriis7v", // Tumhara Service ID
        "template_tgsid9o", // Tumhara Template ID
        {
          from_name: formData.name, // User ka naam
          reply_to: formData.email, // User ka email
          subject: formData.subject, // Email Subject
          message: formData.message, // User ka message
        },
        "nJRaBbujihlr7JHlG" // Tumhara Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Message sending failed! Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" className="p-6 md:p-12 flex flex-col md:flex-row gap-10 bg-gray-100">
      {/* Left Side - Contact Info */}
      <div className="md:w-1/2 space-y-5">
        <h3 className="text-gray-600 uppercase font-bold text-sm">Contact</h3>
        <h2 className="text-4xl font-bold text-gray-900">
          Nemo enim ipsam voluptatem quia voluptas aspernatur
        </h2>
        <p className="text-gray-600">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
        </p>
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-[#3d03b8] text-xl" />
            info@example.com
          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#3d03b8] text-xl" />
            +1 5589 55488 558
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#3d03b8] text-xl" />
            A108 Adam Street, New York, NY 535022
          </p>
          <a href="#" className="text-[#3d03b8] font-semibold flex items-center gap-2 hover:underline">
            Open Map →
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 bg-white shadow-lg rounded-xl p-6 md:p-8">
        <form className="space-y-4" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3d03b8]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3d03b8]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3d03b8]"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3d03b8]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#3d03b8] text-white p-3 rounded-lg font-semibold hover:bg-[#3d03b8] transition duration-300"
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
