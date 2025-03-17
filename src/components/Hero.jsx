import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import CookieConsent, { Cookies } from "react-cookie-consent";
import myVideo from "../images/bannervdo.mp4";

const Hero = () => {
  const [showBanner, setShowBanner] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay failed:", error));
    }
  }, []);

  // useEffect(() => {
  //   const consent = localStorage.getItem("cookieConsent");
  //   if (!consent) {
  //     setShowBanner(true);
  //   }
  // }, []);

  // const acceptCookies = () => {
  //   localStorage.setItem("cookieConsent", "true");
  //   setShowBanner(false);
  // };

  // if (!showBanner) return null;

  return (
    <>
    {/* content and video without padding full height */}
    <div
          className="m-auto  h-[90vh]"
          
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row justify-between text-center lg:text-left "
          >
              <div
              className=" lg:w-1/2 flex flex-col justify-center pl-24 pr-6 bg-black"
            
            >
              <div className=" lg:mt-10 "   data-aos="zoom-in"
              data-aos-delay="200">
                <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                  Cybersecurity That Protects More Than Just Data – It Protects
                  Dreams
                </h1>
                <p className="font-semibold text-xl text-white">
                  Cyber threats aren’t going away—but neither are we.
                </p>
                <p className="font-normal  text-lg pt-5 text-white">
                  We’re here to make sure you, your business, and your ideas
                  stay protected so you can move forward with confidence.
                </p>
              </div>

              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8 mt-5">
                <Link
                  to="/contact"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                  data-aos="fade-up"
                >
                  Contact
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http:www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            
              <div
              className="flex justify-center items-center w-full lg:w-1/2  bg-black h-[90vh]"
              
            >
              <div className=" rounded-md  w-full " data-aos="fade-up"
              data-aos-delay="300">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className="w-full  rounded-xl"
                >
                  <source src={myVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          
          
          </div>
        </div>
    {/* content and video without padding full height */}
   
    </>
  );
};

export default Hero;
