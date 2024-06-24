import { useState, useEffect, useRef } from "react";
import logo from "../../public/Image/logo.png";
import profile from "../../public/Image/Profile.png";

// import carticon from "../../public/Image/Icon.png";

import carticon from "../../public/Image/shopping-cart.svg";
import callingw from "../assets/Callingw.png";
import calling from "../assets/Calling.png";
import cat from "../assets/Category.png";
import cart from "../assets/cart.png";
import menu from "../assets/hmenu.png";
import group from "../assets/Group.png";
import icon from "../assets/ic.png";
import speaker from "../assets/speaker.png";
import broom from "../assets/broom.png";
import game from "../assets/game.png";
import { Link } from "react-router-dom";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const callDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);
  const catDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleCallDropdown = () => {
    setIsCallDropdownOpen((prev) => !prev);
  };

  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen((prev) => !prev);
  };

  const toggleCatDropdown = () => {
    setIsCatDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (
      callDropdownRef.current &&
      !callDropdownRef.current.contains(event.target)
    ) {
      setIsCallDropdownOpen(false);
    }
    if (
      menuDropdownRef.current &&
      !menuDropdownRef.current.contains(event.target)
    ) {
      setIsMenuDropdownOpen(false);
    }
    if (
      catDropdownRef.current &&
      !catDropdownRef.current.contains(event.target)
    ) {
      setIsCatDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (
      isDropdownOpen ||
      isCallDropdownOpen ||
      isMenuDropdownOpen ||
      isCatDropdownOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isDropdownOpen,
    isCallDropdownOpen,
    isMenuDropdownOpen,
    isCatDropdownOpen,
  ]);

  return (
    <section>
      {/* Overlay to dim the background */}
      {(isDropdownOpen || isCallDropdownOpen || isMenuDropdownOpen || isCatDropdownOpen) && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
      <div className="flex justify-between items-center fixed w-full z-50 bg-mainBlue h-[71px] px-5 md:px-12">
        {/* logo */}
        <div>

          <Link to="/">
          <img
            src={logo}
            className="h-[33px] w-[100px] md:h-[36px] md:w-[117px]"
            alt="logo_image"
          />
          </Link>
   
        </div>

        <div className="flex gap-2 lg:hidden">
          <div
            className="flex flex-col relative"
            ref={callDropdownRef}
            onClick={toggleCallDropdown}
          >
            <div className="h-[45px] w-[45px] rounded-full flex items-center justify-center border border-[#E0E0E0] bg-[#FFB164]">
              <img src={callingw} className="h-[24px] w-[24px]" alt="" />
            </div>

            {isCallDropdownOpen && (
              <div className="w-[319px] absolute -left-[148px] top-12 flex flex-col shadow-loctionShad items-start gap-[16px] py-[16px] px-[19px] z-50 bg-white rounded-[10px]">
                <p className="font-[700] font-tekInter text-[16px] leading-normal text-[#1843E2] ">
                  Customer Support
                </p>

                <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-300">
                  <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#3157E1] bg-[#e1b16433]">
                    <img src={calling} className="w-[18px] h-[18px]" alt="" />
                  </div>

                  <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                    +2348135579913
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="h-[45px] w-[45px] flex items-center justify-center">
            <img src={cart} className="h-[24px] w-[24px]" alt="" />
          </div>

          <div
            className="flex flex-col relative"
            ref={menuDropdownRef}
            onClick={toggleMenuDropdown}
          >
            <div className="h-[45px] w-[45px] flex items-center justify-center">
              <img src={menu} className="h-[24px] w-[24px]" alt="" />
            </div>

            {isMenuDropdownOpen && (
              <ul className="bg-white absolute top-12 right-0 rounded-[8px] p-6 flex flex-col gap-3 text-nowrap shadow-lg z-50">
                <li className="text-[17px]">My Orders</li>
                <li className="text-[17px]">Place order</li>
                <li className="text-[17px]">Track order</li>
                <li className="text-[17px]">Cancel order</li>
                <li className="text-[17px]">Payment options</li>
                <li className="text-[17px]">Help center</li>
                <li className="text-[17px]">Saved items</li>

                <div className="flex items-center gap-[12px] self-stretch text-[#1843E2] mt-2">
                  <div className="flex items-center justify-center w-[35px] h-[35px] rounded-[83.333px] border-[0.833px] border-[#3157E1] bg-[#e1b16433]">
                    <img src={group} className="w-[18px] h-[18px]" alt="" />
                  </div>

                  <p className="text-[16px] font-[500] leading-normal font-tekInter">
                    Become a seller on Eazzi
                  </p>
                </div>
              </ul>
            )}
          </div>
        </div>

        <div className="gap-1 absolute top-[70px] lg:relative lg:top-0 bg-[#FFFFFF80] lg:bg-transparent backdrop-blur-[6px] lg:backdrop-blur-0 h-[60px] lg:z-50 lg:flex w-full -ml-5 md:-ml-12 px-5 lg:px-0 lg:mr-10 lg:w-[400px] shadow-md">
          {/* search input */}
          <div className="flex items-center justify-center w-full gap-1">
            <div className="bg-white w-full rounded-[10px] flex outline-none border px-2 mt-[10px] lg:mt-0">
              <i className="ri-search-2-line text-[17px] pr-2 mt-[7.3px] md:mt-[9px]"></i>
              <input
                type="text"
                placeholder="Search for products and stores"
                className="h-[40px] w-full text-[14px] md:text-[17px] md:w-[400px] md:h-[44px] border-0 bg-transparent outline-none"
              />
            </div>

            <div
              className="flex flex-col relative"
              ref={catDropdownRef}
              onClick={toggleCatDropdown}
            >
              <div className="p-2 w-[44px] sm:w-[45px] flex items-center justify-center border bg-[#F9F9F9] rounded-full mt-2 lg:hidden">
                <img src={cat} className="h-[24px] w-[24px]" alt="" />
              </div>

              {isCatDropdownOpen && (
                <ul className="flex absolute top-14 right-0 rounded-[10px] text-nowrap py-[23px] flex-col items-start gap-[20px] bg-white shadow-loctionShad z-50">
                  <h2 className="text-[#333333] text-[20px] font-tekInter font-[700] px-[24px] leading-[30px]">Categories</h2>
                  <div className="flex items-center gap-[12px] self-stretch text-[#181818] px-[24px]">
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={icon}
                        className="w-[18px] h-[18px]"
                        alt="Default"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Groceries
                    </p>
                  </div>

                  <div className="flex items-center gap-[12px] self-stretch text-[#181818] px-[24px]">
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={speaker}
                        className="w-[18px] h-[18px]"
                        alt="Default"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Appliances
                    </p>
                  </div>

                  <div className="flex items-center gap-[12px] self-stretch text-[#181818] px-[24px]">
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={broom}
                        className="w-[18px] h-[18px]"
                        alt="Default"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Household cleaning
                    </p>
                  </div>

                  <div className="flex items-center gap-[12px] self-stretch text-[#181818] px-[24px]">
                    <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
                      <img
                        src={game}
                        className="w-[18px] h-[18px] group-hover:hidden"
                        alt="Default"
                      />
                    </div>

                    <p className="text-[16px] font-[400] leading-normal font-tekInter ">
                      Electronics
                    </p>
                  </div>
                </ul>
              )}
            </div>
          </div>

          {/* sign in button */}
          <div className="hidden lg:flex items-center">
            <button className="w-[95px] h-[44px] rounded-[8px] bg-secondBlue text-white">
              Search
            </button>
          </div>
        </div>

        {/* sign up, Menu, and cart */}
        <div className="hidden lg:flex gap-5 items-center">
          {/* sign up */}
          <div>
            <button className="px-5 h-[42px] text-nowrap rounded-[8px] items-center text-[#fff] bg-mainOrange flex gap-3">
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
              <div
                className="flex gap-1 cursor-pointer text-nowrap"
                onClick={toggleDropdown}
              >
                <h1 className="text-[16px] font-[400] font-tekInter text-white">
                  Menu
                </h1>
                <i
                  className={`ri-arrow-down-s-line w-[10px] h-[5px] text-[#fff] duration-300 ${
                    isDropdownOpen ? "ri-arrow-up-s-line" : ""
                  }`}
                ></i>
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
          <div className="flex items-center gap-1">
            <h1 className="text-[16px] font-[400] text-[#fff] text-nowrap">My cart</h1>
            <ul>
              <li>
                <img src={carticon} className="w-[16px] h-[15px]" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
