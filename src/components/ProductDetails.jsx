import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import heart from "../assets/Heart.png";
import staro from "../assets/Staro.png";
import cart from "../assets/cart.png";
import shop from "../assets/shop.png";
import TCircle from "../assets/TCircle.png";
import location from "../assets/location.png";
import Products from "./products";
import SecondAds from "./secondAds";
import Newsletter from "./newsletter";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, getCartTotal } from "../redux/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [store, setStore] = useState(null);
  const [storeProducts, setStoreProducts] = useState([]); // Added state for store products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productResponse = await axios.get(
          `https://django-7u8g.onrender.com/api/products/${id}`
        );
        setProduct(productResponse.data);

        const storeResponse = await axios.get(
          `https://django-7u8g.onrender.com/api/stores/storeslist/${productResponse.data.vendor}`
        );
        setStore(storeResponse.data);

        const storeProductsResponse = await axios.get(
          `https://django-7u8g.onrender.com/api/products/stores/${productResponse.data.vendor}/products/`
        );
        setStoreProducts(storeProductsResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const [qty] = useState(1)
 
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full gap-7 mt-[80px] lg:mt-7 md:pb-10 px-[20px] md:px-[61px]">
        <div className="mt-[100px] flex flex-col lg:flex-row gap-[32px] w-full items-center justify-center">
          <div className="relative h-[286px] w-[286px]">
            <img src={product.image} alt={product.title} className="w-full h-[286px] md:h-auto md:w-[286px]" />
            <div className="h-[40px] w-[40px] p-[8px] rounded-full bg-[#F9F9F9] absolute top-3 right-6">
              <img src={heart} alt="" />
            </div>
          </div>

          <div className="w-full md:pt-10 lg:pt-0">
            <h1 className="text-[32px] font-[400] font-tekInter text-[#282828]">{product.name}</h1>
            <p className="text-[16px] text-[#828282] font-[400] font-tekInter mt-[10px]">{product.description}</p>
            <p className="text-[14px] font-tekInter font-[700] mt-[21px] bg-[#FF7F00] text-white py-[5px] pl-[12px]">
              {product.stock} available. Buy now before it runs out!
            </p>
            <div className="flex gap-2 items-center mt-[10px]">
              <p className="flex items-center text-[32px] text-[#181818] font-[700] mt-[20px]">₦ {product.unit_price}</p>
              {product.discount_price && (
                <p aria-disabled className="flex items-center text-[16px] text-[#828282] font-[400] font-tekInter line-through relative top-[11px]">
                  ₦ {product.discount_price}
                </p>
              )}
            </div>

            <div className="mt-5 flex flex-col xl:flex-row gap-3">
              <button className="text-white text-[16px] font-[600] font-tekInter py-[10px] px-[18px] bg-[#1843E2] flex items-center justify-center gap-2 rounded-[8px] shadow-loctionShad cursor-pointer"
               onClick={() => { 
                addItemToCart(product);  
              }}>
                <img src={cart} alt="" /> Add to Cart
              </button>

              <button className="text-[#1843E2] text-[16px] font-[600] font-tekInter py-[10px] px-[18px] border border-[#1843E2] rounded-[8px] cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[650px] mt-[20px] md:mt-[50px] lg:mt-[90px] rounded-[8px] flex flex-col gap-1">
          <div className="flex p-2 gap-2">
            <img src={shop} className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]" alt="" />
            <p className="text-[16px] font-[400] font-tekInter text-[#828282] flex items-center">About the store</p>
          </div>
          <hr />

          <div className="p-2 shadow-loctionShad">
            <p className="text-[#282828] text-[24px] font-tekInter font-[700]">{store?.store_name || "Unknown Store"}</p>
            <p className="text-[#828282] text-[16px] font-tekInter">{store?.about_store || "No store description available."}</p>

            <div className="flex gap-2 mt-[24px]">
              <img src={location} className="p-[8px] h-[40px] bg-[#F9F9F9] border border-[#BDBDBD] rounded-[4px]" alt="" />
              <p className="text-[16px] text-[#828282] font-tekInter">{store?.address || "No address provided"}</p>
            </div>

            <div className="mt-[21px] flex gap-3">
              <div className="flex gap-1">
                <img src={staro} className="h-[19px]" alt="" />
                <p className="text-[16px] text-[#333333] font-tekInter">
                  {store?.ratings || "No ratings"} ({store?.reviews || 0} reviews)
                </p>
              </div>

              <p className="text-[16px] text-[#282828] font-[700] font-tekInter">
                Store Opens: {store?.working_hours || "N/A"}
              </p>
            </div>

            <button className="bg-[#FEF3F2] mt-[16px] rounded-[8px] flex gap-2 py-[10px] px-[18px] border border-[#FF7F00] text-[#FF7F00] text-[16px] font-tekInter font-[600]">
            
              <img src={heart} alt="" /> Save this store
            </button>
          </div>
        </div>
      </div>

      {/*<Products />*/}

      {/* Store Products Section */}
      <div className="mt-[3rem]">
        <div className="max-w-[100%] flex justify-between items-center h-[73px] bg-mainBlue border-b-4 border-secondOrange px-[0.5rem]">
          <h1 className="text-[#fff] font-[400] text-[18px] font-tekInter">
            Available in this Store
          </h1>
          <Link
            to="/otherstores"
            className="text-[#fff] font-[600] text-[16px] flex gap-2 font-tekInter"
          >
            View all stores <i className="ri-arrow-right-s-line text-[#fff] text-[16px]"></i>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {storeProducts.length > 0 ? (
            storeProducts.map((item) => (
              <div key={item.id} className="bg-white shadow-md rounded-md p-4">
          <Link to={`/product/${item.id}`}>
            <div className="h-[250px] w-full rounded-md overflow-hidden">
              <img 
                src={item.image || "default-image.png"} 
                alt="product" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="mt-3">
              <h1 className="text-lg font-bold text-gray-900 truncate">{item.name}</h1>
              <p className="text-gray-800 text-md py-1">₦{item.unit_price || "No Price"}</p>
              <span className={`font-bold ${item.stock ? "text-green-600" : "text-red-500"}`}>
                {item.stock ? `${item.stock} in stock` : "Out of stock"}
              </span>
            </div>
          </Link>
          <button className="w-full bg-[#F9F5FF] border border-[#1843E2] rounded-md mt-3 py-2 text-[#1843E2] font-semibold flex justify-center items-center gap-2"
          onClick={() => { 
            addItemToCart(item);  
          }}>
            Add to cart
          </button>
        </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      <SecondAds />
      <Newsletter />
    </div>
  );
};

export default ProductDetails;
