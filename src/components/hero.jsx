import React from "react";
import icon from "../assets/ic.png";
import iconBlue from "../assets/icBlue.png";
import fashion from "../assets/fashion.png";
import fashionBlue from "../assets/fashionBlue.png";
import speaker from "../assets/speaker.png";
import speakerBlue from "../assets/speakerBlue.png";
import game from "../assets/game.png";
import gameBlue from "../assets/gameBlue.png";
import broom from "../assets/broom.png";
import broomBlue from "../assets/broomBlue.png";
import menu from "../assets/menu.png";
import menuBlue from "../assets/menuBlue.png";
import calling from "../assets/Calling.png";
import group from "../assets/Group.png";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col gap-[22px]">
        <div className="flex w-[319px] ml-[58px] mt-[27px] p-[24px] flex-col items-start gap-[12px] bg-white shadow-custom-blue">
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 group">
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
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 group">
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
              <img
                src={fashion}
                className="w-[18px] h-[18px] group-hover:hidden"
                alt="Default"
              />
              <img
                src={fashionBlue}
                className="w-[18px] h-[18px] hidden group-hover:block"
                alt="Hover"
              />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Fashion
            </p>
          </div>
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 group">
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
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 group">
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={broom} className="w-[18px] h-[18px] group-hover:hidden" alt="Default" />
              <img src={broomBlue} className="w-[18px] h-[18px] hidden group-hover:block" alt="Hover" />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Hosehold cleaning
            </p>
          </div>
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 group">
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={game} className="w-[18px] h-[18px] group-hover:hidden" alt="Default" />
              <img src={gameBlue} className="w-[18px] h-[18px] hidden group-hover:block" alt="Hover" />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Electronics
            </p>
          </div>
          <div className="flex items-center gap-[12px] self-stretch text-[#181818] hover:text-[#1843E2] transition duration-100 group">
            <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={menu} className="w-[18px] h-[18px] group-hover:hidden" alt="Default" />
              <img src={menuBlue} className="w-[18px] h-[18px] hidden group-hover:block" alt="Hover" />
            </div>

            <p className="text-[16px] font-[400] leading-normal font-tekInter ">
              Other catergory
            </p>
          </div>
        </div>

        <div className="ml-[58px] flex flex-col w-[319px] shadow-custom-blue items-start gap-[16px] py-[16px] px-[19px] bg-white">
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
      </div>
    </div>
  );
};

export default Hero;
