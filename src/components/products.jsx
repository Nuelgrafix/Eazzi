import { productdata } from "../data/product";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };



  const [products, setProducts] = useState([]);

  useEffect(()=>  {
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

    getProducts()
  }, [])

  return (
    <section className="">
      {/* first component with slider */}

      {/* mapping through */}
      <div className="md:hidden relative mx-auto gap-4 py-[3rem] b ">
        <Slider {...settings}>
          {productdata.map((item) => (
            <div
              key={item.id}
              className=" gap-4 top-0 rounded-[5px] items-center justify-center mx-[2rem] border-2  border-transparent"
            >
              <div className="bg-[#fff] px-2 h-[403px] mx-[2rem]  md:w-[220px] w-[100%] rounded-[8px]   p-1">
                <img
                  src={item.pics}
                  alt="trending_pics"
                  className="w-[200px] md:w-[300px] h-[220px] "
                />
                <h1 className=" font-[700] text-[20px] leading-[24px]  font-tekInter pt-1">
                  {item.title}
                </h1>
                <p className="text-[#282828] font-[400] text-[20px] leading-[24px] pb-[1rem] pt-[1rem] font-tekInter">
                  {item.price}
                </p>
                <span className="text-fifthOrange font-[700] text-[20px] leading-[20px] pt-[1rem] font-tekInter">
                  {item.stock}
                </span>
                <button
                  className="w-[125px] h-[44px] bg-[#F9F5FF] rounded-[8px] hover:bg-mainBlue hover:text-[#fff] hover:translate-x-1
    items-center text-center text-mainBlue text-[16px] mt-[1rem]"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* second component without slider */}

      <div className="md:grid lg:grid-cols-6 hidden w-[100%] grid-cols-1 md:grid-cols-3 relative mx-auto gap-4 py-[3rem]">
        {products.map((item) => (
          <div
            key={item.id}
            className="gap-3   mx-2 top-0 rounded-[5px] w-[223px]  items-center justify-center"
          >
            <Link to={`/product/${item.id}`}>
            <div className="bg-[#fff] px-2 h-[403px] mr-[2rem]  md:w-[220px] w-[200px] rounded-[8px] ">
              <img
                src={item.pics}
                alt="trending_pics"
                className="w-[200px] h-[220px] "
              />
              <h1 className=" font-[700] text-[20px] leading-[24px]  font-tekInter pt-1">
                {item.title}
              </h1>
              <p className="text-[#282828] font-[400] text-[20px] leading-[24px] pb-[1rem] pt-[1rem] font-tekInter">
                {item.price}
              </p>
              <span className="text-fifthOrange font-[700] text-[20px] leading-[20px] pt-[1rem] font-tekInter">
                {item.stock}
              </span>
              <button
                className="w-[125px] h-[44px] bg-[#F9F5FF] rounded-[8px] hover:bg-mainBlue hover:text-[#fff] hover:transform-x-[10px]
    items-center text-center text-mainBlue text-[16px] mt-[1rem]"
              >
                Add to cart
              </button>
            </div>
            </Link>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Products;
