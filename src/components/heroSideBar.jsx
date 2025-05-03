import { useState, useEffect, useRef } from "react";
import icon from "../assets/ic.png";
import iconBlue from "../assets/icBlue.png";
import speaker from "../assets/speaker.png";
import speakerBlue from "../assets/speakerBlue.png";
import broom from "../assets/broom.png";
import broomBlue from "../assets/broomBlue.png";
import game from "../assets/game.png";
import gameBlue from "../assets/gameBlue.png";
import menu from "../assets/menu.png";
import menuBlue from "../assets/menuBlue.png";
import calling from "../assets/Calling.png";
import group from "../assets/Group.png";
import { Link } from "react-router-dom";

const HeroSideBar = ({ setFilterKeyword }) => {
  const [activePopup, setActivePopup] = useState(null);
  const popupRef = useRef(null);

  // Function to handle popup visibility toggle
  const togglePopup = (index) => {
    setActivePopup((prev) => (prev === index ? null : index));
  };

  // Close the popup if clicked outside
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setActivePopup(null);
    }
  };

  useEffect(() => {
    if (activePopup !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

  return (
    <div className="relative mb-16 hidden lg:block">
      <div className="flex flex-col gap-[22px]">


        
        <div className="flex w-[319px] ml-[25px] mt-[20.5px] py-[20px] flex-col items-start gap-[10px] bg-white shadow-loctionShad relative">
          <div
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group cursor-pointer"
            onClick={() => togglePopup(1)}
          >
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
              <img
                src={icon}
                className="w-[18px] h-[18px] group-hover:hidden"
                alt="Default"
              />
              <img
                src={iconBlue}
                className="w-[18px] h-[18px] hidden group-hover:block"
                alt="Hover"
              />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Groceries
            </p>
          </div>

          <div
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group cursor-pointer"
            onClick={() => togglePopup(2)}
          >
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
              <img
                src={speaker}
                className="w-[18px] h-[18px] group-hover:hidden"
                alt="Default"
              />
              <img
                src={speakerBlue}
                className="w-[18px] h-[18px] hidden group-hover:block"
                alt="Hover"
              />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Appliances
            </p>
          </div>

          <div
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group cursor-pointer"
            onClick={() => togglePopup(3)}
          >
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
              <img
                src={broom}
                className="w-[18px] h-[18px] group-hover:hidden"
                alt="Default"
              />
              <img
                src={broomBlue}
                className="w-[18px] h-[18px] hidden group-hover:block"
                alt="Hover"
              />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Household cleaning
            </p>
          </div>

          <div
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group cursor-pointer"
            onClick={() => togglePopup(4)}
          >
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
              <img
                src={game}
                className="w-[18px] h-[18px] group-hover:hidden"
                alt="Default"
              />
              <img
                src={gameBlue}
                className="w-[18px] h-[18px] hidden group-hover:block"
                alt="Hover"
              />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Electronics
            </p>
          </div>

          <div
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group cursor-pointer"
            onClick={() => togglePopup(5)}
          >
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
              <img
                src={menu}
                className="w-[18px] h-[18px] group-hover:hidden"
                alt="Default"
              />
              <img
                src={menuBlue}
                className="w-[18px] h-[18px] hidden group-hover:block"
                alt="Hover"
              />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Other category
            </p>
          </div>
        </div>

        <div className="ml-[25px] flex flex-col w-[319px] shadow-loctionShad items-start gap-[14px] py-[14px] px-[19px] bg-white">
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-300">
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#3157E1] bg-[#e1b16433]">
              <img src={group} className="w-[18px] h-[18px]" alt="" />
            </div>

            <Link to="/store-signup"  className="text-[16px] font-[400] leading-normal font-tekInter">
              Become a seller on Eazzi
            </Link>
          </div>

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

        {/* Popup Accordion for each item */}
        {activePopup === 1 && (
          <div ref={popupRef} className="absolute top-[2rem] left-[21rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[66px] pr-[349px] rounded-[8px] loctionShad -mt-5 popup-accordion">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Food Items
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Pasta & Noodles 
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Breakfast Foods
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Coffee
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Juice
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Water
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Packaged Foods
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Sugar, Sweeteners
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Cooking oil
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Snacks
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Ice Cream and Milk
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Energy Drinks
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Biscuits
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Cookies
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Chocolate,
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Candy
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Beverages
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Beers
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Red Wine
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Champagne
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Vodka
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Canned & Packaged Goods
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Canned Tomatoes
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Sardines
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Corned Beef
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Packaged Soup
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Wipes & Refills
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Wipes & Refills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activePopup === 2 && (
          <div ref={popupRef} className="absolute top-[2rem] left-[21rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[66px] pr-[349px] rounded-[8px] loctionShad -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Kitchen Appliances
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Refrigerator
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Freezer
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Microwave
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Oven
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Blender
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Food Processor
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Electric Kettle
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Toaster
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Home Comfort Appliances
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Air Conditioner
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Electric Fan
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Water Heater
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Laundry Appliances
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Washing Machine
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Clothes Dryer
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Steam Iron
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Small Appliances
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Vacuum Cleaner
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Hand Mixer
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Hand Mixer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activePopup === 3 && (
          <div ref={popupRef} className="absolute top-[2rem] left-[21rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[66px] pr-[349px] rounded-[8px] loctionShad -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Cleaning Tools
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Mops
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Brooms
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Brushes
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Buckets
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Dustpans
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Cleaning Cloths
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Sponges
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Cleaning Products
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Detergents
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Dishwashing Liquid
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Toilet Cleaner
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Bleach
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Disinfectant
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Glass Cleaner
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Air Fresheners & Pest Control:
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Air Fresheners
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Insecticides
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Mosquito Sprays
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Rodent Repellents
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  All Fashion
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Baby Diapers
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Bottle Feeding
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Wipes & Refills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activePopup === 4 && (
          <div ref={popupRef} className="absolute top-[2rem] left-[21rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[66px] pr-[349px] rounded-[8px] loctionShad -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Computing
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Laptops
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Desktops
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Tablets
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Printer
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Scanner
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Phones & Accessories:
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Smartphones
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Earphones
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Headphones
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Phone Chargers
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Power Banks
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Television & Media:
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Smart TV
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  LED TV
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Decoders
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Home Theater Systems
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Cameras & Photography
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Digital Cameras
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Security Cameras
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Drones
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activePopup === 5 && (
          <div ref={popupRef} className="absolute top-[2rem] left-[21rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[66px] pr-[349px] rounded-[8px] loctionShad -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Furniture
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Sofas
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Chairs
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Tables
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Beds
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Mattresses
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Wardrobes
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Shelves
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Stationery & Office
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Notebooks
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Pens
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Staplers
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Punchers
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Files
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Paper
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Folders
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Fashion
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Shirt
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Trouser
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Gown
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Polo
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Short
                  </li>
                  <li 
                  className=" cursor-pointer text-[#828282] text-[16px] leading-normal font-[400] font-tekInter transition-colors duration-300 hover:bg-gray-200 focus:bg-gray-300" onClick={() =>{
                    console.log('Clicked: bag');
                    setFilterKeyword('bag');
                  }}>
                    Bag
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Watch
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Jewerlry
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Beauty & Personal Care
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Shampoo
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Conditioner
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Soap
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Perfume
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Deodorant
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Skincare
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                Toys & Baby Products
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Baby Diapers
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Wipes
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Baby Food
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Formula
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                  Toys
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                 Games
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
      
    </div>
  );
};

export default HeroSideBar;
