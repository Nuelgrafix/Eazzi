import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useUploadProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    unit_price: "",
    stock: "",
    image: null,
  });

  const navigate = useNavigate();

  const validateForm = () => {
    const err = {};
    if (!inputs.title.trim()) {
      err.title = "This Field is Required";
    }
    if (!inputs.description.trim()) {
      err.description = "This Field is Required";
    }
    if (!inputs.unit_price.trim()) {
      err.unit_price = "This Field is Required";
    }
    if (!inputs.stock.trim()) {
      err.stock = "This Field is Required";
    }
    if (!inputs.image) {
      err.image = "This Field is Required";
    }

    return Object.keys(err).length === 0;
  };

  const uploadProduct = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields.", {
        position: "top-center",
      });
      return;
    }
    setIsSubmitting(true);


 const formData = new FormData();
  formData.append('name', inputs.title);
  formData.append('description', inputs.description);
  formData.append('unit_price', inputs.unit_price);
  formData.append('stock', inputs.stock);
  formData.append('image', inputs.image);  // Use the image state directly

    // Log formData content
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

  try {
    await axios.post("https://django-7u8g.onrender.com/api/products/upload/", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('Yes')
      toast.success("Product uploaded successfully!", {
        position: "top-center",
      });
      navigate("/product-upload");
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.error, {
          position: "top-center",
        });
      } else {
        toast.error("Error submitting the form. Please try again!", {
          position: "top-center",
        });
      }
    } finally {
      setIsSubmitting(false);
      console.log('Yes again')
    }
  };

  return {
    isSubmitting,
    inputs,
    setInputs,
    uploadProduct,
  };
};

export default useUploadProduct;
