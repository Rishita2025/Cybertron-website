import React from "react";
import { Link } from "react-router-dom";
// import heroImg from '../images/';
import ourstory from "../../images/our_story.avif";
import wehelp from "../../images/we_help.webp";
import business from "../../images/for-business.png";
import startup from "../../images/for-startup.avif";
import indivisiual from "../../images/indivisual.jpeg";
import ecom from "../../images/ecom.jpeg";
import { MdElectricBolt, MdOutlineSecurity } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import AboutTextCard from "../card/AboutTextCard";
import whychooseus from '../../images/about_why.jpeg'
import styles from '../../styles/card.module.css'
import help1 from '../../images/help1.jpg'
import help4 from '../../images/help4.webp'
function AboutBanner() {
  return (
    <>
      <div
        className="m-auto overflow-hidden  mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6 "
        data-aos="zoom-in"
      >
        <div
          id="hero"
          className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left mx-4 "
        >
          <div
            className="lg:w-full text-center flex flex-col justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex justify-center">
              <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                “
              </div>
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                Our Story
              </h1>
              <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                ”
              </div>
            </div>
            <div className="text-2xl font-semibold tracking-tight mb-5 text-black">
              Born from a Mission to Protect
            </div>
            <div className="text-xl font-normal tracking-tight  text-black-500 lg:px-16">
              Cybertron Technologies started with a simple yet powerful belief:
              Security should never be an afterthought. Our founder saw too many
              businesses, startups, and individuals blindsided by cyber
              threats—not because they didn’t care, but because they didn’t know
              where to start. The cybersecurity industry was filled with complex
              jargon, overpriced solutions, and a lack of real, human-focused
              protection.
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
                src={ourstory}
              />
            </div>
          </div>
        </div>
      </div>

      {/* our story */}

      {/* <div id="services" className="bg-[#fff2b7] ">
        <section data-aos="zoom-in-down">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
              who We Help ?
            </h2>

            <div className="flex justify-center">
              <div className="w-44 border-b-4 border-blue-900"></div>
            </div>
            <h2 className="mt-4 mx-12 text-center text-lg lg:text-2xl font-semibold text-black">
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
                  <p className="text-md font-medium">
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
                  <p className="text-md font-medium">
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
                      Transform Your Online Business
                    </span>
                  </h2>
                  <p className="text-md font-medium">
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
                  <p className="text-md font-medium">
                    From compliance to crisis management, we provide
                    enterprise-grade cybersecurity, online reputation
                    management, and digital protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* why choose us */}

      <div
        className="m-auto max-w-full p-2 md:p-16 h-5/6 bg-[#fff2b7]"
        id="about"
      >
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          Why Choose Us ?
        </h2>
        <div className="flex justify-center">
          <div className="w-52 border-b-4 border-blue-900"></div>
        </div>

        <div
          className="flex flex-col lg:flex-row py-4 justify-between text-center lg:text-left mx-4 mt-6"
          data-aos="fade-up"
        >
          <div
            className="flex-col my-16 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-blue-900 font-bold">
              Unlocking digital potential, protecting your future
            </h3>
            <p className="text-xl mt-3 font-bold">
              Contact us today to learn more about our expertise, security-first
              approach, and affordable solutions!
            </p>
            <div className="mt-6">
              <p className="my-3 text-md text-black font-bold">
                Unparalleled Expertise –{" "}
                <span className="font-normal">
                  Our team of experts has years of experience in providing
                  top-notch digital solutions, ensuring you receive the best
                  guidance and support.
                </span>
              </p>
            </div>

            <div>
              <p className="my-3 text-md text-black font-bold">
                Security-First Approach –
                <span className="font-normal">
                  
                  We prioritize your security above all else, implementing
                  robust measures to safeguard your data and protect your online
                  presence.
                </span>
              </p>
            </div>
            <div>
              <p className="my-3 text-md text-black font-bold">
                Affordability Without Compromise –
                <span className="font-normal">
                  We believe exceptional digital solutions shouldn't break the
                  bank. Our services are designed to be affordable without
                  sacrificing quality or security.
                </span>
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

          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center items-end">
            <img
              alt="card img"
              className="rounded-lg float-right lg:pl-16"
              src={whychooseus}
            />
          </div>
        </div>
      </div>

      {/* our difference */}

      <div
        className="m-auto max-w-full p-2 md:p-16 h-5/6 bg-[#fff2b7]"
        id="about"
      >
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          The Cybertron Difference
        </h2>
        <div className="flex justify-center">
          <div className="w-96 border-b-4 border-blue-900"></div>
        </div>
        <h2 className="mt-4 mx-12 text-center text-lg lg:text-2xl font-semibold text-black">
          What Makes Us Unstoppable?
        </h2>
        <div
          className="flex   flex-col lg:flex-row py-4 justify-between text-center lg:text-left mx-4 mt-6"
          data-aos="fade-up"
        >
         
            <div className={`${styles.about_textCard} grid gap-5 grid-cols-1 md:grid-cols-2 m-5 rounded-lg`}>
              <AboutTextCard
                heading=" 💡 AI-Driven Protection"
                para=" We leverage cutting-edge artificial intelligence to detect, neutralize, and prevent cyber threats before they cause harm"
                list1="  - Advanced Threat Detection: Identify and mitigate potential threats before they strike."
                list2=" - Proactive Defense: Stay ahead of emerging threats with predictive analytics."
                list3=" - Enhanced Incident Response: Rapidly respond to and contain security incidents.
"
              />

              <AboutTextCard
                heading="🔒 Unbreakable Security, Unshakable Reputation"
                para="Our dual focus on cybersecurity and ORM means you’re protected
                  from both cyberattacks and digital defamation."
                list1=" - Reputation Management: Protect your online reputation and maintain customer trust"
                list2="- Fortified Defenses: Unbreakable security measures to safeguard your business."
                list3="- Proactive Monitoring: Real-time threat detection and response."
              />

              <AboutTextCard
                heading="⚡ Real-Time Monitoring & Response"
                para="We don’t wait for breaches or crises—we intervene instantly. Detects and mitigates threats like DDoS attacks, unauthorized access, or malware"
                list1=" - Instant Threat Detection: Identify and respond to security
                  incidents swiftly"
                list2="- Enhanced Security: Stay ahead of emerging threats with our
                  cutting-edge technology."
                list3=" - Minimized Downtime: Ensure business continuity with rapid
                  response and resolution."
                  
              />
              <AboutTextCard
                heading=" 📈 Custom Strategies for Maximum Impact"
                para="Every business is unique. We tailor our cybersecurity and ORM
                  strategies to fit yours"
                list1="- Personalized Approach: Solutions tailored to your unique
                  needs and goals."
                list2=" - Optimized Resources: Maximize your security investments."
                list3=" - Improved Compliance: Meet regulatory requirements with
                  confidence."
              />
            </div>
        </div>
      </div>
    </>
  );
}

export default AboutBanner;
