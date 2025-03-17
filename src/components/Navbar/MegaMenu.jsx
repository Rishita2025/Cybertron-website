import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "../../styles/megamenu.module.css";
// import { button } from "@/components/ui/button";
import { SlPencil, SlSettings } from "react-icons/sl";
import {
  IoBriefcaseOutline,
  IoExtensionPuzzleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
// import { HiOutlineClipboardDocument } from "react-icons/hi2";
// import brandname from "../assets/images/brand-name.png";
// import brand2 from "../assets/images/brand2.jpg";
import { Link, NavLink } from "react-router-dom";
import { GrShieldSecurity } from "react-icons/gr";
// import endpointimg from "../assets/images/endpoint.png";
import { FaArrowRight, FaAward } from "react-icons/fa";
import { MdDone, MdOutlineDone, MdOutlineTravelExplore } from "react-icons/md";
// import { HiOutlineSearchCircle } from "react-icons/hi";
import logo from "../../images/logo-white.png";
import logowhite from "../../images/logo-white.png";
import { PiCloudCheckBold } from "react-icons/pi";
import { BsShieldLock } from "react-icons/bs";
import { FaRegChessKnight } from "react-icons/fa6";
import businessImg from "../../images/for-business.png";
import startupImg from "../../images/for-startup.avif";
import { IoIosDoneAll, IoMdDoneAll } from "react-icons/io";
import { brands, services, categories, product,company } from "../../data/menudata";
const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  console.log(brands);
  const menuItems = [
  
    {
      title: "Services",
      links: ["About Us", "Careers", "News", "Contact"],
    },
    {
      title: "Platforms",
      links: ["About Us", "Careers", "News", "Contact"],
    },
    {
      title: "Products",
      links: ["About Us", "Careers", "News", "Contact"],
    },
    {
      title: "Brands",
      links: ["About Us", "Careers", "News", "Contact"],
    },
    {
      title: "Pricing",
      links: ["About Us", "Careers", "News", "Contact"],
    },
  ];

  return (
    <nav className={styles.megamenu}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-0 ">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold">
            <Link to="/">
              <img width={170} src={logo} alt="brand logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 relative h-[100%]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative h-[100%]"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  variant="ghost"
                  className={`${styles.menu_btn} cursor-pointer font-medium  flex items-center h-[100%] hover:black-red-600 transition delay-100 duration-300 ease-in-out`}
                >
                  {item.title} <ChevronDown className="ml-1 w-4 h-max" />
                </button>
                {openMenu === index && (
                  <div className={index!==4?styles.submenu:styles.pricing} >
                    {item.title === "Platforms" ? (
                      <div className={`${styles.menu_link} rounded-b-2xl`}>
                        <div className=" flex flex-col justify-center items-center p-6 leading-9 ">
                          <p className="text-white text-2xl">
                            Dedicated platforms for self-manage and enterprise
                          </p>
                          <p className="text-white">
                            Strategize, Streamline and Safeguard your data in
                            the fast-paced digital world
                          </p>
                        </div>
                        <div className="border-b-1 border-[#fff2b7] w-full "></div>
                        <div className="  min-h-auto flex justify-center">
                          <div className="max-w-5xl w-full grid md:grid-cols-3 ">
                            {categories.map((category, index) => (
                              <div key={index} className="  rounded-2xl px-3">
                                <h3 className="text-lg font-semibold border-b-2 border-[#fff2b7]  pb-2 mb-4 text-white">
                                  {category.title}
                                </h3>
                                <ul className="space-y-3">
                                  {category.items.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex  space-x-3 transition-transform duration-200 hover:translate-x-2 "
                                    >
                                      <div className=" border flex justify-center items-center rounded-[50%] h-[10%]">
                                        <span className="text-[#fff2b7] border-none   p-2 text-md">
                                          {item.icon}
                                        </span>
                                      </div>
                                      <div className="">
                                        <h4 className="text-md font-medium text-white flex-1">
                                          {item.name}
                                        </h4>
                                        <p className="text-white text-sm">
                                          {item.desc}
                                        </p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : item.title === "Services" ? (
                      <div className={`${styles.menu_link}  rounded-b-2xl `}>
                        <div className="  min-h-full flex ">
                          <div className=" grid md:grid-cols-3 ">
                            {services.map((category, index) => (
                              <div
                                key={index}
                                className="text-white py-6 px-5"
                              >
                                 <h3 className="text-xl font-semibold border-b-2 border-[#fff2b7]  pb-2 mb-4 text-white text-center">
                                  {category.title}
                                </h3>
                                <ul className="space-y-1">
                                  {category.items.map((item, idx) => (
                                    <li
                                    key={idx}
                                    className="flex pb-2 space-x-3 transition-transform duration-200 hover:translate-x-2 "
                                  >
                                    <div className="  flex justify-center items-center ">
                                      <span className="text-[#fff2b7] border-none text-md">
                                        {item.icon}
                                      </span>
                                    </div>
                                    <div className="">
                                      <h4 className="text-[15px] font-semibold text-white flex-1">
                                        {item.name}
                                      </h4>
                                      <p className="text-white text-sm">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ): item.title === "Products" ? (
                      <div className={`${styles.menu_link}  rounded-b-2xl`}>
                        <div className="  min-h-full flex justify-center">
                          <div className="max-w-6xl w-full grid md:grid-cols-3 gap-6">
                            {product.map((category, index) => (
                              <div key={index} className=" ">
                                <h3 className="text-xl font-semibold border-b pb-2 mb-4 text-white ">
                                  {category.title}
                                </h3>
                                <ul className="space-y-3">
                                  {category.items.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className={`flex text-white items-start space-x-3  rounded-lg transition-transform duration-200 hover:translate-x-2`}
                                    >
                                      <span className="text-[#fff2b7] pt-1 text-md">
                                        {item.icon}
                                      </span>
                                      <div>
                                        <span className="text-sm font-semibold textffefa4">
                                          {item.name}
                                        </span>
                                        <p className="text-sm textffefa4">
                                          {item.description}
                                        </p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : item.title === "Brands" ? (
                      <div className={`${styles.menu_link}  rounded-b-2xl`}>
                        <div className=" h-auto w-full flex flex-col items-center">
                          <h2 className="text-2xl text-white font-bold mb-6">
                            Industry-wise Top Brands
                          </h2>
                          <div className="max-w-6xl w-full grid md:grid-cols-3 gap-0.5   ">
                            {brands.map((brand, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-4 transition-transform duration-200 hover:translate-x-2  border-[blue] p-1  "
                              >
                                {typeof brand.icon === "string" ? (
                                  <img
                                    src={brand.icon}
                                    alt={brand.name}
                                    className="w-6 h-6"
                                  />
                                ) : (
                                  <span className="pt-2 text-[#fff2b7]">
                                    {brand.icon}
                                  </span>
                                )}
                                <div>
                                  <h3 className="font-semibold text-white">
                                    {brand.name}
                                  </h3>
                                  <p className="text-sm text-white">
                                    {brand.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : item.title === "Pricing" ? (
                      <div style={{width:'100px',padding:"20px 0px"}} className={`${''}   rounded-b-2xl`}>
                        <div className=" text-white  px-4 py-1   ">
                          <h2 className="transition-transform duration-200 hover:translate-x-2 hover:text-white">
                           <Link to="pricing"> Individual</Link>
                          </h2>
                          <h2 className="transition-transform duration-200 hover:translate-x-2 hover:text-white">
                            Business
                          </h2>
                        </div>
                      </div>
                    ) : (
                     ''
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`${styles.demoBtn}`}>
            <Link to="contact"><button >get a demo</button></Link>
          </div>
          {/* Mobile Menu button */}
          <div className="md:hidden">
            <button variant="ghost" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left flex justify-between items-center py-2"
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                {item.title} <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === index && (
                <div className="ml-4">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-2 py-1 hover:bg-gray-700 rounded"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MegaMenu;
