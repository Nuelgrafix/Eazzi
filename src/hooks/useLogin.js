import { useState } from "react";
import PasswordVisibility from "./PasswordVisibility";
import { useNavigate } from "react-router-dom";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";


const useLogin = () => {


    const {
        isShow,
        isShowb,
        togglePasswordVisibility,
        togglePasswordVisibilityb,
    } = PasswordVisibility()


  
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("")

      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);

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
        if (password.trim()) {
          err.password = "This Field Required";
        }
  
        setErrors(err);
        return Object.keys(err).length === 0;
      };
    

      const navigate = useNavigate()

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
          return;
        }
        setIsSubmitting(true);
        try {
         await axios.post(
            "https://django-7u8g.onrender.com/api/authent/login/",
        {email,password}
          );
          toast.success("Email verification code sent", {
            position: "top-center",
          });
    
          navigate('/verify_email')
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



  return {
validateForm, errors, isSubmitting,  setEmail, email, setPassword, password,
handleSubmit,
isShow,
isShowb,
togglePasswordVisibility,
togglePasswordVisibilityb,

  }

  
}

export default useLogin