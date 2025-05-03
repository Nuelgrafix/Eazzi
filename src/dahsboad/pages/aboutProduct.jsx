import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileSideDashboard from "../component/mobileSideDashboard";
import SidebarDashboard from "../component/sidebarDashboard";
import whiteedit from "/Image/whiteEdit.svg";
import productStar from "/Image/yellow_star.svg";
import searchIcon from "/Image/search.svg";
import manager from "/Image/manager.svg";
import notification from "/Image/notification.svg";

const AboutProduct = () => {
  const [showSide, setShowSide] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSide = () => {
    setShowSide((prev) => !prev);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://django-7u8g.onrender.com/api/products/${id}/`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div><h1>Item not Found</h1></div>;

  return (
    <section className="flex w-full bg-[#F8F8F8]">
      <div>
        <div
          onClick={handleSide}
          className="flex md:hidden text-[#1843E2] fixed right-[15px] top-[20px] text-[30px] z-[10000] bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]"
          style={{ boxShadow: "0px 8px 32px 0px #3326AE14" }}
        >
          {showSide ? <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>}
        </div>

        <div className={`fixed overflow-y-scroll z-[1000] h-full ${showSide ? "max-w-[214px] w-full bg-[#1843E2]" : "max-w-[214px] w-[0px] bg-[#1843E2]"}`}>
          <MobileSideDashboard />
        </div>
      </div>

      <div className="max-w-[204px] w-full md:flex hidden bg-[#1843E2]">
        <SidebarDashboard />
      </div>

      <div className="flex flex-col md:w-[82%] py-[1rem] md:px-[1rem] px-[0.4rem] w-[100%]">
        <div className="w-full flex items-center justify-between">
          <h1 className="lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Store Product</h1>
          <div className="hidden md:flex gap-[6px] bg-[#FFFFFF] border-[1px] border-[#D0D5DD] rounded-[8px] p-[10px] pr-[14px] pl-[14px]" style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}>
            <img src={searchIcon} alt="search_icon" className="w-[20px] h-[20px]" />
            <input type="text" placeholder="Search" className="outline-none w-full h-full bg-white text-[16px] text-[#667085]" />
          </div>
          <div className="md:flex lg:gap-[12px] hidden">
            <img src={notification} alt="notification" className="w-[24px] h-[24px]" />
            <img src={manager} alt="manager" className="w-[75px] h-[30px]" />
          </div>
        </div>

        {/* About Product */}
        <div className="flex flex-col bg-[#FFFFFF] my-[2rem] p-[32px] gap-[27px] rounded-[16px]" style={{ boxShadow: "0px 8px 32px 0px #3326AE14" }}>
          <h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">About this product</h1>

          <div className="flex w-full max-w-[1141px] rounded-[16px]">
            <div className="flex flex-col pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[24px] max-w-[280px] w-full">
              <div className="bg-[#FFFFFF] flex flex-col gap-[16px] pt-[16px] pr-[12px] pb-[16px] pl-[12px] rounded-[16px]" style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}>
                <img src={product.image} alt="product_pics" className="w-[224px] h-[180px] rounded-[8px]" />
                <ul className="flex gap-[12px] items-center">
                  <li className="text-[#181818] font-[700] text-[20px]">#{product.unit_price}</li>
                  {product.original_price && <li className="text-[#828282] font-[700] text-[16px] line-through">#{product.discount_price}</li>}
                </ul>
                <ul className="flex gap-[12px] items-center">
                  <li className="text-[#4F4F4F] font-[700] text-[14px]">Stock: <span className="text-[#FF7F00] font-[400] text-[20px]">{product.stock}</span></li>
                </ul>
              </div>

              <ul className="flex flex-col gap-[16px]">
                <button className="flex justify-center w-[153px] h-[44px] bg-[#1843E2] border-[1px] border-[#1843E2] rounded-[8px] items-center text-white font-[600]">
                  <h1>Edit Item</h1>
                  <img src={whiteedit} alt="edit-icon" className="w-[25px] h-[20px]" />
                </button>
                <button className="flex justify-center w-[153px] h-[44px] bg-[#FEF3F2] border-[1px] border-[#FF7F00] rounded-[8px] items-center text-[#FF7F00] font-[600]">
                  <h1>Unpublish</h1>
                </button>
              </ul>

              <div className="flex border-b-[2px] border-[#E0E0E0] max-w-[249px] w-[100%] gap-[8px] p-[10px]">
                <img src={productStar} alt="product review" className="w-[25px] h-[20px]" />
                <h1 className="text-[16px] leading-[19px] text-[#4F4F4F]">Product review</h1>
              </div>
              <h1 className="text-[16px] leading-[19px] text-[#4F4F4F]">This product got {product.reviews} reviews.</h1>
            </div>
          </div>

          {/* Product Description Section */}
          <div>
            <h2 className="text-[18px] text-[#333] font-semibold">Description</h2>
            <p className="text-[16px] text-[#4F4F4F] leading-[24px]">
              {product.description ? product.description : "No description available for this product."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
