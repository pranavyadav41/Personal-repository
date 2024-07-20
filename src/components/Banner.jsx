import React, { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 300);
  const [index, setIndex] = useState(1);
  const toRotate = ["Mern stack developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner mt-0 pt-52 pb-24 bg-[url('./assets/img/banner-bg.png')] bg-top bg-cover bg-no-repeat" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 xl:w-6/12 lg:ml-24">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="inline-block font-bold text-xl text-white tracking-wide py-2 px-3 bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] border border-white border-opacity-50 mb-4">
                  Welcome to my Portfolio
                </span>
                <h1 className="text-6xl text-white font-bold tracking-wide leading-none mb-5">
                  {`Hi! I'm Pranav, `}  
                   <span className="txt-rotate" dataPeriod="1000" data-rotate=' Mern stack developer'>
                    <span className="wrap border-r-2 border-gray-600">{text}</span>
                  </span>
                </h1>
                <p className="text-[#B8B8B8] text-lg tracking-wide leading-relaxed w-11/12 mb-12">
                I'm a self-taught MERN stack developer driven by curiosity and a love for crafting innovative web applications. My journey as a developer has been driven by an insatiable curiosity and a strong desire to create meaningful and innovative web applications.
                </p>
                <HashLink to="#connect">
                <button 
                  className="text-white font-bold text-xl flex items-center transition-all duration-300 hover:gap-6"
                >
                  Let's Connect <ArrowRightCircle size={25} className="ml-2.5 transition-all duration-300" />
                </button>
                </HashLink>
              </div>}
            </TrackVisibility>
          </div>
          <div className="w-full md:w-1/2    xl:w-4/12 mt-10">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="animate-updown" />
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}