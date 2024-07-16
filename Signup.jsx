import React, { useState } from "react";
import sign from "../assets/sign.png";
import mail from "../assets/mail.png";
import google from "../assets/google.png";
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.first_name.trim()) {
      errors.first_name = "This Field Required";
    }
    if (!formData.last_name.trim()) {
      errors.last_name = "This Field Required";
    }
    if (!formData.email.trim()) {
      errors.email = "This Field Required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "This Field Required";
    }
    if (!formData.password.trim()) {
      errors.password = "This Field Required";
    }
    if (!formData.confirm_password.trim()) {
      errors.confirm_password = "This Field Required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (formData.password !== formData.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    if (!validatePassword(formData.password)) {
      alert(
        'Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/authent/register/', formData);
      console.log('Form submit successful', response.data);
      alert('Registration successful');
      // Redirect to email verification page or login page
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="absolute z-50 bg-white w-full pb-36">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-3 md:px-10 lg:px-28">
        <div className="w-full h-full hidden md:flex">
          <img src={sign} className="" alt="" />
        </div>

        <div className="w-full mt-[65px] md:mt-[100px]">
          <h2 className="text-[24px] font-tekInter text-[#4F4F4F] leading-[30px] font-[700]">
            Sign up
          </h2>
          <form onSubmit={handleSubmit} className="mt-[32px] flex flex-col gap-[24px]">
            <input
              type="text"
              className={`form-control ${errors.first_name ? 'is-invalid' : ''} text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]`}
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.first_name}
            />
            {errors.first_name && <div className="invalid-feedback text-red-500">{errors.first_name}</div>}

            <input
              type="text"
              className={`form-control ${errors.last_name ? 'is-invalid' : ''} text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]`}
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.last_name}
            />
            {errors.last_name && <div className="invalid-feedback text-red-500">{errors.last_name}</div>}

            <div className="w-full relative">
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''} text-[#828282] h-[53px] py-[26px] px-[38px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]`}
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                value={formData.email}
              />
              <img src={mail} className="absolute top-[17px] left-[10.3px]" alt="" />
              {errors.email && <div className="invalid-feedback text-red-500">{errors.email}</div>}
            </div>

            <input
              type="tel"
              className={`form-control ${errors.phone ? 'is-invalid' : ''} text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]`}
              name="phone"
              placeholder="Phone No."
              onChange={handleChange}
              value={formData.phone}
            />
            {errors.phone && <div className="invalid-feedback text-red-500">{errors.phone}</div>}

            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''} text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]`}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            {errors.password && <div className="invalid-feedback text-red-500">{errors.password}</div>}

            <input
              type="password"
              className={`form-control ${errors.confirm_password ? 'is-invalid' : ''} text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]`}
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirm_password}
            />
            {errors.confirm_password && <div className="invalid-feedback text-red-500">{errors.confirm_password}</div>}

            <button type="submit" className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[38px] py-[10px] px-[18px]">
              Continue
            </button>
          </form>

          <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">or</p>

          <button type="submit" className="bg-[#F9F5FF] rounded-[8px] text-[#1843E2] shadow-btn text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[24px] py-[10px] px-[18px] w-full flex gap-[8px] items-center justify-center">
            <img src={google} className="" alt="" /> Sign up with Google
          </button>

          <p className="text-[#828282] text-center text-[16px] font-[400] font-tekInter mt-[24px]">Already have an account? <span className="text-[#1843E2]">Log in</span></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
