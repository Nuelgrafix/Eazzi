import React from "react";
import sign from "../assets/sign.png";
import mail from "../assets/mail.png";
import SignupWithGoogleorLogin from "../components/SignupWithGoogleorLogin";

const Signup = () => {
  return (
    <div className="absolute z-50 bg-white w-full pb-36">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-3 md:px-10 lg:px-28">
        <div className="w-full h-full hidden md:flex">
          <img src={sign} className="" alt="" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px]">
          <h2 className="text-[24px] font-tekInter text-[#4F4F4F] leading-[30px] font-[700]">
            Sign up
          </h2>
          <form action="" className="mt-[32px] flex flex-col gap-[24px]">
            <input
              type="text"
              className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
              name="first name"
              placeholder="First Name"
            />

            <input
              type="text"
              className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
              name="Last name"
              placeholder="Last Name"
            />

            <div className="w-full relative">
              <input
                type="email"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] pl-10 border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="Last name"
                placeholder="Email address"
              />
              <img src={mail} className="absolute top-[13px] left-[10.3px]" alt="" />
            </div>

            <input
              type="tel"
              className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
              name="phone"
              placeholder="Phone No."
            />

            <button type="button" className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px]">Continue</button>
          </form>

          <SignupWithGoogleorLogin />
        </div>
      </div>
    </div>
  );
};

export default Signup;
