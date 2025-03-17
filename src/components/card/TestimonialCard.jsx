import React from 'react'
// import styles from "../../styles/testimonial.module.css";
// import img from "../../images/app.svg";

function TestimonialCard({para,src,place,name}) {
  return (
   
      <div className="bg-[#FFFDD0] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-blue-900 hover:text-white rounded-lg shadow-2xl p-3 group ">
                <div className='text-blue-900 text-5xl leading-none mb-2 font-serif'>“</div>
              <div className="m-2 text-sm ">
               <h1 className=''>{para}</h1>
               <div className='flex items-center mt-6'>
              <img src={src} className='w-16 h-16 rounded-full border-4 border-[#B2E5D9] shadow-md mr-4'/>
                <p className="text-md font-medium">
                {name}
                {place}
                </p>
               </div>
               
              </div>
            </div>
   
  )
}

export default TestimonialCard