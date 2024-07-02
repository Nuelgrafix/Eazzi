import React from 'react'
import img from "../assets/crpass.png"
import logo from "../assets/eazzi_logo.svg"
import mail from "../assets/mail.png"
import SignupWithGoogleorLogin from '../components/SignupWithGoogleorLogin'

const CreatePassword = () => {
  return (
    <div className="absolute z-50 bg-white w-full pb-36 md:pb-0">
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-0">
        <div className="hidden md:flex w-full h-[800px] flex-grow">
          <img src={img} className="w-full h-full object-cover" alt="Signup" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px] md:px-10 lg:px-20">
          <div className="w-full h-[100px] bg-[#1843E2] md:hidden mt-[-70px] px-3">
            <img src={logo} className="pb-8 pt-[29px] h-[104px]" alt="" />
          </div>
          <h2 className="text-[24px] font-tekInter text-[#4F4F4F] leading-[30px] font-[700] px-3 mt-10">
            Create Password
          </h2>
          <form action="" className="mt-[32px] flex flex-col gap-[24px] px-3">
            <input
              type="password"
              className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
              name="password"
              placeholder="Create Password"
              required
            />

            <input
              type="password"
              className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
              name="password"
              placeholder="Confirm Password"
              required
            />

            <button
              type="submit"
              className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px]"
            >
              Continue
            </button>
          </form>

          <SignupWithGoogleorLogin />
        </div>
      </div>
    </div>
  )
}

export default CreatePassword