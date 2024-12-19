import  { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import sign from "../../assets/signup.png";
import logo from "../../assets/eazzi_logo.svg";
import mail from "../../assets/mail.png";
import eye from "../../assets/Show.png";
import eyex from "../../assets/eyex.png";

import SignupWithGoogleorSignup from "../../components/SignupWithGoogleorSignup";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PasswordVisibility from "../../hooks/PasswordVisibility";
import { useAuthContext } from "../../hooks/useAuthContext";

const StoreLogins = () => {
  const {id}  = useParams()
  const [email,setEmail] = useState("");
  const [ password,setPassword] = useState("")
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
const {setAuthUser, setToken}  = useAuthContext();


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
   const res =  await axios.post( "https://django-7u8g.onrender.com/api/stores/login/",
      {
        user:{
      email: email, 
       password: password
      }
      }
      );
      
 const user = localStorage.setItem("user", JSON.stringify(res));
 const token = localStorage.setItem("token", JSON.stringify(res.data.token));
 console.log(token)
 setAuthUser(res);
 setToken(res.data.token)
      toast.success("Login successfully", {
        position: "top-center",
      });
      console.log(user)
 
      navigate(`/store-createaccount/${id}`)
    
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
    <div className="absolute z-50 bg-white w-full pb-[14rem] md:pb-0">
      <ToastContainer />

      <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-0">
        <div className="hidden md:flex w-full h-[800px] flex-grow">
          <img src={sign} className="w-full h-full object-cover" alt="Signup" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px] md:px-10 lg:px-20">
          <div className="w-full h-[100px] bg-[#1843E2] md:hidden mt-[-70px] px-3">
            <img src={logo} className="pb-8 pt-[29px] h-[104px]" alt="" />
          </div>
          <h2 className="text-[24px] font-tekInter text-[#4F4F4F] leading-[30px] font-[700] px-3 mt-10">
            Welcome back, Log in
          </h2>
          <form action=""  onSubmit={handleSubmit} className="mt-[32px] flex flex-col gap-[24px] px-3">
            <div className="w-full relative">
              <input
                type="email"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] pl-10 border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="Last name"
                placeholder="Email address"
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
                name="password"
                placeholder="Password"
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
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <label
                  htmlFor="checkbox"
                  className="text-[14px] text-[#4F4F4F] font-[400] font-tekInter"
                >
                  Remember me
                </label>
              </div>

              <Link
                to="/forget_password"
                className="text-[14px] text-[#333333] font-[400] font-tekInter"
              >
                Forget password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px] justify-center items-center flex"
              disabled={isSubmitting} 
            >
              
              {isSubmitting ? <div className="loader flex justify-center items-center"></div> : "Login"}
            </button>
          </form>

          <div className="px-3">
            <SignupWithGoogleorSignup />

            <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">
        Don&apos;t have account? <Link to="/store-signup" className="text-[#1843E2]">Signup</Link>
      </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StoreLogins;
