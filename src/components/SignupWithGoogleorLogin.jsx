// import React from "react";
import google from "../assets/google.png"
// import { Link } from "react-router-dom";

const SignupWithGoogleorLogin = () => {
  return (
    <div>
      <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">
        or
      </p>

      <button
        type="button"
        className="bg-[#F9F5FF] rounded-[8px] text-[#1843E2] shadow-btn text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[24px] py-[10px] px-[18px] w-full flex gap-[8px] items-center justify-center"
      >
        <img src={google} className="" alt="" /> Sign up with Google
      </button>

      {/* <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">
        Already have account? <Link to="/login" className="text-[#1843E2]">Log in</Link>
      </p> */}
    </div>
  );
};

export default SignupWithGoogleorLogin;
