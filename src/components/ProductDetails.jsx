import { useParams } from "react-router-dom";
import { productdata } from "../data/product";
import heart from "../assets/Heart.png";
import staro from "../assets/Staro.png";
import start from "../assets/Start.png";
import cart from "../assets/cart.png";
import shop from "../assets/shop.png";
import TCircle from "../assets/TCircle.png";
import star from "../assets/str.png";
import location from "../assets/location.png";
import loc from "../assets/loc.png";
import prof from "../assets/prof.png";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productdata.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full gap-7 mt-[80px] lg:mt-7 md:pb-10 px-[20px] md:px-[61px]">
        <div className="mt-[100px] flex flex-col lg:flex-row gap-[32px] w-full items-center justify-center">
          <div className="relative h-[286px] w-[286px]">
            <img
              src={product.pics}
              alt={product.title}
              className="w-full h-[286px] md:h-auto md:w-[286px]"
            />
            <div className="h-[40px] w-[40px] p-[8px] rounded-full bg-[#F9F9F9] absolute top-3 right-6">
              <img src={heart} className="" alt="" />
            </div>
          </div>

          <div className="w-full md:pt-10 lg:pt-0">
            <h1 className="text-[32px] font-[400] font-tekInter text-[#282828]">
              Pink Handbag, Skin Leather with Inner Pocket.
            </h1>
            <p className="text-[16px] text-[#828282] font-[400] font-tekInter mt-[10px]">
              The Pink Handbag is an elegant and versatile accessory crafted
              from premium skin leather. It combines style, functionality, and
              durability, making it a perfect addition...{" "}
              <a href="#moredp" className="text-[#3157E1] font-[700]">
                Read more...
              </a>
            </p>
            <p className="text-[14px] font-tekInter font-[700] mt-[21px] bg-[#FF7F00] text-white py-[5px] pl-[12px]">
              {product.stock}. Buy now before it runs out
            </p>
            <div className="flex gap-2 items-center mt-[10px]">
              <p className="flex items-center text-[32px] text-[#181818] font-[700] mt-[20px]">
                ₦ 19,570
              </p>
              <p
                aria-disabled
                className="flex items-center text-[16px] text-[#828282] font-[400] font-tekInter line-through relative top-[11px]"
              >
                22,399
              </p>
            </div>
            <div className="flex gap-2 pt-1">
              <div className="flex gap-1">
                <img src={staro} className="h-[17px] w-[17px]" alt="" />
                <img src={staro} className="h-[17px] w-[17px]" alt="" />
                <img src={staro} className="h-[17px] w-[17px]" alt="" />
                <img src={start} className="h-[17px] w-[17px]" alt="" />
                <img src={start} className="h-[17px] w-[17px]" alt="" />
              </div>

              <p className="text-[#828282] text-[15px] font-tekInter font-[400]">
                40 buyers rated this product
              </p>
            </div>
            <div className="mt-5 flex flex-col xl:flex-row gap-3">
              <button className="text-white text-[16px] font-[600] font-tekInter py-[10px] px-[18px] bg-[#1843E2] flex items-center justify-center gap-2 rounded-[8px] shadow-loctionShad cursor-pointer">
                <img src={cart} alt="" /> Add this product to cart
              </button>

              <button className="text-[#1843E2] text-[16px] font-[600] font-tekInter py-[10px] px-[18px] border border-[#1843E2] rounded-[8px] cursor-pointer">
                Order now
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[650px] mt-[20px] md:mt-[50px] lg:mt-[90px] rounded-[8px] flex flex-col gap-1">
          <div className="flex p-2 gap-2">
            <img
              src={shop}
              className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]"
              alt=""
            />
            <p className="text-[16px] font-[400] font-tekInter text-[#828282] flex items-center">
              About the store you are shopping from
            </p>
          </div>
          <hr />

          <div className="p-2 shadow-loctionShad">
            <p className="text-[#282828] text-[24px] font-tekInter font-[700]">
              Amed Store
            </p>

            <p className="text-[#828282] text-[16px] font-tekInter">
              Welcome to Ahmed Store, your one-stop destination for quality and
              affordability. Founded with a passion for providing the best
              products and services to our customers, Ahmed Store has grown into
              a beloved shopping destination for families{" "}
              <a href="#moreds" className="text-[#3157E1] font-[700]">
                Read more...
              </a>
            </p>

            <div className="flex gap-2 mt-[24px]">
              <img
                src={location}
                className="p-[8px] h-[40px] bg-[#F9F9F9] border border-[#BDBDBD] rounded-[4px]"
                alt=""
              />
              <p className="text-[16px] text-[#828282] font-tekInter">
                No. 13 Odo-Ota Street, by Ogbomoso, Ajah Lagos
              </p>
            </div>

            <div className="mt-[21px] flex gap-3">
              <div className="flex gap-1">
                <img src={staro} className="h-[19px]" alt="" />
                <p className="text-[16px] text-[#333333] font-tekInter">
                  4.2k (380)
                </p>
              </div>

              <p className="text-[16px] text-[#282828] font-[700] font-tekInter">
                Store Opens: 8am - 5pm
              </p>
            </div>

            <button className="bg-[#FEF3F2] mt-[16px] rounded-[8px] flex gap-2 py-[10px] px-[18px] border border-[#FF7F00] text-[#FF7F00] text-[16px] font-tekInter font-[600]">
              <img src={heart} alt="" /> Save this store
            </button>
          </div>
        </div>
      </div>

      <div
        id="moredp"
        className="bg-[#F9F9F9] flex flex-col lg:flex-row w-full gap-7 mt-[80px] lg:mt-7 pb-20 px-[20px] md:px-[61px]"
      >
        <div className="flex flex-col lg:flex-row w-full mt-[32px] gap-[24px]">
          <div className="flex flex-col gap-5 w-full lg:w-[620px] xl:w-full">
            <div className=" bg-white rounded-[10px] pb-10">
              <div className="flex gap-3 px-6 py-4">
                <img
                  src={TCircle}
                  className="p-[8px] bg-[#5075FF] rounded-[4px]"
                  alt=""
                />

                <p className="text-[#333333] text-[24px] font-tekInter">
                  More Detail about this Product
                </p>
              </div>
              <hr />
              <div className="mt-[24px] px-6">
                <h2 className="text-[#282828] text-[32px] font-tekInter">
                  Pink Handbag, Skin Leather with Inner Pocket.
                </h2>

                <p className="text-[16px] mt-[12px] text-[#4f4f4f] font-tekInter">
                  The Pink Handbag is an elegant and versatile accessory crafted
                  from premium skin leather. It combines style, functionality,
                  and durability, making it a perfect addition to any wardrobe.
                </p>
                <br />

                <p className="text-[16px] font-[700] text-[#4f4f4f] font-tekInter">
                  Material:
                </p>

                <div className="mt-4 ml-3">
                  <li className="text-[16px] font-[700] text-[#4f4f4f] font-tekInter">
                    Exterior:
                  </li>
                  <li className="text-[16px] text-[#4f4f4f] font-tekInter pl-5">
                    Skin Leather: The handbag is made from high-quality skin
                    leather, known for its smooth texture, durability, and
                    luxurious appearance. The leather's natural finish gives it
                    a sophisticated look, suitable for both casual and formal
                    occasions.
                  </li>
                </div>

                <div className="mt-4 ml-3">
                  <li className="text-[16px] font-[700] text-[#4f4f4f] font-tekInter">
                    Interior:
                  </li>
                  <li className="text-[16px] text-[#4f4f4f] font-tekInter pl-5">
                    Lining: The interior is lined with a soft, durable fabric to
                    protect your belongings and enhance the overall structure of
                    the handbag.
                  </li>
                </div>

                <p className="text-[16px] mt-4 font-[700] text-[#4f4f4f] font-tekInter">
                  Color:
                </p>

                <div className="text-[16px] text-[#4f4f4f] font-tekInter ml-3 mt-4">
                  <li className="text-[16px] text-[#4f4f4f] font-tekInter font-[700]">
                    Pink:
                    <span className="font-[400]">
                      {" "}
                      The handbag features a delicate pink hue, exuding
                      femininity and elegance. The color is versatile enough to
                      complement various outfits and styles, from chic to
                      casual.
                    </span>
                  </li>
                </div>

                <p className="text-[16px] mt-5 font-[700] text-[#4f4f4f] font-tekInter">
                  Design and Features:
                </p>

                <div className="mt-4 ml-3">
                  <li className="text-[16px] font-[700] text-[#4f4f4f] font-tekInter">
                    Size:
                    <span className="font-[400]">
                      {" "}
                      The handbag is designed to be compact yet spacious enough
                      to carry essential items. Its dimensions are optimized for
                      daily use, ensuring convenience without compromising
                      style.
                    </span>
                  </li>
                </div>
                <div className="mt-4 ml-3">
                  <li className="text-[16px] font-[700] text-[#4f4f4f] font-tekInter">
                    Inner Pocket:
                    <span className="font-[400]">
                      {" "}
                      An inner pocket is included to help organize smaller items
                      such as keys, cards, or a smartphone. This pocket enhances
                      functionality by providing easy access to essentials.
                    </span>
                  </li>
                </div>
                <div className="mt-4 ml-3">
                  <li className="text-[16px] font-[700] text-[#4f4f4f] font-tekInter">
                    Closure:
                    <span className="font-[400]">
                      {" "}
                      The handbag features a secure closure mechanism, such as a
                      zipper or magnetic snap, to keep your belongings safe and
                      secure.
                    </span>
                  </li>
                </div>
                <div className="mt-4 ml-3">
                  <li className="text-[16px] font-[700] text-[#4f4f4f] font-tekInter">
                    Handles/Straps:
                    <span className="font-[400]">
                      {" "}
                      The handbag is equipped with sturdy handles or an
                      adjustable strap, allowing for comfortable carrying
                      options. The handles/strap are also made from skin
                      leather, ensuring consistency in quality and design.
                    </span>
                  </li>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] pb-10 w-full lg:w-[620px] xl:w-full">
              <div className="flex gap-3 px-6 py-4 items-center">
                <img src={star} className="w-[40px] h-[40px]" alt="" />

                <p className="text-[#333333] text-[24px] font-tekInter">
                  Reviews about this product
                </p>
              </div>
              <hr />

              <p className="text-[#828282] text-[20px] font-tekInter px-6 pt-3">
                Go through Awesome reviews from our Customers
              </p>

              <div className="px-6 mt-[24px] flex flex-col gap-4">
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="moreds"
            className="w-full lg:w-[650px] rounded-[10px] flex flex-col gap-1"
          >
            <div className="flex p-4 gap-2 bg-white rounded-[10px]">
              <img
                src={shop}
                className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]"
                alt=""
              />
              <p className="text-[16px] font-[400] font-tekInter text-[#828282] flex items-center">
                About the store you are shopping from
              </p>
            </div>

            <div className="p-2 shadow-loctionShad bg-white rounded-[10px]">
              <p className="text-[#282828] text-[24px] font-tekInter font-[700]">
                Amed Store
              </p>
              <div className="mt-[21px] flex gap-3">
                <div className="flex gap-1">
                  <img src={staro} className="h-[19px]" alt="" />
                  <p className="text-[16px] text-[#333333] font-tekInter">
                    4.2k (380)
                  </p>
                </div>

                <p className="text-[16px] text-[#1843E2] font-[700] font-tekInter">
                  Store Opens: 8am - 5pm
                </p>
              </div>
              <p className="text-[#828282] text-[16px] font-tekInter">
                Welcome to Ahmed Store, your one-stop destination for quality
                and affordability. Founded with a passion for providing the best
                products and services to our customers, Ahmed Store has grown
                into a beloved shopping destination for families and individuals
                alike. At Ahmed Store, we believe in the power of choice and
                convenience. Our extensive range of products spans across
                various categories including electronics, home appliances,
                fashion, beauty, and groceries. We carefully select each item to
                ensure it meets our high standards of quality, durability, and
                value for money.
              </p>

              <div className="flex gap-2 mt-[24px] items-center">
                <img
                  src={loc}
                  className="h-[40px] w-[40px]"
                  alt=""
                />
                <p className="text-[16px] text-[#828282] font-tekInter">
                  No. 13 Odo-Ota Street, by Ogbomoso, Ajah Lagos <span className="text-[#5075ff]">5km from your Location</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[10px] pb-10 w-full mt-4">
              <div className="flex gap-3 px-6 py-4 items-center">
                <img src={star} className="w-[40px] h-[40px]" alt="" />

                <p className="text-[#333333] text-[24px] font-tekInter">
                  Rating from Store Customers
                </p>
              </div>
              <hr />

              <p className="text-[#828282] text-[20px] font-tekInter px-6 pt-3">
                Go through Awesome rating from our Customers
              </p>

              <div className="px-6 mt-[24px] flex flex-col gap-4">
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
                <div className="border border-[#BDBDBD] rounded-[10px] py-[8px] px-[12px] flex gap-[16px] items-center">
                  <img src={prof} className="w-[40px] h-[40px]" alt="" />

                  <div className="">
                    <p className="text-[16px] text-[#4f4f4f] font-[700] font-tekInter">
                      Adam Cynthia
                    </p>
                    <p className="text-[16px] text-[#4f4f4f] font-tekInter">
                      I so much love this store, because they deliver exactly
                      what i ordered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
