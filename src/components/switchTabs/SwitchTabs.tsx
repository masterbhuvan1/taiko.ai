import React, { useState } from "react";
interface SwitchTabsProps {
  data: string[];

  onTabChange: (tab: string, index: number) => void; // Function type definition
}
export const SwitchTabs: React.FC<SwitchTabsProps> = ({
  data,
  onTabChange,
}) => {
  console.log("nikal ", data);

  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab: string, index: number) => {
    setLeft(index * 100);
    console.log("hbjhbjjhb");
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div
        className=" rounded-full relative px-1 bg-white  "
        style={{ height: 34 }}
      >
        <div className="h-6 mt-1  flex items-center relative">
          {data.map((tab: string, index: number) => (
            <span
              key={index}
              className={`h-full cursor-pointer  mt-2 justify-center items-center 
              ${selectedTab == index ? " text-white" : ""}`}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0, width: 100 }}
            >
              {tab}
            </span>
          ))}
          <span
            className="bg-gradient-to-r from-slate-300 to-black text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500 rounded-full mt-2"
            style={{ left, height: 30, width: 100 }}
          >
            {/* // {data[left / 100]} */}
          </span>
        </div>
      </div>
    </div>
  );
};
