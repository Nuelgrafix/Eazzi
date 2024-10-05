
// import dashboardHome from "/Image/dashboardhome.svg"
// import analytics from "/Image/analytics.svg"
// import profile from "/Image/profile.svg"
// import order from "/Image/shopping-bag (1).svg"
// import logout from "/Image/log-out.svg"
// import product from "/Image/produtc.svg"
// import settings from "/Image/setting-2.svg"
import { Link } from "react-router-dom"
import IC_Analytics from "../../../public/Component/IC_Analytics"
import IC_Order from "../../../public/Component/IC_Order"
import IC_Home from "../../../public/Component/IC_Home"
import IC_Product from "../../../public/Component/IC_Product"
import IC_Profile from "../../../public/Component/IC_Profile"
import IC_Logout from "../../../public/Component/IC_Logout"
import IC_Setting from "../../../public/Component/IC_Profile"
import { useState } from "react"
import IC_BlueHome from "../../../public/Component/IC_BlueHome"
import IC_BlueOrder from "../../../public/Component/IC_BlueOrder"
import IC_BlueProduct from "../../../public/Component/IC_BlueProduct"
import IC_BlueProfile from "../../../public/Component/IC_BlueProfile"
import IC_BlueAnalytics from "../../../public/Component/IC_BlueAnalytics"


const sidebar_Link = [
  {
    id: "1",
    path: "/dashboard",
    display: "Dashboard",
    iconTwo: <IC_Home className="group-hover:stroke-white" />,
    icon: <IC_BlueHome />,
  },
  {
    id: "2",
    path: "/dashboard-analytics",
    display: "Analytics",
    icon: <IC_Analytics />,
    iconTwo: <IC_BlueAnalytics/>,
  },
  {
    id: "3",
    path: "/orders",
    display: "Orders",
    icon: <IC_Order />,
    iconTwo: <IC_BlueOrder />,
    number: "20",
  },
  {
    id: "4",
    path: "/dashboard-product",
    display: "Products",
    icon: <IC_Product />,
    iconTwo: <IC_BlueProduct />,
  },
  {
    id: "5",
    path: "/order-history",
    display: "Order History",
    icon: <IC_Order />,
    iconTwo: <IC_BlueOrder />,
  },
  {
    id: "6",
    path: "/dashboard/profile",
    display: "Profile",
    icon: <IC_Profile />,
    iconTwo: <IC_BlueProfile />,
  },
  {
    id: "7",
    path: "#",
    display: "Setting",
    icon: <IC_Setting />,
  },
  {
    id: "8",
    path: "#",
    display: "Log Out",
    icon: <IC_Logout />,
  },
];

const SidebarDashboard = () => {
  const [activeId, setActiveId] = useState("1"); // Set default activeId to "1" for Dashboard

  const handleToggle = (id) => {
    setActiveId(id);
  };

  return (
    <section className="h-[100vh] flex flex-col gap-[30px] fixed z-[1000] pt-[18px] pr-[38px] pb-[38px] pl-[24px] w-[214px]">
      <div className="flex flex-col items-center gap-[15px]">
        <h1 className="text-[24px] leading-[38px] text-[#FFFFFF] font-tekInter font-[700]">
          Ben&apos;s Store
        </h1>
        <Link
          to="/product-upload"
          className="bg-[#FF7F00] gap-[8px] rounded-[8px] border-[1px] border-[#FF7F00] h-[38px] text-[#FFFFFF] text-[16px] leading-[24px] font-[600] font-tekInter pt-[8px] pr-[20px] pb-[8px] pl-[10px]"
          style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
        >
          Add Product
        </Link>
      </div>

      <div className="flex flex-col gap-[18px]">
        {sidebar_Link.map((s) => (
          <div
            key={s.id}
            className={`flex rounded-[8px] gap-[10px] w-[151px] h-[39px] items-center justify-start pl-[0.5rem] group cursor-pointer
              ${activeId === s.id ? 'bg-[#FFFFFF] stroke-[#1843E2]' : 'bg-[#A9BCFF]'}`}
          
          >
            <div
              className={`w-[20px] h-[20px] ${
                activeId === s.id
                  ? 'text-[#1843E2] group:stroke-[#1843E2]'
                  : 'text-white group:stroke-white'
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

export default SidebarDashboard;
