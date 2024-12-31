import { useState } from "react";
import sign from "../../assets/signup.png";
import logo from "../../assets/eazzi_logo.svg";
import defaultImage from "../../../public/Image/artboard.png"



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useNavigate, useParams,} from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";




const StoreAccount = () => {


  const [formData, setFormData] = useState({
    store_name: "",
    store_address: "",
    street: "",
    city: "",
    state:"",
    cac_image : ""
  });
  const navigate = useNavigate()
  const {token}  = useAuthContext();


  const {id} = useParams()
  console.log(id)

  const [preview,setPreview] = useState(null)

  const handleImage = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      if (file.size <= 5 * 1024 * 1024) {
        setFormData((prevState) => ({
          ...prevState,
          cac_image: file,
        }));
        setPreview(URL.createObjectURL(file)); 
      } else {
        alert("File size exceeds 5MB");
      }
    }
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const err = {};

    if (!formData.store_name.trim()) {
      err.store_name = "This Field Required";
    }
    if (!formData.store_address.trim()) {
      err.store_address = "This Field Required";
    }
    if (!formData.street.trim()) {
      err.street = "This Field Required";
    }
    if (!formData.city.trim()) {
      err.city = "This Field Required";
    }
    if (!formData.state.trim()) {
      err.state = "This Field Required";
    }
    // if (!formData.cac_image.trim()) {
    //   err.cac_image = "This Field Required";
    // }


  
    setErrors(err);
    return Object.keys(err).length === 0;
  };


  // const {id}  = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      toast.error("Store ID is missing!", { position: "top-center" });
      return;
    }


    if (!validateForm()) {
        return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("store_name", formData.store_name);
    formDataToSend.append("store_address", formData.store_address);
    formDataToSend.append("street", formData.street);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("state", formData.state);

    if (formData.cac_image) {
        formDataToSend.append("cac_image", formData.cac_image); 
    }

    setIsSubmitting(true);

    try {
        await axios.post(
            `https://django-7u8g.onrender.com/api/stores/store/${id}/`,
            formDataToSend,
            {
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "multipart/form-data", 
                },
            }
        );

        toast.success("Registered successfully!", { position: "top-center" });
        console.log(formDataToSend)
        navigate("/store-dashboard");
    } catch (err) {
        if (err.response && err.response.data) {
            toast.error(JSON.stringify(err.response.data), { position: "top-center" });
        } else {
            toast.error("Error submitting the form. Please try again!", {
                position: "top-center",
            });
        }
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
                name="store_name"
                placeholder="Store Name"
                value={formData.store_name}
                onChange={handleChange}
                required
              />
              {errors.store_name && (
                <p className="text-red-600 text-[15px]">{errors.store_name}</p>
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
              {errors.store_address && (
                <p className="text-red-600 text-[15px]">{errors.store_address}</p>
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


            <div  className="flex items-center justify-start gap-2 text-[#828282] h-[53px] py-[26px] px-[16px]  border-[1px] border-[#969696] outline-none w-full rounded-[8px]">

  {

    preview ?


            (  <div className="max-w-[70px] w-full ">
           

                <img
                  src={preview} 
                  className="w-full h-[40px]  "
                  alt="Preview"
                />

           
                  
              </div>)
:

  (
  <div className="flex">

<label htmlFor="fileInput" className="cursor-pointer flex gap-3 items-center">
      <img src={ preview || defaultImage } alt="add-pics" className="w-[40px] h-[40px] " />
      
      <h1 className="text-[#828282] font-[400] text-[16px] leading-[19px] font-tekInter py-[0.1rem]">
upload your cac image
        </h1>
      </label>

              <input
              id="fileInput"
                  type="file"
                  name="cac_image"
                  accept="image/*"
                  placeholder="Upload your Cac_image"
                  onChange={handleImage}
                  className="hidden"
                />

  

                </div>
  )
}
              {errors.cac_image && (
                <p className="text-red-600 text-[15px]">{errors.cac_image}</p>
              )}
            </div>


            <button
              type="submit"
              className="bg-[#1843E2] rounded-[8px] shadow-btn text-white text-center text-[16px] font-tekInter font-[600] leading-[24px] mt-[28px] py-[10px] px-[18px] flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? <div className="loader"></div> : "Continue"}
            </button>
          </form>

 

        </div>
      </div>
    </div>
  );
};

export default StoreAccount;
