import { useState } from "react";
import { Link } from "react-router-dom";
import infozone from '../images/infozone.jpg'
export default function InfoZone() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <div className="hero" id="hero">
        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left mx-4"
          >
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="flex justify-center lg:mt-10">
                <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                  “
                </div>
                <h1 className="mb-5  text-center md:text-5xl text-3xl font-bold text-blue-900">
                  Infozone
                </h1>
                <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                  ”
                </div>
              </div>

              <div className="text-lg font-normal tracking-tight mb-5 text-black-500">
                Welcome to{" "}
                <a href="www.cybertron.it.com" className="text-blue-900">
                  (www.cybertron.it.com)
                </a>
                , your partner in digital transformation. We empower businesses
                with innovative solutions, including cybersecurity, digital
                marketing, website development, cloud hosting, and e-commerce
                services. Our comprehensive expertise helps businesses succeed
                in the ever-evolving digital landscape.
              </div>
              <p className="font-normal text-md">
                <span className="text-blue-900 font-semibold">Cybertron</span>: Your first line of defense against cyber threats. We
                provide real-time threat detection, unbreakable data privacy,
                and enterprise-grade security to keep you ahead in a rapidly
                changing cyber landscape.
              </p>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
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
              className="flex lg:justify-end w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="p-10">
                <img
                  alt="card img"
                  className="rounded-t float-right duration-1000 w-full"
                  src={infozone}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 ">
        {/* Tab Buttons */}
        <div className="flex space-x-4  pb-2 justify-between px-24">
          <button
            className={`p-2 ${
              activeTab === "All"
                ? "bg-blue-900 rounded-md text-white border-b border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            className={`p-2 ${
              activeTab === "Cyber Security"
                ? "bg-blue-900 rounded-md text-white border-b border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Cyber Security")}
          >
            Cyber Security
          </button>
          <button
            className={`p-2 ${
              activeTab === "Blogs"
                ? "bg-blue-900 text-white border-b rounded-md border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Blogs")}
          >
            Blogs
          </button>
          <button
            className={`p-2 ${
              activeTab === "Brands"
                ? "bg-blue-900 text-white border-b rounded-md border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Brands")}
          >
            Brands
          </button>
          <button
            className={`p-2 ${
              activeTab === "Cloud & IT Solutions"
                ? "bg-blue-900 rounded-md text-white border-b border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Cloud & IT Solutions")}
          >
            Cloud & IT Solutions
          </button>
          <button
            className={`p-2 ${
              activeTab === "Digital Marketing"
                ? "bg-blue-900 text-white border-b rounded-md border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Digital Marketing")}
          >
            Digital Marketing
          </button>
          <button
            className={`p-2 ${
              activeTab === "Cloud Security"
                ? "bg-blue-900 text-white border-b rounded-md border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Cloud Security")}
          >
            Cloud Security
          </button>

          <button
            className={`p-2 ${
              activeTab === "Services"
                ? "bg-blue-900 text-white border-b rounded-md border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Services")}
          >
            Services
          </button>

          <button
            className={`p-2 ${
              activeTab === "VPN"
                ? "bg-blue-900 text-white border-b rounded-md border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("VPN")}
          >
            VPN
          </button>
          <button
            className={`p-2 ${
              activeTab === "Web Solutions"
                ? "bg-blue-900 text-white border-b rounded-md border-blue-900"
                : "border-b-2 border-blue-900 text-black"
            } hover:bg-blue-900 hover:text-white hover:rounded-md `}
            onClick={() => setActiveTab("Web Solutions")}
          >
            Web Solutions
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 lg:px-24 px-3">
          {activeTab === "All" && (
            <>
              <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl py-1 w-full">
                <div className="px-6" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-2">
                          <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                              <img
                               style={{height:250}}
                                alt="card img"
                                className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src="https://t3.ftcdn.net/jpg/05/36/79/16/360_F_536791618_XJ3Rq8ggF8vP79Jlt8cbZOfKQwH5OBfJ.jpg"
                              />
                              <h2 className="font-semibold my-4 text-2xl text-center">
                              Protecting Your Online Presence & Managing Crisis
                              </h2>
                              <p className="text-md font-medium">
                                Your reputation is your currency. We monitor, manage, and
                                protect your brand from misinformation, negative press, and
                                digital attacks—so you always stay in control of your
                                narrative.
                              </p>
                            </div>
                          </div>
              
                          <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm ">
                              <img
                                alt="card img"
                                className="rounded-t  group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src="https://hgs.cx/wp-content/uploads/2023/11/social-identity.jpg"
                                style={{height:250}}
                                
                              />
                              <h2 className="font-semibold my-4 text-2xl text-center">
                                Advanced Cybersecurity & Digital Protection
                              </h2>
                              <p className="text-md font-medium">
                                AI-driven security frameworks prevent cyberattacks before they
                                happen. From penetration testing to real-time monitoring, we
                                keep your data, systems, and networks impenetrable.
                              </p>
                            </div>
                          </div>
              
                        
              
                          <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                              <img
                              styles={{height:250}}
                                alt="card img"
                                className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src="https://static.vecteezy.com/system/resources/previews/005/732/516/non_2x/e-commerce-online-shopping-digital-marketing-internet-business-technology-concept-on-virtual-screen-free-photo.jpg"
                              />
                              <h2 className="font-semibold my-4 text-2xl text-center ">
                                Secure E-Commerce & SaaS Platforms
                              </h2>
                              <p className="text-md font-medium">
                                We design, develop, and optimize platforms that drive revenue
                                while ensuring bulletproof security. 
                              </p>
                            </div>
                          </div>
              
                          <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
              
                              <img
                              style={{height:250}}
                                alt="card img"
                                className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src="https://www.shutterstock.com/image-photo/work-safety-compliance-concept-first-600nw-2490330855.jpg"
                              />
                              <h2 className="font-semibold my-4 text-2xl text-center ">
                              Secure Data Management & Compliance
              
                              </h2>
                              <p className="text-md font-medium">
                              Cybersecurity isn’t just about protection—it’s about compliance. We help businesses meet GDPR, HIPAA, and industry regulations while safeguarding sensitive data.
              
                              </p>
                            </div>
                          </div>
                          <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                              <img
                              styles={{height:250}}
                                alt="card img"
                                className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src="https://www.pixartprinting.co.uk/blog/wp-content/uploads/2022/08/DIGITAL-MARKETING.jpg"
                              />
                              <h2 className="font-semibold my-4 text-2xl text-center ">
                              Growth-Driven Digital Marketing & SEO
                              </h2>
                              <p className="text-md font-medium">
                                We design, develop, and optimize platforms that drive revenue
                                while ensuring bulletproof security.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
              
              </div>
            </>
          )}

          {activeTab === "Brands" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
               brand
              </h1>
             
            </div>
          )}

           {activeTab === "Cyber Security" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
               brand
              </h1>
             
            </div>
          )}

          {activeTab === "Cloud & IT Solutions" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
                solution
              </h1>
           
            </div>
          )}
         {activeTab === "Blogs" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
                blog
              </h1>
            
            </div>
          )}
            {activeTab === "Cloud Security" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
              Cloud Security
              </h1>
             
            </div>
          )}
            {activeTab === "Digital Marketing" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
                digital
              </h1>
             
            </div>
          )}
            {activeTab === "Services" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
                services
              </h1>
             
            </div>
          )}
            {activeTab === "VPN" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
                vpn
              </h1>
             
            </div>
          )}
            {activeTab === "Web Solutions" && (
            <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
              <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
                web
              </h1>
             
            </div>
          )}
        </div>
      </div>
    </>
  );
}
