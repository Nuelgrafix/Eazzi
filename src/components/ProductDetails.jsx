import { useParams } from "react-router-dom";
import { productdata } from "../data/product";
import heart from "../assets/Heart.png";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productdata.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="p-[50px] mt-16 flex gap-[32px]">
        <div className="relative w-[226px]">
          <img src={product.pics} alt={product.title} className="w-[226px]" />
          <div className="h-[40px] w-[40px] p-[8px] rounded-full bg-[#F9F9F9] absolute top-3 right-3">
            <img src={heart} className="" alt="" />
          </div>
        </div>

        <div>
        <h1 className="text-[32px] font-[400] font-tekInter text-[#282828]">Pink Handbag, Skin Leather with Inner Pocket.</h1>
        <p className="text-[16px] text-[#828282] font-[400] font-tekInter">The Pink Handbag is an elegant and versatile accessory crafted from premium skin leather. It combines style, functionality, and durability, making it a perfect addition... <Link to="" className="text-[#3157E1] font-[700]">Read more...</Link></p>
        <p className="text-[14px] font-tekInter font-[700] mt-[21px] bg-[#FF7F00] text-white py-[5px] pl-[12px]">10 item in Stock. Buy now before it runs out</p>
        <div className="flex gap-2 items-center">
        <p className="flex items-center text-[32px] text-[#181818] font-[700] mt-[20px]">₦ 19,570</p>
        <p aria-disabled className="flex items-center text-[16px] text-[#828282] font-[400] font-tekInter line-through relative top-[11px]">22,399</p>
        </div>
        <span>{product.stock}</span>
        <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
