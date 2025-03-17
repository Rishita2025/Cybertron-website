import React from 'react'


function AboutTextCard({heading,para,list1,list2,list3}) {
  return (
    <div className="bg-[#FFFDD0]   text-black px-5 py-5 rounded-lg  shadow-md">
    <h2 className="text-xl font-semibold p-2 text-center text-blue-900">
      {heading}
    </h2>
    <p className="text-md font-semibold px-5 pb-2 ">
     {para}
    </p>
    <p className="text-sm px-5 font-normal pb-2">
   {list1}
    </p>
    <p className=" flex text-sm px-5 font-normal pb-2">
  
    {list2}
    </p>

    <p className="text-sm px-5 font-normal pb-2">
   {list3}
    </p>
  </div>
  )
}

export default AboutTextCard