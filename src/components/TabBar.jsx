import React, { useState } from "react";
function TabBar() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
   
    

    <div className="p-4 w-full  ">
    {/* Tab Buttons */}
    <div className="flex space-x-4  pb-2 justify-center">
      <button
        className={`p-2 ${activeTab === "Home" ? "bg-blue-900 rounded-md text-white border-b border-blue-900" : "border-b-2 border-blue-900 text-black"} hover:bg-blue-900 hover:text-white hover:rounded-md` }
        onClick={() => setActiveTab("Home")}
      >
       For Startups & Entrepreneurs
      </button>
      <button
        className={`p-2 ${activeTab === "Profile" ?  "bg-blue-900 text-white border-b rounded-md border-blue-900" : "border-b-2 border-blue-900 text-black"} hover:bg-blue-900 hover:text-white hover:rounded-md `}
        onClick={() => setActiveTab("Profile")}
      >
      For Individuals– Your Digital Life
      </button>
      <button
        className={`p-2 ${activeTab === "Settings" ?  "bg-blue-900 text-white border-b rounded-md border-blue-900" : "border-b-2 border-blue-900 text-black"} hover:bg-blue-900 hover:text-white hover:rounded-md`}
        onClick={() => setActiveTab("Settings")}
      >
        For Businesses – Cybersecurity on Your Side
      </button>
    </div>
    
    {/* Tab Content */}
    <div className="mt-4 lg:mx-10 mx-2">
      {activeTab === "Home" && 
      <>
      <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3  w-full">
          <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
         Building a startup is hard enough—you shouldn’t have to worry about cyber threats on top of everything else
        </h1>
        <div className="lg:px-16 pb-4">
         <h1 className="my-4 font-semibold text-lg ">We help you focus on scaling, not surviving, with
            :</h1>
             <p className="pb-1">
             ✔ Affordable Security Solutions – Protection that grows with you, without breaking the bank.

             </p>
             <p className="pb-1">
             ✔ Cloud Security & IT Support – Secure your cloud infrastructure and keep your data safe.

             </p>
             <p className="pb-1">
             ✔ Data Breach Prevention – Stop hackers before they even get close.
             </p>
             <p className="pb-1">
             ✔ Tech & IT Guidance – No in-house IT team? We become your security partner.
             </p>
           </div>
       </div>
      </>
      }

      {activeTab === "Profile" && 
       <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
       <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
       Protect yourself from hackers and online threats. You shouldn't live in fear every time you go online

       </h1>
       <div className="lg:px-16 pb-4">
         <h1 className="my-4 font-semibold text-lg">We provide:
         </h1>
         <p className="pb-1">
         ✔ Identity Protection & Digital Privacy – Keep your sensitive information out of the wrong hands.
         </p>
         <p className="pb-1">
         ✔ Secure Browsing & VPN Services – Shield your online activity from prying eyes.

         </p>
         <p className="pb-1">
         ✔ Antivirus & Ransomware Defense – Stop cyber threats before they reach you.

         </p>
         <p className="pb-1">
         ✔ Personal Tech Support – Got a security concern? We’re here, 24/7.
         </p>
       </div>
     </div>
      }

      {activeTab === "Settings" && 
      
      <div className="bg-[#FFFDD0] mt-5 rounded-lg shadow-2xl p-3   w-full">
      <h1 className="text-xl lg:px-16 font-bold text-blue-900 pt-4">
      Protecting businesses of all sizes, so you can focus on growth, innovation, and success
      </h1>
      <div className="lg:px-16 pb-6">
        <h1 className="my-4 font-semibold text-lg">We provide:
        </h1>
        <p className="pb-1">
        ✔ Advanced Cybersecurity Solutions – AI-driven threat detection, firewalls, and 24/7 monitoring.

        </p>
        <p className="pb-1">
        ✔ Managed IT & Cloud Security – Secure, scalable IT infrastructure without the headaches.
        </p>
        <p className="pb-1">
        ✔ Risk & Compliance Management – Stay compliant with GDPR, HIPAA, PCI-DSS, and more.
        </p>
        <p className="pb-1">
        ✔ Incident Response & Disaster Recovery – If an attack happens, we help you bounce back—fast.
        </p>
      </div>
    </div>
      }
    </div>
  </div>
  );
}

export default TabBar;
