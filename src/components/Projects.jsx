import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, technologies, image, githubLink, liveLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-gray-900 rounded-md border border-gray-600 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-12"
  >
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex space-x-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaLink size={24} className="text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1  bg-gray-800 text-gray-300 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const MiniProjectCard = ({ title, description, technologies, githubLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gray-800 rounded-md border border-gray-600  p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} className="text-gray-400 hover:text-white transition-colors" />
      </a>
    </div>
    <p className="text-gray-400 text-sm mb-3">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Works = () => {
  const mainProjects = [
    {
      title: "Pet Grooming Service Booking App",
      description: "PAW pet grooming service is a web application built using React, Node.js, Express, and MongoDB. It features streamlined authentication using Nodemailer and Google login, enhancing security with JWT tokens. The platform allows image uploads using Multer and S3 bucket for efficient storage and includes real-time chat and videocall functionality using Socket.io & Zegocloud.Included Precise location selection with Mapbox integration and It also integrates a secure payment gateway through Paypal for seamless transactions.",
      technologies: ["React", "Express", "MongoDB", "Tailwind CSS", "Node.js"],
      image: "src/assets/img/project-img1.png",
      githubLink: "https://github.com/muhammedanas-ea/Travello",
      liveLink: "https://travello-olive.vercel.app/"
    },
    {
      title: "Ecommerce Website",
      description: "SOUNDMAGIC is a dynamic e-commerce platform for audio enthusiasts, offering a seamless shopping experience. Built with Node.js, Express, and MongoDB, it features a user-friendly interface, secure payments, advanced search and filtering, and real-time order tracking. The responsive design, powered by CSS, HTML, and Bootstrap, ensures a smooth experience across all devices.",
      technologies: ["CSS", "HTML", "Ajax", "Bootstrap", "Node.js", "Express", "MongoDB"],
      image: "src/assets/img/project-img2.png",
      githubLink: "https://github.com/muhammedanas-ea/ebicycles",
      liveLink: "https://ebicycle.website/"
    }
  ];

  const miniProjects = [
    {
      title: "Auth Application",
      description: "Developed and implemented a comprehensive user managementsystem, integrating functionalities such as user registration,authentication, and authorization.",
      technologies: ["React Js","Redux", "Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/weather-app"
    },
    {
      title: "Chatroom Application",
      description: "Designed and developed a real world world chatroom application",
      technologies: ["Node js","socket io","Javascript","html","css"],
      githubLink: "https://github.com/yourusername/todo-list"
    },
    {
      title: "OLX Clone",
      description: "Designed and successfully cloned the Olx website.",
      technologies: ["React Js", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/portfolio"
    }
  ];

  return (
    <div className="   min-h-screen py-20"  style={{backgroundImage:"url(../assets/img/color-sharp.png)"}}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">MY WORKS</h2>
          <h1 className="text-5xl font-bold text-white">
            What <span className="text-[#99438A]">I have built</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-1">
          {mainProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-10"
        >
          Mini <span className="text-[#99438A] text-4xl">Projects</span> 
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {miniProjects.map((project, index) => (
            <MiniProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};