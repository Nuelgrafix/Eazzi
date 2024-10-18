
// import dashboardHome from "/Image/dashboardhome.svg"
// import analytics from "/Image/analytics.svg"
// import profile from "/Image/profile.svg"
// import order from "/Image/shopping-bag (1).svg"
// import logout from "/Image/log-out.svg"
// import product from "/Image/produtc.svg"
// import settings from "/Image/setting-2.svg"
import { Link } from "react-router-dom"




import { useState } from "react"
import IC_BlueHome from "../../../public/Component/IC_BlueHome"
import IC_BlueOrder from "../../../public/Component/IC_BlueOrder"
import IC_BlueProduct from "../../../public/Component/IC_BlueProduct"
import IC_BlueProfile from "../../../public/Component/IC_BlueProfile"
import IC_BlueRider from "../../../public/Component/IC_BlueRider"


import white_logo from "/Image/white_logo.svg"
import IC_GreyOrder from "../../../public/Component/IC_GreyOrder"
import IC_GreyProduct from "../../../public/Component/IC_GreyProduct"
import IC_GreyProfile from "../../../public/Component/IC_GreyProfile"
import IC_GreyHome from "../../../public/Component/IC_GreyHome"
import IC_GreySettings from "../../../public/Component/IC_GreySettings"
import IC_BlueSettings from "../../../public/Component/IC_BlueSettings"
import IC_GreyRider from "../../../public/Component/IC_GreyRider"


const sidebar_Link = [
  {
    id: "1",
    path: "/rider-dashboard",
    display: "Dashboard",
    iconTwo:  <IC_BlueHome /> ,
    icon:  <IC_GreyHome className="group-hover:stroke-white" />,
  },

  {
    id: "2",
    path: "/rider-orders",
    display: "Orders",
    icon: <IC_GreyOrder/>,
    iconTwo: <IC_BlueOrder />,
    number: "20",
  },
  {
    id: "3",
    path: "/rider/stores",
    display: "Stores",
    icon: <IC_GreyProduct />,
    iconTwo: <IC_BlueProduct />,
  },
  {
    id: "4",
    path: "/rider-order-history",
    display: "Order History",
    icon: <IC_GreyOrder/>,
    iconTwo: <IC_BlueOrder />,
  },

  {
    id: "5",
    path: "/rider/riders",
    display: "Riders",
    icon: <IC_GreyRider />,
    iconTwo: <IC_BlueRider/>,
  },

  {
    id: "6",
    path: "/rider/customer",
    display: "Customer",
    icon: <IC_GreyProfile />,
    iconTwo: <IC_BlueProfile />,
  },

  {
    id: "7",
    path: "/rider/settings",
    display: "Setting",
    icon: <IC_GreySettings />,
    iconTwo: <IC_BlueSettings />,
  },

];

const RiderSidebarDashboard = () => {
  const [activeId, setActiveId] = useState("1"); // Set default activeId to "1" for Dashboard

  const handleToggle = (id) => {
    setActiveId(id);
  };

  return (
    <section className="h-[100vh] flex flex-col gap-[0px] fixed z-[1000] pt-[18px]
     pr-[38px] pb-[38px] pl-[24px] w-[214px]">



<div className="flex items-center justify-center ">
        <img src={white_logo} alt="logo"  className="w-[82px] h-[28px]"  />
      </div>

      <div className="flex flex-col gap-[20px] pt-[4rem]">
        {sidebar_Link.map((s) => (
          <div
            key={s.id}
className={`flex rounded-[8px] gap-[10px] w-[151px] h-[42px] items-center justify-start pl-[0.5rem] group cursor-pointer
              ${activeId === s.id ? 'bg-[#FFFFFF] stroke-[#1843E2] border-[1px] border-[#1843E2]' : 'bg-[#F9F9F9]  stroke-[#4F4F4F]'}`}
          
          >
            <div
              className={`w-[20px] h-[20px] ${
                activeId === s.id
                  ? 'text-[#1843E2] group:stroke-[#1843E2]  '
                  : 'text-white group:stroke-[#4F4F4F]  '
              }`}
            >
              {activeId === s.id ? s.iconTwo : s.icon}
            </div> 
            <Link   onClick={() => handleToggle(s.id)}
              to={s.path}
              className="text-[16px] leading-[19px] text-[#181818] font-tekInter font-[400] flex items-center justify-center gap-[10px]"
            >
              {s.display}
              {s.number && (
                <h1
                  className="bg-[#FF7F00] rounded-[50%] text-[12px] leading-[14px] w-[26px] h-[26px] flex text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center"
                >
                  {s.number}
                </h1>
              )}
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
};

export default RiderSidebarDashboard;
