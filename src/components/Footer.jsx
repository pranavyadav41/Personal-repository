// import { MailchimpForm } from "./MailchimpForm";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="py-12 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('src/assets/img/footer-bg.png')"}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* <img src={logo} alt="Logo" className="w-1/4" /> */}
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right flex flex-col gap-3">
          <div className="flex items-center justify-end space-x-4 mr-16">
              <SocialIcon href="#" src={navIcon1} />
              <SocialIcon href="#" src={navIcon2} />
              <SocialIcon href="#" src={navIcon3} />
            </div>
            <p className="text-sm text-[#B8B8B8] font-normal tracking-wider mr-16">
              Copyright 2022. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, src }) => (
    <a
      href={href}
      className="
        relative
        flex items-center justify-center
        w-9 h-9
        rounded-full
         border border-gray-500
        transition-all duration-300 ease-in-out
        group
        overflow-hidden
        bg-gray-200
        bg-opacity-10
0        
      "
    >
      <img src={src} alt="" className="h-4 w-4 relative z-10 group-hover:invert" />
      <span className="
        absolute inset-0 
        w-0 group-hover:w-full 
        h-full
        bg-white 
        transition-all duration-300 ease-in-out
        -z-10
      "></span>
    </a>
  )
  

