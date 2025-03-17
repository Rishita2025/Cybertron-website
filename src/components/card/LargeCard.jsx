import { useState } from "react";
import img1 from '../../images/banner-img.jpg'

const tabs = [
  { name: "Home", content: "lorem ipsum Home" ,image:'https://picsum.photos/300/200' },
  { name: "Profile", content: "lorem ipsum Profile" },
  { name: "Setting", content: "lorem ipsum Setting" },
  { name: "About", content: "lorem ipsum About" },
];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex bg-gray-100 rounded-xl p-1">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="relative flex-1 text-center cursor-pointer p-2"
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab.name && (
              <div

                layoutId="activeTab"
                className="absolute  inset-0 bg-white rounded-lg shadow-md"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 font-medium">{tab.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-white shadow-md rounded-lg text-center">
        <p className="text-lg font-semibold">{activeTab.name} </p>
        <p className="text-lg font-semibold">{activeTab.content} </p>
        <img src={activeTab.image}/>
      </div>
    </div>
  );
}
