import  { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import sign from "../assets/signup.png";
import profile from "../../public/Image/profile.svg";
import mail from "../assets/mail.png";
import eye from "../assets/Show.png";
import eyex from "../assets/eyex.png";
import message from "../assets/message.svg";
import axios from "axios";
import { toast } from "react-toastify";

import PasswordVisibility from "../hooks/PasswordVisibility";
import { useAuthContext } from "../hooks/useAuthContext";

const RiderDashboard = () => {

  const [email,setEmail] = useState("");
  const [ password,setPassword] = useState()
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
const {setAuthUser}  = useAuthContext();


  const validateForm = () => {
    const err = {};
    if (!email.trim()) {
      err.email = "This Field Required";
    }
  
    // Password validation
    if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)
    ) {
      err.password =
        "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character.";
    }
    if (!password.trim()) {
      err.password = "This Field Required";
    }
    
 
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
   const res =  await axios.post( "https://django-7u8g.onrender.com/api/authent/login/",
      {
      username: email,  // Rename 'email' to 'username'
       password: password
      }
      );
      
 const aware = localStorage.setItem("user", JSON.stringify(res));
 setAuthUser(res)
      toast.success("Login successfully", {
        position: "top-center",
      });
      console.log(aware)
      navigate('/')
    
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.error, {
          position: "top-center",
        });
      } else
      toast.error("Error submitting the form. Please try again!", {
        position: "top-center",
      });
    }

    setIsSubmitting(false);
  };

  const {
    isShow,
    togglePasswordVisibility,
  } = PasswordVisibility();


  return (
    <section className="absolute z-50 bg-white w-full pb-[14rem] md:pb-0">

      <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-0">
        
        <div className="hidden md:flex w-full h-[800px] flex-grow">
          <img src={sign} className="w-full h-full object-cover" alt="Signup" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px] md:px-10 lg:px-20 " >

            <div className="flex items-center justify-between max-w-full  w-full bg-[#1843E2] ">


            <div className="w-full h-[100px] bg-[#1843E2] flex gap-[2px] items-center md:hidden mt-[-70px] px-3">
                <div className="">
                <img src={profile} className="pb-8 pt-[29px] h-[104px]" alt="" />
                </div>

                <div className="">
                    <h1 className="text-[12px] font-[400] leading-[14px] text-white">Hi, <br /> <span className="text-[16px] leading-[19px] font-[700] ">Williams</span></h1>
                </div>
     
          </div>

           <Link to="/rider-messages" className="w-[40px] h-[40px] bg-[#1843E2] cursor-pointer rounded-[100px]
           flex gap-[2px] items-center justify-center md:hidden mt-[-70px]">
                <div className="w-[24px] h-[24px]  bg-[#1843E2]">
                <img src={message} className="w-[24px] h-[24px]" alt="" />
                </div>

                    <div className="bg-[#FF7F00] absolute rounded-[100px] w-[17px] h-[14px] flex items-center justify-center top-[22px] right-[1px]">
                    <h1 className="text-[8px] leading-[10px] font-[400] text-white">5</h1>
                </div>
     
          </Link> 

          



            </div>
   
          <h2 className="md:text-[24px] font-tekInter md:text-[#4F4F4F] text-[#333333] text-[16px] leading-[19px] font-[400] md:leading-[30px] md:font-[700] px-3 mt-10">
          Dear Rider, the customer should fill this input with his/her Name.
          </h2>
          <form action=""  onSubmit={handleSubmit} className="mt-[32px] flex flex-col gap-[24px] px-3">
            <div className="w-full relative">
              <input
                type="name"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] pl-10 border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="Last name"
                placeholder="Customer name"
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <img
                src={mail}
                className="absolute top-[13px] left-[10.3px]"
                alt="Mail icon"
              />
                    {errors.email && (
                <p className="text-red-600 text-[15px]">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={isShow ? "text" : "password"}
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
                name="orderid"
                placeholder="Order ID"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <img
                src={isShow ? eyex : eye}
                className="absolute cursor-pointer top-3 right-3"
                alt=""
                onClick={togglePasswordVisibility}
              />
                   {errors.password && (
                <p className="text-red-600 text-[15px]">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-between mt-[-1rem]">

            <h2 className="text-[12px] font-tekInter text-[#828282] leading-[14px] font-[7400] px-3 ">
            Name and Order ID should match with the Order’s account.
          </h2>
            </div>

            <button
              type="submit"
              className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px] justify-center items-center flex"
              disabled={isSubmitting} 
            >
              
              {isSubmitting ? <div className="loader flex justify-center items-center"></div> : "Submit"}
            </button>
          </form>

    
        </div>

        
      </div>
    </section>
  );
};

export default RiderDashboard;
