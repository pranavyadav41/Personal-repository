import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className={`flex justify-between items-center ${scrolled ? "md:mt-0" : "md:mt-5"} md:mr-16`}>
          <Link to="/" className="flex items-center">
           
          </Link>

          <div className="hidden lg:flex items-center space-x-5 text-lg">
            <div className="hidden lg:flex space-x-6 lg:gap-5 lg:mr-5">
              <NavLink
                to="#home"
                active={activeLink === "home"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </NavLink>
              <NavLink
                to="#skills"
                active={activeLink === "skills"}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </NavLink>
              <NavLink
                to="#projects"
                active={activeLink === "projects"}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </NavLink>
            </div>

            <div className="flex items-center space-x-2">
              <SocialIcon href="https://linkedin.com/in/pranavyadav41" icon={<FaLinkedin />} />
              <SocialIcon href="https://github.com/pranavyadav41" icon={<FaGithub />} />
              <SocialIcon href="https://leetcode.com/u/akpranavyadav/" icon={<SiLeetcode />} />
            </div>

            <HashLink to="#connect">
              <button className="font-bold text-white border border-white py-4 px-6 text-lg bg-transparent transition-all duration-300 ease-in-out relative group hover:text-[#121212]">
                <span className="relative z-10">Let's Connect</span>
                <span className="absolute inset-0 w-0 group-hover:w-full bg-white transition-all duration-300 ease-in-out -z-10"></span>
              </button>
            </HashLink>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-black bg-opacity-90 p-4 rounded-lg">
            <NavLink
              to="#home"
              active={activeLink === "home"}
              onClick={() => onUpdateActiveLink("home")}
              mobile
            >
              Home
            </NavLink>
            <NavLink
              to="#skills"
              active={activeLink === "skills"}
              onClick={() => onUpdateActiveLink("skills")}
              mobile
            >
              Skills
            </NavLink>
            <NavLink
              to="#projects"
              active={activeLink === "projects"}
              onClick={() => onUpdateActiveLink("projects")}
              mobile
            >
              Projects
            </NavLink>

            <div className="flex justify-center space-x-4 mt-4">
              <SocialIcon href="#" icon={<FaLinkedin />} />
              <SocialIcon href="#" icon={<FaGithub />} />
              <SocialIcon href="#" icon={<SiLeetcode />} />
            </div>

            <HashLink to="#connect" className="block mt-4">
              <button className="w-full bg-white text-black px-6 py-2 hover:bg-gray-200 transition-all duration-300">
                Let's Connect
              </button>
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, active, onClick, mobile }) => (
  <HashLink
    smooth
    to={to}
    className={`
      ${active ? "text-white" : "text-gray-400"} 
      ${mobile ? "block py-2 text-center" : ""}
      hover:text-blue-600 transition-colors duration-300
    `}
    onClick={onClick}
  >
    {children}
  </HashLink>
);

const SocialIcon = ({ href, icon }) => (
  <a
  
    href={href}
    className="
      relative
      flex items-center justify-center
      w-11 h-11
      rounded-full
      border border-gray-500
      transition-all duration-300 ease-in-out
      group
      overflow-hidden
      bg-gray-100
      bg-opacity-10
    "
  >
    <span className="text-white text-xl relative z-10 group-hover:text-black">{icon}</span>
    <span className="
      absolute inset-0 
      w-0 group-hover:w-full 
      h-full
      bg-white 
      transition-all duration-300 ease-in-out
      -z-10
    "></span>
  </a>
);