
import sign from "../assets/sign.png";
import SignupWithGoogleorLogin from '../components/SignupWithGoogleorLogin';

const VerifyEmail = () => {
  return (
    <div className="absolute z-50 bg-white w-full pb-[21rem]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-3 md:px-10 lg:px-28">
        <div className="w-full h-full hidden md:flex">
          <img src={sign} className="" alt="" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px]">
          <h2 className="text-[24px] font-tekInter text-[#4F4F4F] leading-[30px] font-[700]">
            Verify Email
          </h2>
          <p className='text-[16px] font-tekInter text-[#4F4F4F] leading-[30px] font-[400] mt-2'>Enter the verification code sent to your email</p>
          <form action="" className="mt-[32px] flex flex-col gap-[24px]">
            <input
              type="number"
              className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
              placeholder="Enter code"
            />
            <p className='text-[16px] font-tekInter text-[#4F4F4F] leading-[30px] -mt-5 cursor-pointer'>Didn’t receive code? <span className='text-[#1843E2] font-[700]'>Resend</span></p>
            <button type="button" className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px]">Verify</button>
          </form>

          <SignupWithGoogleorLogin />
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail