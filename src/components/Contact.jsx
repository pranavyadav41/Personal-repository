import { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section id="connect" className="contact py-12 bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <img src={contactImg} alt="Contact Us" className="w-[80%] mx-auto" />
          </motion.div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl text-white placeholder-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-900 transition duration-300"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl text-white placeholder-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-900 transition duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl text-white placeholder-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-900 transition duration-300"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2xl text-white placeholder-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-900 transition duration-300"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className="w-full px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-3xl text-white placeholder-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-900 transition duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="relative overflow-hidden bg-white text-black font-bold py-3 px-12  text-lg transition duration-300 hover:text-white"
                >
                  <span className="relative z-10">{buttonText}</span>
                  <div className="absolute inset-0 h-full w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>
                </button>
                {status.message && (
                  <p
                    className={`mt-4 text-center ${
                      status.success === false ? "text-red-300" : "text-green-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact form button:hover::before {
          width: 100%;
        }
      `}</style>
    </section>
  );
};