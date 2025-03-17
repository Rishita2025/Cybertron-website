import React, { useState } from "react";
import { useDocTitle } from "../components/CustomHook";
// import emailjs from 'emailjs-com';
import Notiflix from "notiflix";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaArrowRight, FaHandshake, FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBuildingUser } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const Contact = () => {
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
            <div className="flex justify-center items-center text-center lg:mt-10">
              <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                “
              </div>
              <h1 className="mb-5  text-center md:text-5xl text-3xl font-bold text-blue-900">
                Let’s Connect
              </h1>
              <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                ”
              </div>
            </div>
            <div className="text-lg font-semibold tracking-tight mb-5 text-black-500 lg:px-16">
              You’re not just another visitor—you’re part of our journey.
              Whether you have a question, need support, or just want to say
              hello, we’re here.
            </div>
          </div>
        </div>
      </div>

      <div className="px-32 text-center">
        <h1 className="text-blue-900 font-semibold text-2xl">
          Have an idea? Let’s build something incredible together.
        </h1>
        <p className="text-blue-900 text-md font-semibold">
          Need help? We’ve got your back—always.
        </p>
      </div>

      <div
        id="contact"
        className=" justify-center items-center mt-8  lg:mt-0 w-full bg-[$ffefa4] py-12  lg:pb-16 "
      >
        <div class="container mx-auto" data-aos="zoom-in">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-16 items-center  px-32">
            {/* <!-- First Column - Takes More Space --> */}
            <div class="md:col-span-2   rounded-lg shadow ">
              <form onSubmit={sendEmail}>
                <div className="w-full bg-blue-900 p-8 rounded-2xl shadow-2xl">
                  <div className="flex ">
                    <h1 className="font-bold text-center lg:text-left text-white uppercase text-2xl">
                      Looking to collaborate? The future is ours to create.
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
                        <p className="text-red-500 text-sm">
                          {errors.first_name}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        name="last_name"
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Last Name*"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        onKeyUp={clearErrors}
                      />
                      {errors && (
                        <p className="text-red-500 text-sm">
                          {errors.last_name}
                        </p>
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
                  <div className="my-4">
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
                  <div className="py-2 w-1/2 lg:w-2/4 mx-auto">
                    <button
                      type="submit"
                      id="submitBtn"
                      className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 hover:border-white hover:border text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* <!-- Second Column --> */}
            <div class="">
         
            <div className="bg-blue-900 rounded-lg text-white px-5 py-4 mb-2">
                <h1 className="flex font-semibold capitalize"><BiSupport size={25} className="mr-2"/> customer support</h1>
                <Link to="" className="underline text-sm italic  underline-offset-2 pl-9" >support@ </Link>
            </div>
            <div className="bg-blue-900 rounded-lg text-white px-5 py-4 mb-2">
                <h1 className="flex font-semibold capitalize"><FaHandshake size={25} className="mr-2"/> clients & partners</h1>
                <Link to="" className="underline text-sm italic  underline-offset-2 pl-9" >info@  </Link>
            </div>
            <div className="bg-blue-900 rounded-lg text-white px-5 py-4 mb-2">
                <h1 className="flex font-semibold capitalize"> <FaBuildingUser size={25} className="mr-2"/>  product enquiries </h1>
                <Link to="" className="underline text-sm italic  underline-offset-2 pl-9" >sales@cybertron.it.com</Link>
            </div>
       
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
