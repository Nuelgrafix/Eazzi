
import { useLocation } from "react-router-dom";
import dashboardHome from "/Image/dashboardhome.svg";
import analytics from "/Image/analytics.svg";
import profile from "/Image/profile.svg";
import order from "/Image/shopping-bag (1).svg";
import logout from "/Image/log-out.svg";
import product from "/Image/produtc.svg";
import settings from "/Image/setting-2.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const MobileSideDashboard = () => {
  const location = useLocation();
  const [storeId, setStoreId] = useState(null);
  const [storeName, setStoreName] = useState("Loading...");

  useEffect(() => {
    const storedId = localStorage.getItem("storeId");
    if (storedId) {
      setStoreId(storedId);
      fetchStoreName(storedId);
    }
  }, []);

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
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        localStorage.removeItem("token");
        localStorage.removeItem("storeId");
        window.location.href = "/store-login";
        return;
      }

      await axios.post(
        "https://django-7u8g.onrender.com/api/stores/logout/",
        {},
        { headers: { Authorization: `Token ${token}` } }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("storeId");
      window.location.href = "/store-login";
    } catch (error) {
      console.error("Logout failed:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("storeId");
      window.location.href = "/store-login";
    }
  };

  const sidebar_Link = [
    //{ path: "/dashboard", display: "Dashboard", img: dashboardHome },
    { path: "/store-analytics", display: "Analytics", img: analytics },
    { path: "/store-orders", display: "Orders", img: order, number: "20" },
    { path: "/store-product", display: "Products", img: product },
    { path: "/store-order-history", display: "Order History", img: order },
    { path: `/store-profile/${storeId}`, display: "Profile", img: profile },
    { path: "/store-settings", display: "Setting", img: settings },
  ];

  return (
    <section className="h-full flex flex-col gap-[77px] pt-[38px] pr-[38px] pb-[38px] pl-[24px] w-[214px]">
      <div className="flex flex-col items-center gap-[32px]">
        <h1 className="text-[24px] leading-[38px] text-[#FFFFFF] font-tekInter font-[700]">
          {storeName}
        </h1>
        <Link
          to="/store-product-upload"
          className="bg-[#FF7F00] gap-[8px] rounded-[8px] border-[1px] border-[#FF7F00] text-[#FFFFFF] text-[16px] leading-[24px] font-[600] font-tekInter pt-[12px] pr-[20px] pb-[12px] pl-[20px]"
          style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
        >
          Add Product
        </Link>
      </div>

      <div className="flex flex-col gap-[28px]">
        {sidebar_Link.map((s, index) => {
          const isActive = location.pathname.startsWith(s.path);

          return (
            <div
            key={index}
            className={`flex rounded-[8px] gap-[10px] w-[151px] h-[52px] items-center justify-start pl-[0.5rem] cursor-pointer ${
              isActive ? "bg-[#ffffff] text-black" : "bg-[#A9BCFF] text-[#181818]"
            }`}
            style={{ background: isActive ? "#ffffff" : "#A9BCFF" }}
          >
              <img
                src={s.img}
                alt="icons"
                className={`w-[20px] h-[20px] ${isActive ? "filter brightness-0" : ""}`}
              />
              <Link
                to={s.path}
                className="text-[16px] leading-[19px] font-tekInter font-[400] flex items-center justify-center gap-[10px]"
              >
                {s.display}
                {s.number && (
                  <h1
                    className="bg-[#FF7F00] rounded-[50%] text-[12px] leading-[14px] w-[26px] h-[26px] flex
                    text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center"
                  >
                    {s.number}
                  </h1>
                )}
              </Link>
            </div>
          );
        })}

        <div
          className="flex rounded-[8px] gap-[10px] w-[151px] h-[52px] items-center justify-start pl-[0.5rem] bg-[#A9BCFF] cursor-pointer"
          onClick={handleLogout}
        >
          <img src={logout} alt="logout icon" className="w-[20px] h-[20px]" />
          <span className="text-[16px] leading-[19px] text-[#181818] font-tekInter font-[400] flex items-center justify-center gap-[10px]">
            Log Out
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileSideDashboard;
