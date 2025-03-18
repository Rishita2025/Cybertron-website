import React from 'react'
import ourstory from "../images/our_story2.png";
function OurStory() {
  return (
     <div
             id="hero"
             className="flex flex-col items-center lg:flex-row py-8 justify-between text-center lg:text-left mx-16 mt-16"
           >
             <div
               className="lg:w-2/3  flex flex-col justify-center lg:mx-16 pr-16"
               data-aos="zoom-in"
               data-aos-delay="200"
             >
               
                 <h1 className="mb-5 md:text-4xl text-3xl font-bold text-blue-900">
                   Our Story : Born from a<br/> Mission to Protect
                 </h1>
              
              <p className='text-lg font-semibold mb-4'>Cybertron Technologies started with a simple yet powerful belief: Security should never be an afterthought.</p>
           
              
               <div className="text-lg font-normal tracking-tight  text-black-500 ">
               Our founder saw too many businesses, startups, and individuals blindsided by cyber threats—not because they didn’t care, but because they didn’t know where to start. The cybersecurity industry was filled with complex jargon, overpriced solutions, and a lack of real, human-focused protection.
               </div>

               <p className='text-lg font-semibold my-4'>So, we decided to change that</p>
               
               <div className="text-lg font-normal tracking-tight  text-black-500 ">

               We built Cybertron Technologies to be different—to be a partner, not just a service provider. We wanted to make security accessible, proactive, and tailored to the needs of startups, entrepreneurs, and individuals—not just big corporations.

               </div>
               <p className='font-semibold text-md mt-7'>Since then, we’ve helped businesses scale safely, startups secure their foundations, and individuals reclaim control over their digital privacy. And we’re just getting started.</p>

               
             </div>
             <div
               className="flex lg:justify-end w-full lg:w-1/3" 
               data-aos="fade-up"
               data-aos-delay="700"
             >
               <div className="">
                 <img
                   alt="card img"
                   className="rounded-2xl float-right duration-1000 w-full"
                   src={ourstory}
                  
                 />
               </div>
             </div>
           </div>
  )
}

export default OurStory