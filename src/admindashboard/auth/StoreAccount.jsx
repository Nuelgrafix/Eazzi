import { useState } from "react";
import sign from "../../assets/signup.png";
import logo from "../../assets/eazzi_logo.svg";



import SignupWithGoogleorLogin from "../../components/SignupWithGoogleorLogin";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const StoreAccount = () => {
  const [formData, setFormData] = useState({
    store_name: "",
    store_address: "",
    street: "",
    city: "",
    state:""
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
     await axios.post(
        "https://django-7u8g.onrender.com/api/authent/register/",
        formData
      );
      toast.success("Registered successfully", {
        position: "top-center",
      });

      navigate('/store-dashboard')
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
          My Store details
          </h2>
          <p className="text-xl font-tekInter text-[#4F4F4F]  font-[400] px-3 ">Please kindly provide the store information here</p>
          <form
            onSubmit={handleSubmit}
            className="mt-[32px] flex flex-col gap-[24px] px-3"
          >
            <div>
              <input
                type="text"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
                name="first_name"
                placeholder="Store Name"
                value={formData.store_name}
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
                name="store_address"
                placeholder="Store Address"
                value={formData.store_address}
                onChange={handleChange}
                required
              />
              {errors.last_name && (
                <p className="text-red-600 text-[15px]">{errors.last_name}</p>
              )}
            </div>

            <div className="w-full relative">
              <input
                type="text"
                className="text-[#828282] h-[53px] py-[26px] px-[16px]  border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
                required
              />
              {errors.street && (
                <p className="text-red-600 text-[15px]">{errors.street}</p>
              )}

           
            </div>

    

            <div className="w-full relative">
              <input
                type="text"
                className="text-[#828282] h-[53px] py-[26px] px-[16px]  border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && (
                <p className="text-red-600 text-[15px]">{errors.city}</p>
              )}

           
            </div>

            <div className="w-full relative">
              <input
                type="text"
                className="text-[#828282] h-[53px] py-[26px] px-[16px]  border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              {errors.state && (
                <p className="text-red-600 text-[15px]">{errors.state}</p>
              )}

           
            </div>

            <div className="w-full relative">
              <input
                type="text"
                className="text-[#828282] h-[53px] py-[26px] px-[16px]  border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="state"
                placeholder="Upload your CAC image"
                value={formData.state}
                onChange={handleChange}
                required
              />
              {errors.state && (
                <p className="text-red-600 text-[15px]">{errors.state}</p>
              )}

           
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreAccount;
