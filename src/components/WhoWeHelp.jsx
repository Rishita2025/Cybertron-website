import React from 'react'
import help1 from '../images/help1.jpg'
import help4 from '../images/help4.webp'
import ecom from "../images/ecom.jpeg";
import startup from "../images/for-startup.avif";
function WhoWeHelp() {
  return (
      <div id="services" className="bg-[#fff2b7] mt-16">
            <section data-aos="zoom-in-down">
              <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                  who We Help ?
                </h2>
                <h2 className="mt-4 mx-12 text-center text-lg lg:text-2xl font-medium text-black">
                  We are deeply committed to the growth and success of our clients.
                </h2>
              </div>
    
              <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:px-16 lg:mt-10">
                  <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-[#fff] rounded-lg shadow-2xl p-3 group">
                    <div className="m-2 text-justify text-sm">
                      <img
                        style={{ height: 180 }}
                        alt="card img"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out "
                        src={help1}
                      />
                      <h2 className="font-semibold my-4 text-lg text-center  ">
                        Individuals & Entrepreneurs
                        <span className="font-normal text-lg block">
                          Protect Your Digital Life
                        </span>
                      </h2>
                      <p className="text-md font-medium text-center">
                        Secure your personal data, online reputation, and digital
                        presence against hackers, fraud, and misinformation.
                      </p>
                    </div>
                  </div>
    
                  <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                    <div className="m-2 text-justify text-sm">
                      <img
                        style={{ height: 180 }}
                        alt="card img"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                        src={startup}
                      />
                      <h2 className="font-semibold my-4 text-xl text-center">
                        For Startup{" "}
                        <span className="font-normal text-lg block">
                          Launch, Grow, and Succeed
                        </span>
                      </h2>
                      <p className="text-md font-medium text-center">
                        Build, scale, and innovate without cyber risks slowing you
                        down. We provide secure, scalable solutions that grow with
                        you.
                      </p>
                    </div>
                  </div>
    
                  <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                    <div className="m-2 text-justify text-sm">
                      <img
                        style={{ height: 180 }}
                        alt="card img"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out "
                        src={ecom}
                      />
                      <h2 className="font-semibold my-4 text-lg text-center  ">
                        E-Commerce & SaaS
                        <span className="font-normal text-lg block">
                        Grow Online
                        </span>
                      </h2>
                      <p className="text-md font-medium text-center">
                        Protect transactions, secure customer data, and optimize
                        performance while ensuring bulletproof security.
                      </p>
                    </div>
                  </div>
    
                  <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group">
                    <div className="m-2 text-justify text-sm">
                      <img
                        style={{ height: 180 }}
                        alt="card img"
                        width={500}
                        className="rounded-md group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                        src={help4}
                      />
                      <h2 className="font-semibold my-4 text-lg text-center ">
                        For Business{" "}
                        <span className="font-normal text-lg block">
                          Unlock Your Business
                        </span>
                      </h2>
                      <p className="text-md font-medium text-center" >
                        From compliance to crisis management, we provide
                        enterprise-grade cybersecurity, online reputation
                        management, and digital protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
  )
}

export default WhoWeHelp