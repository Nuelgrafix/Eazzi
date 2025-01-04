import { useState } from "react";
import sign from "../../assets/signup.png";
import logo from "../../assets/eazzi_logo.svg";
import mail from "../../assets/mail.png";
import SignupWithGoogleorLogin from "../../components/SignupWithGoogleorLogin";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PasswordVisibility from "../../hooks/PasswordVisibility";


import eye from "../../assets/Show.png";
import eyex from "../../assets/eyex.png";

const StoreSignup = () => {


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: ""
  });

  const navigate = useNavigate()

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const err = {};

    if (!formData.first_name.trim()) {
      err.first_name = "This Field Required";
    }
    if (!formData.last_name.trim()) {
      err.last_name = "This Field Required";
    }
    if (!formData.email.trim()) {
      err.email = "This Field Required";
    }
    if (!formData.phone.trim()) {
      err.phone = "This Field Required";
    }
    // Password validation
    if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(formData.password)
    ) {
      err.password =
        "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character.";
    }
    if (!formData.password.trim()) {
      err.password = "This Field Required";
    }
   
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = { user: formData };

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
     await axios.post(
        "https://django-7u8g.onrender.com/api/stores/register/",
        dataToSend
      );
      toast.success("Email verification code sent", {
        position: "top-center",
      });

      navigate('/store-verify-email')
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
    <div className="absolute z-50 bg-white w-full pb-36 md:pb-0">

      <ToastContainer />
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-0">
        <div className="hidden md:flex w-full h-[1100px] flex-grow">
          <img src={sign} className="w-full object-cover" alt="Signup" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px] md:px-10 lg:px-20">
          <div className="w-full h-[100px] bg-[#1843E2] md:hidden mt-[-70px] px-3">
            <img src={logo} className="pb-8 pt-[29px] h-[104px]" alt="" />
          </div>
          <h2 className="text-[24px] font-tekInter text-[#4F4F4F] leading-[30px] font-[700] px-3 mt-10">
            Sign up
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-[32px] flex flex-col gap-[24px] px-3"
          >
            <div>
              <input
                type="text"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              {errors.first_name && (
                <p className="text-red-600 text-[15px]">{errors.first_name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
              {errors.last_name && (
                <p className="text-red-600 text-[15px]">{errors.last_name}</p>
              )}
            </div>

            <div className="w-full relative">
              <input
                type="email"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] pl-10 border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-600 text-[15px]">{errors.email}</p>
              )}

              <img
                src={mail}
                className="absolute top-[13px] left-[10.3px]"
                alt="Mail icon"
              />
            </div>

            <div>
              <input
                type="number"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <p className="text-red-600 text-[15px]">{errors.phone}</p>
              )}
            </div>


            <div className="relative">
              <input
                type={isShow ? "text" : "password"}
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className="text-red-600 text-[15px]">{errors.password}</p>
              )}

              <img
                src={isShow ? eyex : eye}
                className="absolute cursor-pointer top-3 right-3"
                alt=""
                onClick={togglePasswordVisibility}
              />
            </div>



            <button
              type="submit"
              className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px] flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? <div className="loader"></div> : "Continue"}
            </button>
          </form>

          <div className="px-3">
            <SignupWithGoogleorLogin />

            <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">
        Don&apos;t have account? <Link to="/store-login" className="text-[#1843E2]">Login</Link>
      </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default StoreSignup;
