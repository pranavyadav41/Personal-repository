import React from 'react';
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="py-16 bg-cover bg-center bg-no-repeat border-t border-gray-500 text-white" style={{backgroundImage: "url('src/assets/img/footer-bg.png')"}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4 md:mr-5">
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <SocialIcon href="#" src={navIcon1} alt="LinkedIn" />
              <SocialIcon href="#" src={navIcon2} alt="Facebook" />
              <SocialIcon href="#" src={navIcon3} alt="Instagram" />
            </div>
            <p className="text-sm text-[#B8B8B8] font-normal tracking-wider text-center md:text-right">
              © {new Date().getFullYear()} Pranav Yadav. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, src, alt }) => (
  <a
    href={href}
    className="
      relative
      flex items-center justify-center
      w-10 h-10
      rounded-full 
      border border-gray-400
      transition-all duration-300 ease-in-out
      group
      overflow-hidden
      bg-gray-200
      bg-opacity-10
      hover:bg-white
      hover:border-white
    "
  >
    <img 
      src={src} 
      alt={alt} 
      className="h-5 w-5 relative z-10 transition-all duration-300 ease-in-out group-hover:filter group-hover:invert" 
    />
    <span className="
      absolute inset-0 
      w-full h-full
      bg-white 
      transform scale-0 group-hover:scale-100
      transition-all duration-300 ease-in-out
      rounded-full
      -z-10
    "></span>
  </a>
);