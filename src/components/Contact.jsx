import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export const Contact = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub size={30} className="hover:text-[#99438A]" />,
      url: "https://github.com/pranavyadav41",
      delay: 0.8,
    },
    {
      id: 2,
      icon: <FaLinkedin size={30} className="hover:text-[#99438A]" />,
      url: "https://linkedin.com/in/pranavyadav41",
      delay: 0.9,
    },
    {
      id: 3,
      icon: <SiLeetcode size={30} className="hover:text-[#99438A]" />,
      url: "https://leetcode.com/u/akpranavyadav/",
      delay: 1,
    }
  ];
  return (
    <div className="" style={{backgroundImage:"url(../assets/img/color-sharp.png)"}} id="connect">
      <div className="text-white py-[50px] md:py-[100px] flex items-center justify-center container mx-auto max-w-screen-md  px-6 " id="contact">
        <div className="text-center">
          <motion.h5
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="text-[#fff] text-2xl font-bold"
          >
            MY CONTACT
          </motion.h5>
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="text-[#fff] text-5xl mt-2 font-bold"
          >
            Contact <span className="text-[#99438A]">Me Here</span>
          </motion.h1>
          <div className="text-[#ffffff9d] pt-10">
            <motion.h3
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="text-xl"
            >
              <a className="cursor-pointer" href="mailto:akpranavyadav@gmail.com">akpranavyadav@gmail.com</a>
            </motion.h3>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6 cursor-pointer">
            {socialMedia.map((item) => {
              return (
                <motion.a
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: item.delay,
                  }}
                  key={item.id}
                  href={item.url}
                >
                  {item.icon}
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};