import signup_notification from "/Image/eazy_gilf1.gif";
import { Link } from "react-router-dom";

const SignupNotification = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[100%] h-[100vh]">
      <img
        src={signup_notification}
        alt="signup_notification_img"
        className="md:w-[500px] md:h-[321px] w-[259px] h-[189px]"
      />

      <div className="gap-[24px] items-center justify-center flex flex-col">
        <h1 className="font-[400] md:text-[32px]  text-[48px] leading-[61px] font-tekInter text-[#000000]">
          Whoops!
        </h1>
        <p
          className="font-[400] text-[18px] leading-[19px] md:text-[24px]  text-center flex items-center justify-center md:leading-[38px]
     font-tekInter text-[#000000]"
        >
          you have to sign up before you can proceed
        </p>

        <div className="flex  flex-col-reverse md:flex-row md:gap-[24px] gap-[16px]">

        <Link
          to="/login"
          className="md:pt-[10px] pt-[12px] md:pl-[18px] pl-[20px] md:pb-[10px] pb-[12px] md:pr-[18px] pr-[20px] bg-[#1843E2] 
    border-[1px] border-[#1843E2]  rounded-[8px] text-[#FFFFFF] text-[16px] leading-[24px] text-center w-[203px] h-[48px] md:w-[199px] md:h-[44px]"
        >
          Sign in and continue
        </Link>

        
        <Link
          to="/signup"
          className="md:pt-[10px] pt-[12px] md:pl-[18px] pl-[20px] md:pb-[10px] pb-[12px] md:pr-[18px] pr-[20px] bg-[#F9F5FF] 
    border-[1px] border-[#1843E2]  rounded-[8px] text-[#1843E2] text-[16px] leading-[24px] text-center w-[203px] h-[48px] md:w-[199px] md:h-[44px]"
        >
          Sign up and continue
        </Link>



        </div>
   
      </div>
      
    </section>
  );
};

export default SignupNotification;
