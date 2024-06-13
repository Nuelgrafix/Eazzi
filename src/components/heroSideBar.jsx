import React, { useState } from "react";
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

const HeroSideBar = () => {
  const [activePopup, setActivePopup] = useState(null);

  // Function to handle popup visibility toggle
  const togglePopup = (index) => {
    setActivePopup((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative mb-16">
      <div className="flex flex-col gap-[22px]">
        <div className="flex w-[319px] ml-[58px] mt-[27px] py-[23px] flex-col items-start gap-[12px] bg-white shadow-custom-blue relative z-50">
          <div
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group"
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
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group"
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
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group"
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
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group"
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
            className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 px-[24px] group"
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

        <div className="ml-[58px] flex flex-col w-[319px] shadow-custom-blue items-start gap-[16px] py-[16px] border px-[19px] z-50 bg-white">
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-300">
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#3157E1] bg-[#e1b16433]">
              <img src={group} className="w-[18px] h-[18px]" alt="" />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter">
              Become a seller on Eazzi
            </p>
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
          <div className="absolute top-[3rem] left-[25rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[42px] pr-[349px] rounded-[8px] shadow-custom-blue -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Men Fashion
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
                  Women's Fashion
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Ice Cream and Milk
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Energy Drinks
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Bottled Drink
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Kids Fashion
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
        {activePopup === 2 && (
          <div className="absolute top-[3rem] left-[25rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[42px] pr-[349px] rounded-[8px] shadow-custom-blue -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Men Fashion
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
                  Women's Fashion
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Ice Cream and Milk
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Energy Drinks
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Bottled Drink
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Kids Fashion
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

        {activePopup === 3 && (
          <div className="absolute top-[3rem] left-[25rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[42px] pr-[349px] rounded-[8px] shadow-custom-blue -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Men Fashion
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
                  Women's Fashion
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Ice Cream and Milk
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Energy Drinks
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Bottled Drink
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Kids Fashion
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
          <div className="absolute top-[3rem] left-[25rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[42px] pr-[349px] rounded-[8px] shadow-custom-blue -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Men Fashion
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
                  Women's Fashion
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Ice Cream and Milk
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Energy Drinks
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Bottled Drink
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Kids Fashion
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

        {activePopup === 5 && (
          <div className="absolute top-[3rem] left-[25rem] bg-white opacity-100 transform translate-x-0 transition-all duration-300 inline-flex items-center py-[24px] pl-[42px] pr-[349px] rounded-[8px] shadow-custom-blue -mt-5 popup-accordion ">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Men Fashion
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
                  Women's Fashion
                </p>

                <ul className="flex flex-col gap-[12px]">
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Ice Cream and Milk
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Energy Drinks
                  </li>
                  <li className="text-[#828282] text-[16px] leading-normal font-[400] font-tekInter">
                    Bottled Drink
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-start gap-[24px] text-nowrap">
                <p className="text-[#181818] text-[20px] font-tekInter font-[400] leading-[24px] border-b-[.5px] border-b-[#181818] ">
                  Kids Fashion
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
      </div>
    </div>
  );
};

export default HeroSideBar;
