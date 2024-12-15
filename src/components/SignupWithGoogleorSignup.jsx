
// import { Link } from 'react-router-dom'
import google from "../assets/google.png"

const SignupWithGoogleorSignup = () => {
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
{/* 
      <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">
        Don't have account? <Link to="/signup" className="text-[#1843E2]">Sign up</Link>
      </p> */}
      
    </div>
  )
}

export default SignupWithGoogleorSignup