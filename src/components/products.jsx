
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/CartSlice";
import { Link } from "react-router-dom";  
import bag from '../../public/Image/bag.svg';
//import HeroSidebar from "../HeroSidebar"

const Products = () => {
  const settings = {
    dots: false,
    //infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true, // Set to true
    
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //initialSlide: 0,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');

  const filteredProducts = filterKeyword
  ? products.filter((product) =>
      product.name.toLowerCase().includes(filterKeyword.toLowerCase())
    )
  : products;

  console.log('Filter keyword:', filterKeyword);
console.log('Filtered products:', filteredProducts);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get("https://django-7u8g.onrender.com/api/products/list/");
        const res = result.data;
        setProducts(res);
        toast.success("Products fetched successfully!", {
          position: "top-center",
        });
      } catch (err) {
        console.error("Error:", err);
        toast.error("Error fetching the products. Please try again!", {
          position: "top-center",
        });
      }
    };

    getProducts();
  }, []);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    const tempCart = {
      ...product,
      quantity: 1,
      totalPrice: product.unit_price,
    };
    dispatch(addToCart(tempCart));
    dispatch(getCartTotal());
  };

  return (
    <section className="relative left-0 px-4">
      <div className="mx-auto py-6">
        <Slider {...settings}>
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="px-2"
            >
              <div className="bg-white p-4 shadow-md rounded-lg text-center">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image || bag}
                    alt={item.name}
                    className="w-full h-[200px] object-cover rounded-md"
                    onError={(e) => { e.target.src = bag; }}
                  />
                </Link>
                <h1 className="font-[700] text-[20px] leading-[24px]  font-tekInter pt-1">{item.name}</h1>
                <p className="text-[#282828] font-[400] text-[20px] leading-[24px] pb-[1rem] pt-[1rem] font-tekInter">#{item.unit_price}</p>
                <h1 className="text-fifthOrange font-[700] text-[20px] leading-[20px] pt-[1rem] font-tekInter">{item.stock} in stock</h1>
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

