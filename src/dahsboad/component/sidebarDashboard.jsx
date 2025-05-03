import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import IC_Analytics from "../../../public/Component/IC_Analytics";
import IC_Order from "../../../public/Component/IC_Order";
import IC_Home from "../../../public/Component/IC_Home";
import IC_Product from "../../../public/Component/IC_Product";
import IC_Profile from "../../../public/Component/IC_Profile";
import IC_Logout from "../../../public/Component/IC_Logout";
import IC_Setting from "../../../public/Component/IC_Profile";
import IC_BlueHome from "../../../public/Component/IC_BlueHome";
import IC_BlueOrder from "../../../public/Component/IC_BlueOrder";
import IC_BlueProduct from "../../../public/Component/IC_BlueProduct";
import IC_BlueProfile from "../../../public/Component/IC_BlueProfile";
import IC_BlueAnalytics from "../../../public/Component/IC_BlueAnalytics";
import axios from "axios";

const SidebarDashboard = () => {
  const location = useLocation();
  const [storeId, setStoreId] = useState(localStorage.getItem("storeId") || null);
  const [storeName, setStoreName] = useState("Loading...");
  const [activeId, setActiveId] = useState(localStorage.getItem("activeId") || "1");

  useEffect(() => {
    if (storeId) fetchStoreName(storeId);
  }, [storeId]);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = sidebar_Link.find((item) => item.path === currentPath);
    if (activeItem) {
      setActiveId(activeItem.id);
      localStorage.setItem("activeId", activeItem.id);
    }
  }, [location.pathname]);

  const fetchStoreName = async (id) => {
    try {
      const response = await axios.get(
        `https://django-7u8g.onrender.com/api/stores/storeslist/${id}`
      );
      setStoreName(response.data.store_name);
    } catch (error) {
      console.error("Error fetching store name:", error);
      setStoreName("Store Not Found");
    }
  };

  const handleLogout = async () => {
    if (!window.confirm("Are you sure you want to log out?")) return;

    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.post(
          "https://django-7u8g.onrender.com/api/stores/logout/",
          {},
          { headers: { Authorization: `Token ${token}` } }
        );
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("storeId");
      localStorage.removeItem("activeId");
      window.location.href = "/store-login";
    }
  };

  const sidebar_Link = [
    { id: "1", path: "/admin-dashboard", display: "Dashboard", icon: <IC_Home />, iconActive: <IC_BlueHome /> },
    { id: "2", path: "/store-analytics", display: "Analytics", icon: <IC_Analytics />, iconActive: <IC_BlueAnalytics /> },
    { id: "3", path: "/store-orders", display: "Orders", icon: <IC_Order />, iconActive: <IC_BlueOrder />, number: "20" },
    { id: "4", path: "/store-product", display: "Products", icon: <IC_Product />, iconActive: <IC_BlueProduct /> },
    { id: "5", path: "/store-order-history", display: "Order History", icon: <IC_Order />, iconActive: <IC_BlueOrder /> },
    { id: "6", path: `/store-profile/${storeId}`, display: "Profile", icon: <IC_Profile />, iconActive: <IC_BlueProfile /> },
    { id: "7", path: "/store-settings", display: "Setting", icon: <IC_Setting /> },
    { id: "8", display: "Log Out", icon: <IC_Logout />, onClick: handleLogout },
  ];

  return (
    <section className="h-[100vh] flex flex-col gap-[30px] fixed z-[1000] pt-[18px] pr-[38px] pb-[38px] pl-[24px] w-[214px] bg-[#1843E2]">
      <div className="flex flex-col items-center gap-[15px]">
        <h1 className="text-[24px] leading-[38px] text-white font-tekInter font-[700]">{storeName}</h1>
        <Link
          to="/store-product-upload"
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
            className={`flex rounded-[8px] gap-[10px] w-[151px] h-[39px] items-center justify-start pl-[0.5rem] group cursor-pointer ${
              activeId === s.id ? "bg-[#FFFFFF] text-[#1843E2]" : "bg-[#A9BCFF] text-black"
            }`}
            onClick={s.onClick ? s.onClick : () => {
              setActiveId(s.id);
              localStorage.setItem("activeId", s.id);
            }}
          >
            <div className="w-[20px] h-[20px]">
              {activeId === s.id ? s.iconActive : s.icon}
            </div>

            {s.path ? (
              <Link
                to={s.path}
                className={`text-[16px] leading-[19px] font-tekInter font-[400] ${
                  activeId === s.id ? "text-[#1843E2]" : "text-black"
                } flex items-center justify-center gap-[10px]`}
              >
                {s.display}
                {s.number && (
                  <h1 className="bg-[#FF7F00] rounded-full text-[12px] leading-[14px] w-[26px] h-[26px] flex text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">
                    {s.number}
                  </h1>
                )}
              </Link>
            ) : (
              <span className="text-[16px] leading-[19px] font-tekInter font-[400] text-black">{s.display}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SidebarDashboard;
