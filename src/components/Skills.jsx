import React from 'react';

export const Skills = () => {
  const skills = [
    { name: "Web Development", image: "src/assets/img/react.svg" },
    { name: "Brand Identity", image: "src/assets/img/icons8-express-js.svg" },
    { name: "Logo Design", image: "src/assets/img/node-js.svg" },
    { name: "Web Development", image: "src/assets/img/mongodb-original-wordmark.svg" },
  ];

  return (
    <section className="skill py-16 relative" id="skills">
      <div className="container mx-auto flex justify-center">
        <div className="skill-bx bg-[#151515] rounded-[64px] text-center px-12 py-16 -mt-32 w-[90%]">
          <h2 className="text-5xl text-white font-bold mb-6">Skills</h2>
          <p className="text-[#B8B8B8] text-lg tracking-wide leading-relaxed mb-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> 
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="item">
                <img src={skill.image} alt={skill.name} className="w-1/2 mx-auto mb-4" />
                <h5 className="text-lg font-semibold">{skill.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img className="background-image absolute top-1/4 left-0 bottom-0 w-2/5 z-[-1]" src="src/assets/img/color-sharp.png" alt="Image" />
    </section>
  )
}