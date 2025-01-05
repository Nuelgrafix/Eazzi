import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetStores = () => {
  const [stores, setStores] = useState([]);


  useEffect(()=> {


  const getStores = async () => {
    try {
      const result = await axios.get("https://django-7u8g.onrender.com/api/stores/storeslist/");

      const res = result.data;
      console.log("Store details", res)
      setStores(res);

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


getStores()

},[])

  return {

    setStores,
    stores,
  };
};

export default useGetStores;
