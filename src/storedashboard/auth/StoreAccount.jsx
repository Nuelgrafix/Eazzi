import { useState, useEffect } from "react";
import sign from "../../assets/signup.png";
import logo from "../../assets/eazzi_logo.svg";
import defaultImage from "../../../public/Image/artboard.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const StoreAccount = () => {
  const [formData, setFormData] = useState({
    store_name: "",
    store_address: "",
    street: "",
    city: "",
    state: "",
    cac_image: "",
    working_hours: "",
    about_store: ""
  });

  const navigate = useNavigate();
  const { token, setStoreId } = useAuthContext();
  const { id } = useParams();
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log("setStoreId:", setStoreId); // Debugging
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData((prevState) => ({
        ...prevState,
        cac_image: file
      }));
      setPreview(URL.createObjectURL(file));
    } else {
      alert("File size exceeds 5MB");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const err = {};
    ["store_name", "store_address", "street", "city", "state", "working_hours"].forEach(field => {
      if (!formData[field].trim()) err[field] = "This Field Required";
    });
    setErrors(err);
    return Object.keys(err).length === 0;
  };

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
    Object.entries(formData).forEach(([key, value]) => {
      if (value) formDataToSend.append(key, value);
    });

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `https://django-7u8g.onrender.com/api/stores/store/${id}/`,
        formDataToSend,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (response.data?.store_id) {
        if (typeof setStoreId === "function") {
          setStoreId(response.data.store_id);
        } else {
          console.error("setStoreId is not a function.");
          toast.error("Failed to update store ID.");
        }
        localStorage.setItem("storeId", response.data.store_id);
      } else {
        console.error("Store ID not found in response:", response.data);
        toast.error("Failed to retrieve store ID.");
      }

      toast.success("Registered successfully!", { position: "top-center" });
      navigate("/store-dashboard");
    } catch (err) {
      console.error("API Error:", err);
      if (err.response) {
        toast.error(`Error: ${JSON.stringify(err.response.data)}`, { position: "top-center" });
      } else {
        toast.error("Request failed. Please check your internet connection.", { position: "top-center" });
      }
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="text-xl font-tekInter text-[#4F4F4F]  font-[400] px-3 ">
            Please kindly provide the store information here
          </p>
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
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
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
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
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
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
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
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px] relative"
                name="working_hours"
                placeholder="Working Hours"
                value={formData.working_hours}
                onChange={handleChange}
                required
              />
              {errors.working_hours && (
                <p className="text-red-600 text-[15px]">{errors.working_hours}</p>
              )}
            </div>

            <div className="flex items-center justify-start gap-2 text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]">
              {preview ? (
                <div className="max-w-[70px] w-full ">
                  <img src={preview} className="w-full h-[40px]" alt="Preview" />
                </div>
              ) : (
                <div className="flex">
                  <label htmlFor="fileInput" className="cursor-pointer flex gap-3 items-center">
                    <img src={preview || defaultImage} alt="add-pics" className="w-[40px] h-[40px]" />
                    <h1 className="text-[#828282] font-[400] text-[16px] leading-[19px] font-tekInter py-[0.1rem]">
                      Upload your cac image
                    </h1>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    name="cac_image"
                    className="hidden"
                    onChange={handleImage}
                    accept="image/*"
                  />
                </div>
              )}
            </div>

            <div>
              <textarea
                name="about_store"
                value={formData.about_store}
                onChange={handleChange}
                placeholder="About Store"
                className="text-[#828282] h-[53px] py-[26px] px-[16px] border-[1px] border-[#969696] outline-none w-full rounded-[8px]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1843E2] py-[10px] rounded-[10px] text-white text-[16px] w-full mt-[16px] flex justify-center items-center disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StoreAccount;
