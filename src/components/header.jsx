import React, { useState, useEffect, useRef } from "react";
import logo from "../../public/Image/logo.png";
import profile from "../../public/Image/Profile.png";
import carticon from "../../public/Image/Icon.png";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <section>
      <div className="flex justify-between items-center  bg-mainBlue h-[71px]  px-12">
        {/* logo */}
        <div>
          <img src={logo} alt="logo_image" />
        </div>

        <div></div>
        <div className="flex gap-1">
          {/* search input */}
          <div className="bg-white rounded-[10px] outline-none border-0 gap-2 px-2  ">
            <i className="ri-search-2-line  w-[15px] h-[15px] pr-2"></i>
            <input
              type="text"
              placeholder="Search for products and stores"
              className="md:w-[522px] md:h-[44px] border-0
 bg-transparent outline-none"
            />
          </div>

          {/* sign in button */}
          <div>
            <button className="w-[95px] h-[44px] rounded-[8px] bg-secondBlue text-white">
              Search
            </button>
          </div>
        </div>

        {/* sign up , Menu and cart */}
        <div className="flex gap-7 items-center">
          {/*sign up */}
          <div>
            <button className="px-5 h-[40px] rounded-[8px] items-center   text-[#fff] bg-mainOrange flex gap-3">
              <img
                src={profile}
                alt="profile_icon"
                className="w-[12px] h-[16px]"
              />
              Sign Up
            </button>
          </div>

          {/* Menu */}
          <div className="relative" ref={dropdownRef}>
      <div className="flex flex-col">
        <div className="flex gap-1 cursor-pointer" onClick={toggleDropdown}>
          <h1 className="text-[16px] font-[400] font-tekInter text-white transition-all ease-in-out hover:text-[#FFB164]">
            Menu
          </h1>
          <i className={`ri-arrow-down-s-line transition-all ease-in-out hover:text-[#FFB164] w-[10px] h-[5px] text-[#fff] transition-transform duration-300 ${isDropdownOpen ? "ri-arrow-up-s-line" : ""}`}></i>
        </div>

        {isDropdownOpen && (
          <ul className="bg-white absolute top-8 -left-14 rounded-[8px] p-4 flex flex-col gap-1 text-nowrap shadow-lg z-50">
            <li className="text-[17px] font-light">My Orders</li>
            <li className="text-[17px] font-light">Place order</li>
            <li className="text-[17px] font-light">Track order</li>
            <li className="text-[17px] font-light">Cancel order</li>
            <li className="text-[17px] font-light">Payment options</li>
            <li className="text-[17px] font-light">Help center</li>
            <li className="text-[17px] font-light">Saved items</li>
          </ul>
        )}
      </div>
    </div>

          {/* cart */}
          <div className="flex  items-center gap-1">
            <h1 className="text-[16px] font-[400]  text-[#fff]">My cart</h1>
            <ul>
              <li>
                <img src={carticon} className="w-[16px] h-[15px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
