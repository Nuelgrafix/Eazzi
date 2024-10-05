import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const result = await axios.get("https://django-7u8g.onrender.com/api/products/list/");
      console.log("API Response:", result); // Debugging line
      const res = result.data;
      console.log("Data:", res); // Debugging line
      setProducts(res);

      toast.success("Products fetched successfully!", {
        position: "top-center",
      });
    } catch (err) {
      console.error("Error:", err); // Debugging line
      if (err.response && err.response.data) {
        toast.error(err.response.data.error, {
          position: "top-center",
        });
      } else {
        toast.error("Error fetching the products. Please try again!", {
          position: "top-center",
        });
      }
    }
  };

  return {
    getProducts,
    setProducts,
    products,
  };
};

export default useGetProducts;
