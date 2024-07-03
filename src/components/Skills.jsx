import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export const Skills = () => {
  const skills = [
    {
      icon: <SiMongodb className="text-6xl text-green-500" />,
      name: "MongoDB",
    },
    { icon: <SiExpress className="text-6xl text-white" />, name: "Express" },
    { icon: <FaReact className="text-6xl text-blue-500" />, name: "React" },

    { icon: <FaNodeJs className="text-6xl text-green-600" />, name: "Node.js" },
  ];

  return (
    <section className="skill py-16 relative" id="skills">
      <div className="container mx-auto flex justify-center">
        <div className="skill-bx bg-[#151515] rounded-[64px] text-center px-12 py-16 -mt-32 w-[80%]">
          <h2 className="text-5xl text-white font-bold mb-6">Skills</h2>
          <p className="text-[#B8B8B8] text-lg tracking-wide leading-relaxed mb-14">
          As a MERN stack developer, I specialize in building robust and scalable web applications. My expertise spans the entire development process, from crafting responsive front-end interfaces with React to designing efficient back-end systems using Node.js and Express. With MongoDB, I create flexible and powerful database solutions. My skills enable me to deliver full-stack solutions that are not only functional but also user-friendly and performance-optimized.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="item flex flex-col items-center">
                <div className="mb-4">{skill.icon}</div>
                <h5 className="text-lg font-semibold text-white">
                  {skill.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="background-image absolute top-1/4 left-0 bottom-0 w-2/5 z-[-1]"
        src="src/assets/img/color-sharp.png"
        alt="Image"
      />
    </section>
  );
};
