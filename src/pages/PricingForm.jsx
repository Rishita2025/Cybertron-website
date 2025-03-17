import React, { useState } from "react";
import { useDocTitle } from "../components/CustomHook";
// import emailjs from 'emailjs-com';
import Notiflix from "notiflix";
import { Link } from "react-router-dom";
import indivisual from '../images/pricing_img.avif'
import business from '../images/business.jpg'
const PricingForm = () => {
  
  const [activeTab, setActiveTab] = useState("Individual");
    const [showIndivisual,setshowIndivisual] =useState(true)
    const [showBusiness,setshowBusiness] =useState(false)
  useDocTitle("MLD | Molad e Konsult - Send us a message");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";
    let fData = new FormData();
    fData.append("first_name", firstName);
    fData.append("last_name", lastName);
    fData.append("email", email);
    fData.append("phone_number", phone);
    fData.append("message", message);

    axios({
      method: "post",
      url: process.env.REACT_APP_CONTACT_API,
      data: fData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        clearInput();
        //handle success
        Notiflix.Report.success("Success", response.data.message, "Okay");
      })
      .catch(function (error) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        //handle error
        const { response } = error;
        if (response.status === 500) {
          Notiflix.Report.failure(
            "An error occurred",
            response.data.message,
            "Okay"
          );
        }
        if (response.data.errors !== null) {
          setErrors(response.data.errors);
        }
      });
  };
  return (
    <>
      <div
        className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:px-12 h-5/6 "
        data-aos="zoom-in"
      >
        <div
          id="hero"
          className="flex flex-col  lg:flex-row  py-8 lg:pb-0 justify-between lg:text-left mx-4"
        >
          <div
            className="lg:w-full  flex flex-col text-center "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex justify-center items-center text-center lg:mt-0">
              <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                “
              </div>
              <h1 className="mb-5  text-center md:text-5xl text-3xl font-bold text-blue-900">
                Contact Us
              </h1>
              <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                ”
              </div>
            </div>
            <div className="text-lg font-semibold tracking-tight mb-5 text-black-500 lg:px-16">
              Our pricing is tailored to your specific environment so you pay
              for what you really need.
            </div>
          </div>
        </div>
      </div>
     
      


<div className="container mx-auto lg:my-0 my-8 px-4 lg:px-32  justify-center ">
      {/* Tab Buttons */}
      <div className="flex space-x-4  pb-2  justify-center">
        <button
          className={`p-2 ${activeTab === "Individual" ? "border-b-2 border-blue-900" : "text-gray-500"}  text-white bg-blue-900 hover:bg-white hover:text-black inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group` }
          onClick={() => setActiveTab("Individual")}
        >
          Individual
        </button>
        <button
          className={`p-2 ${activeTab === "Business" ? "border-b-2 border-blue-500" : "text-gray-500"} text-white bg-blue-900 hover:bg-white hover:text-black inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group`}
          onClick={() => setActiveTab("Business")}
        >
        Business
        </button>
      
      </div>
      
      {/* Tab Content */}
      <div className="mt-4 w-full">
        {activeTab === "Individual" && <div className="flex items-center gap-10">
        
          <form onSubmit={sendEmail} className="w-full lg:w-1/2">
            <div className="w-full bg-blue-900 px-5 py-5 my-4  lg:w-full  mr-auto rounded-2xl shadow-2xl">
              <div className="flex ">
                <h1 className="font-bold text-center lg:text-left text-white uppercase text-2xl">
                  The future is ours to create
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>

             

                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Email Address*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>
                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4 mt-7">
                <label htmlFor="" className="text-white font-normal">Describe the service you're looking to purchase - please be as detailed as possible:</label>
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="custom-checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor="custom-checkbox" className="text-white">
      I agree to our friendly <Link to="privacy_policy" className="text-white underline-offset-1 underline">Privacy Policy</Link> 
      </label>
    </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="w-full lg:w-1/2">
            <img
            className="rounded-lg"
             src={indivisual}/>
         </div> 
          </div>}

          {/* ------------business------------------- */}


        {activeTab === "Business" && <div className="flex items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
            className="rounded-lg"
             src={business}/>
         </div>
          <form onSubmit={sendEmail} className="w-full lg:w-1/2">
            <div className="w-full bg-blue-900 px-5 py-5 my-4  lg:w-full  mr-auto rounded-2xl shadow-2xl">
              <div className="flex ">
                <h1 className="font-bold text-center lg:text-left text-white uppercase text-2xl">
                  Looking to collaborate? 
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>
                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Company Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>
                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Company Size*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Enter Your Company Name*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
               
              </div>
              <div className="my-4">
              <label htmlFor="" className="text-white font-normal">Describe the service you're looking to purchase - please be as detailed as possible:</label>
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="custom-checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor="custom-checkbox" className="text-white">
      I agree to our friendly <Link to="/privicy_policy" className="text-white underline underline-offset-1">Privacy Policy</Link> 
      </label>
    </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          </div>}
      </div>
    </div>
    </>
  );
};

export default PricingForm;
