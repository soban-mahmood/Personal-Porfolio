import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <section id="contact" className="p-3 bg-gray-100 font-[anzo3]">
      <div className=" mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800 my-8">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send me a message
            </h3>
            <form className="space-y-4" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                value={formData.message}
                onChange={handleChange}
                name="message"
              />
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col space-y-4 ">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <a
                href="mailto:your-email@example.com"
                className="text-gray-700 hover:text-blue-500"
              >
                Sobanmehmood4343@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-500 text-2xl" />
              <p className="text-gray-700">+92 334 0704343</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <p className="text-gray-700">Faisalabad, Pakistan</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/soban-mehmood4343/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-700 transition" />
              </a>
              <a
                href="https://github.com/soban-mahmood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-gray-800 text-3xl hover:text-gray-900 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
