import React from "react";
import { Link } from "react-router-dom";
import whyhome from '../images/home_why.jpeg'
const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-full p-2 md:p-16 h-5/6" id="about" >
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          Why Cybertron ?
        </h2>
       
        <div
          className="flex flex-col lg:flex-row py-4 justify-between text-center lg:text-left mx-4"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-2xl float-right" src={whyhome} />
          </div>
          <div
            className="flex-col my-16 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-blue-900 font-bold">
              We’re more than a cybersecurity firm
            </h3>
            <p className="text-xl mt-3 font-medium">We are your digital bodyguards, reputation protectors, and technology enablers.</p>
            <div className="mt-6">
              <p className="my-3 text-md text-black font-bold">
            ✔ Proactive, AI-Driven Security – <span className="font-normal">We don’t wait for threats to strike; we prevent them before they begin.</span>
              </p>
            </div>

            <div>
              <p className="my-3 text-md text-black font-bold">
              ✔ 24/7 Crisis Management & Monitoring –<span className="font-normal"> Security and reputation risks don’t sleep, and neither do we.</span>
              </p>
            </div>
            <div>
              <p className="my-3 text-md text-black font-bold">
              ✔ Tailored Solutions, Not One-Size-Fits-All –<span className="font-normal">Your business is unique. Your security and reputation strategies should be too.</span> 
              </p>
            </div>
            <div>
              <p className="my-3 text-md text-black font-bold">
              ✔ Trusted by 1300+ Global Brands –<span className="font-normal"> From startups to Fortune 500 companies, we secure businesses at every level.</span>
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </>
  );
};

export default Intro;
