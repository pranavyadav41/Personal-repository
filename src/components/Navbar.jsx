import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
        <div className={`flex justify-end items-center mr-20 ${scrolled?"mt-0" :"mt-3"}`}>
          <Link to="/" className="flex items-center">
            {/* <img src={logo} alt="Logo" className="h-10" />
            <span className="ml-2 text-xl font-bold text-gray-800">Your Brand</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-6 md:gap-4 text-lg">
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

            <div className="flex items-center space-x-4">
              <SocialIcon href="#" src={navIcon1} />
              <SocialIcon href="#" src={navIcon2} />
              <SocialIcon href="#" src={navIcon3} />
            </div>

            <HashLink to="#connect">
              <button
                className="
  font-bold
  text-white
  border border-white
  py-[15px] px-[28px]
  text-lg
  bg-transparent
  transition-all duration-300 ease-in-out
  relative
  group
  hover:text-[#121212]
"
              >
                <span className="relative z-10">Let's Connect</span>
                <span
                  className="
    absolute inset-0 
    w-0 group-hover:w-full 
    bg-white 
    transition-all duration-300 ease-in-out
    -z-10
  "
                ></span>
              </button>
            </HashLink>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
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
              <path
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLink
              to="#home"
              active={activeLink === "home"}
              onClick={() => onUpdateActiveLink("home")}
              mobile
            />
            <NavLink
              to="#skills"
              active={activeLink === "skills"}
              onClick={() => onUpdateActiveLink("skills")}
              mobile
            />
            <NavLink
              to="#projects"
              active={activeLink === "projects"}
              onClick={() => onUpdateActiveLink("projects")}
              mobile
            />

            <div className="flex justify-center  mt-4">
              <SocialIcon href="#" src={navIcon1} />
              <SocialIcon href="#" src={navIcon2} />
              <SocialIcon href="#" src={navIcon3} />
            </div>

            <HashLink to="#connect" className="block mt-4">
              <button className="w-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-all duration-300">
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
  <Link
    to={to}
    className={`
      ${active ? "text-white " : "text-gray-400"} 
      ${mobile ? "block py-2 text-center" : ""}
      hover:text-blue-600 transition-colors duration-300
    `}
    onClick={onClick}
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, src }) => (
  <a
    href={href}
    className="
      relative
      flex items-center justify-center
      w-10 h-10
      rounded-full
      border border-gray-500
      transition-all duration-300 ease-in-out
      group
      overflow-hidden
       bg-gray-200
        bg-opacity-10
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
