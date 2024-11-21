
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/CartSlice";

const Products = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
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
        const res = await result.data;
        setProducts(res);
        toast.success("Products fetched successfully!", {
          position: "top-center",
        });
      } catch (err) {
        console.error("Error:", err); 
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



  const [qty] = useState(1)
 
  const dispatch = useDispatch()

  const addItemToCart = (product) => {
    const totalPrice = qty * product.unit_price;
    const tempCart = {
      ...product,
      quantity: qty,
      totalPrice,
    };
  
    console.log("Dispatching addToCart with:", tempCart); // Log the dispatched payload
    dispatch(addToCart(tempCart));
    dispatch(getCartTotal());
  };
  



  return (
    <section className="relative left-0">
      {/* first component with slider */}

      {/* mapping through */}
      <div className=" relative mx-auto gap-4 py-[3rem]  ">
        <Slider className="" {...settings}>
          
          {products.map((item) => (
            <div
              key={item.id}
              className=" gap-4 top-0 rounded-[5px] items-center justify-center mx-[2rem]  md:mx-0 border-2  border-transparent "
            >
              <div className="bg-[#fff] px-2 h-[403px] mx-[2rem]  md:w-[220px] w-[100%] rounded-[8px]   p-1">
                <img
                  src={item.image}
                  alt="trending_pics"
                  className="w-[200px] md:w-[300px] h-[220px] "
                />
                <h1 className=" font-[700] text-[20px] leading-[24px]  font-tekInter pt-1">
                  {item.name}
                </h1>
                <p className="text-[#282828] font-[400] text-[20px] leading-[24px] pb-[1rem] pt-[1rem] font-tekInter">
                  #{item.unit_price}
                </p>
                <h1 className="text-fifthOrange font-[700] text-[20px] leading-[20px] pt-[1rem] font-tekInter">
                {item.stock} instock
                </h1>
                <button
                  className="w-[125px] h-[44px] bg-[#F9F5FF] rounded-[8px] hover:bg-mainBlue hover:text-[#fff] hover:translate-x-1
    items-center text-center text-mainBlue text-[16px] mt-[1rem] my-[0.7rem] mb-2"
     onClick={() => { 
      addItemToCart(item);  
    }}
    
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
    </section>
  );
};

export default Products;
