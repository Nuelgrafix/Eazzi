import React from "react";
import icon from "../assets/ic.png";
import fashion from "../assets/fashion.png";
import speaker from "../assets/speaker.png";
import game from "../assets/game.png";
import broom from "../assets/broom.png";
import menu from "../assets/menu.png";

const Hero = () => {
  return (
    <div>
      <div className="flex w-[319px] ml-[58px] mt-[27px] p-[24px] flex-col items-start gap-[12px] bg-white shadow-custom-blue">
        <div className="flex items-center gap-[12px] self-stretch">
          <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={icon} className="w-[18px] h-[18px]" alt="" />
          </div>

          <p className="text-[16px] text-[#181818] font-[400] leading-normal font-tekInter">Groceries</p>
        </div>
        <div className="flex items-center gap-[12px] self-stretch">
          <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={fashion} className="w-[18px] h-[18px]" alt="" />
          </div>

          <p className="text-[16px] text-[#282828] font-[400] leading-normal font-tekInter">Fashion</p>
        </div>
        <div className="flex items-center gap-[12px] self-stretch">
          <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={speaker} className="w-[18px] h-[18px]" alt="" />
          </div>

          <p className="text-[16px] text-[#282828] font-[400] leading-normal font-tekInter">Appliances</p>
        </div>
        <div className="flex items-center gap-[12px] self-stretch">
          <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={broom} className="w-[18px] h-[18px]" alt="" />
          </div>

          <p className="text-[16px] text-[#282828] font-[400] leading-normal font-tekInter">Hosehold cleaning</p>
        </div>
        <div className="flex items-center gap-[12px] self-stretch">
          <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={game} className="w-[18px] h-[18px]" alt="" />
          </div>

          <p className="text-[16px] text-[#282828] font-[400] leading-normal font-tekInter">Electronics</p>
        </div>
        <div className="flex items-center gap-[12px] self-stretch">
          <div className="flex items-center justify-center w-[30px] h-[30px] p-[6px] rounded-[83.333px] border-[0.833px] border-[#E0E0E0]">
            <img src={menu} className="w-[18px] h-[18px]" alt="" />
          </div>

          <p className="text-[16px] text-[#282828] font-[400] leading-normal font-tekInter">Other catergory</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
