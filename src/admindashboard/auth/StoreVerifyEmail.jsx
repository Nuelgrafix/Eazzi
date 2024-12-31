import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import sign from "../../assets/ver.png";
import logo from "../../assets/eazzi_logo.svg";
import SignupWithGoogleorLogin from "../../components/SignupWithGoogleorLogin";
import { toast, ToastContainer } from "react-toastify";
import { useAuthContext } from "../../hooks/useAuthContext";

const StoreVerifyEmail = () => {
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {setId, setToken}  = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { code };
    console.log("Payload:", payload); // Log the payload

    try {
      const res = await axios.post(
        "https://django-7u8g.onrender.com/api/stores/verify-email/",
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

       console.log("Response data:", res.data); 
       if (res.data.message === "Email verified successfully") {
        toast.success(res.data.message, {
          position: "top-center",
        });

      } else {
        toast.error(res.data.message, {
          position: "top-center",
        });
      }
 
      const id = localStorage.setItem("id", JSON.stringify(res.data.id));
      const token = localStorage.setItem("token", JSON.stringify(res.data.token));
     setId(id)
     setToken(token);

   
      navigate(`/store-createaccount/${res.data.id}`);
     
  
    } catch (err) {
      console.error("Error response:", err.response); 
      if (err.response && err.response.data) {
        toast.error(err.response.data.error, {
          position: "top-center",
        });
      } else
      toast.error("Error. Please try again!", {
        position: "top-center",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="absolute z-50 bg-white w-full pb-56 md:pb-0">
      <ToastContainer />
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-0">
        <div className="hidden md:flex w-full h-[800px] flex-grow">
          <img src={sign} className="" alt="" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px] md:px-10 lg:px-20">
          <div className="w-full h-[100px] bg-[#1843E2] md:hidden mt-[-70px] px-3">
            <img src={logo} className="pb-8 pt-[29px] h-[104px]" alt="" />
          </div>

          <div className="px-3 mt-10">
            <h2 className="text-[24px] font-tekInter text-[#4F4F4F] leading-[30px] font-[700]">
              Verify Email
            </h2>
            <p className="text-[16px] font-tekInter text-[#4F4F4F] leading-[30px] font-[400] mt-2">
              Enter the verification code sent to your email
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-[32px] flex flex-col gap-[24px]"
            >
              <input
                type=""
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
              />
              <p className="text-[16px] font-tekInter text-[#4F4F4F] leading-[30px] mt-3 cursor-pointer">
                Didn’t receive code?{" "}
                <span className="text-[#1843E2] font-[700]">Resend</span>
              </p>
              <button
                type="submit"
                className="bg-[#1843E2] flex items-center justify-center rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? <div className="loader"></div> : "Verify"}
              </button>
            </form>

            <div className="px-3">
              <SignupWithGoogleorLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreVerifyEmail;
