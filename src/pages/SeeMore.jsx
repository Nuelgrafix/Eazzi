
import heart from "../assets/Heart.png";
import location from "../assets/location.png";
import arr from "../assets/arr.png";
import staro from "../assets/Staro.png";
import star from "../assets/str.png";
import starl from "../assets/starl.png";
import prof from "../assets/prof.png";
import prod from "../assets/prod.png";
import proda from "../assets/proda.png";
import prodb from "../assets/prodb.png";
import prodc from "../assets/prodc.png";
import { Link } from "react-router-dom";
import Newsletter from "../components/newsletter";
import SecondAds from "../components/secondAds";

const SeeMore = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full h-full gap-7 mt-[80px] lg:mt-7 md:pb-10 md:px-[41px] bg-[#F9F9F9]">
        <div className="lg:w-[520px] mt-[65px] md:mt-[80px] lg:mt-[90px] rounded-[8px] flex flex-col gap-1 bg-[#fff]">
          <div className="flex p-5 gap-2">
            <img
              src={arr}
              className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]"
              alt=""
            />
            <div className="flex gap-1 items-center">
              <Link
                to={"/"}
                className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282] cursor-pointer"
              >
                Home{" >"}
              </Link>
              <p className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282]">
                Newest Product
              </p>
            </div>
          </div>
          <hr />

          <div className="p-5 shadow-loctionShad">
            <p className="text-[#282828] text-[24px] font-tekInter font-[700]">
              Amed Store
            </p>

            <p className="text-[#828282] text-[16px] font-tekInter hidden md:block">
              Welcome to Ahmed Store, your one-stop destination for quality and
              affordability. Founded with a passion for providing the best
              products and services to our customers, Ahmed Store has grown into
              a beloved shopping destination for families.
            </p>

            <div className="flex gap-2 mt-[24px]">
              <img
                src={location}
                className="p-[8px] h-[40px] bg-[#F9F9F9] border border-[#BDBDBD] rounded-[4px]"
                alt=""
              />
              <p className="text-[16px] text-[#828282] font-tekInter leading-5">
                No. 13 Odo-Ota Street, by Ogbomoso, Ajah Lagos
              </p>
            </div>

            <div className="mt-[21px] flex gap-3">
              <div className="flex gap-1">
                <img src={staro} className="h-[19px]" alt="" />
                <p className="text-[14px] md:text-[16px] text-[#333333] font-tekInter">
                  4.2k (380)
                </p>
              </div>

              <p className="text-[14px] md:text-[16px] text-[#282828] font-[700] font-tekInter">
                Store Opens: 8am - 5pm
              </p>
            </div>

            <button className="text-white bg-[#1843E2] flex gap-[8px] text-[16px] font-[600] font-tekInter py-[10px] px-[18px] border border-[#1843E2] mt-5 rounded-[8px] cursor-pointer">
              <img src={arr} className="rotate-90" alt="" /> Enter this store
            </button>

            <button className="bg-[#FEF3F2] mt-[16px] rounded-[8px] flex gap-2 py-[10px] px-[18px] border border-[#FF7F00] text-[#FF7F00] text-[16px] font-tekInter font-[600]">
              <img src={heart} alt="" /> Save this store
            </button>
          </div>

          <div className="bg-white rounded-[10px] -mt-2 pt-5 hidden md:block pb-6">
            <div className="flex gap-3 px-6 py-4 items-center">
              <img src={star} className="w-[40px] h-[40px]" alt="" />

              <p className="text-[#333333] text-[24px] font-tekInter">
                Store Rating
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
                  </p>
                </div>
              </div>

              <button className="py-[10px] px-[18px] font-tekInter font-[600] text-[16px] text-[#FF7F00] flex gap-[8px] border border-[#FF7F00] bg-[#FEF3F2] w-[200px] rounded-[8px] mt-[32px]">
                <img src={starl} alt="" />
                Rate this store
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:items-start lg:justify-center md:mt-[1px] lg:mt-[69px] w-full h-full md:gap-2 bg-white md:bg-transparent">
          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-[30px]">
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full gap-7 mt-[-80px] lg:-mt-32 md:px-[41px] bg-[#F9F9F9]">
        <div className="lg:w-[520px] mt-[65px] md:mt-[80px] lg:mt-[90px] rounded-[8px] flex flex-col gap-1 bg-[#fff]">
          <div className="flex p-5 gap-2">
            <img
              src={arr}
              className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]"
              alt=""
            />
            <div className="flex gap-1 items-center">
              <Link
                to={"/"}
                className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282] cursor-pointer"
              >
                Home{" >"}
              </Link>
              <p className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282]">
                Newest Product
              </p>
            </div>
          </div>
          <hr />

          <div className="p-5 shadow-loctionShad">
            <p className="text-[#282828] text-[24px] font-tekInter font-[700]">
              Ben Store
            </p>

            <p className="text-[#828282] text-[16px] font-tekInter hidden md:block">
              Welcome to Ben Store, your one-stop destination for quality and
              affordability. Founded with a passion for providing the best
              products and services to our customers, Ahmed Store has grown into
              a beloved shopping destination for families.
            </p>

            <div className="flex gap-2 mt-[24px]">
              <img
                src={location}
                className="p-[8px] h-[40px] bg-[#F9F9F9] border border-[#BDBDBD] rounded-[4px]"
                alt=""
              />
              <p className="text-[16px] text-[#828282] font-tekInter leading-5">
                No. 13 Odo-Ota Street, by Ogbomoso, Ajah Lagos
              </p>
            </div>

            <div className="mt-[21px] flex gap-3">
              <div className="flex gap-1">
                <img src={staro} className="h-[19px]" alt="" />
                <p className="text-[14px] md:text-[16px] text-[#333333] font-tekInter">
                  4.2k (380)
                </p>
              </div>

              <p className="text-[14px] md:text-[16px] text-[#282828] font-[700] font-tekInter">
                Store Opens: 8am - 5pm
              </p>
            </div>

            <button className="text-white bg-[#1843E2] flex gap-[8px] text-[16px] font-[600] font-tekInter py-[10px] px-[18px] border border-[#1843E2] mt-5 rounded-[8px] cursor-pointer">
              <img src={arr} className="rotate-90" alt="" /> Enter this store
            </button>

            <button className="bg-[#FEF3F2] mt-[16px] rounded-[8px] flex gap-2 py-[10px] px-[18px] border border-[#FF7F00] text-[#FF7F00] text-[16px] font-tekInter font-[600]">
              <img src={heart} alt="" /> Save this store
            </button>
          </div>

          <div className="bg-white rounded-[10px] -mt-2 pt-5 hidden md:block pb-6">
            <div className="flex gap-3 px-6 py-4 items-center">
              <img src={star} className="w-[40px] h-[40px]" alt="" />

              <p className="text-[#333333] text-[24px] font-tekInter">
                Store Rating
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
                  </p>
                </div>
              </div>

              <button className="py-[10px] px-[18px] font-tekInter font-[600] text-[16px] text-[#FF7F00] flex gap-[8px] border border-[#FF7F00] bg-[#FEF3F2] w-[200px] rounded-[8px] mt-[32px]">
                <img src={starl} alt="" />
                Rate this store
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:items-start lg:justify-center md:mt-[1px] lg:mt-[69px] w-full h-full md:gap-2 bg-white md:bg-transparent">
          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-[30px]">
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full gap-7 mt-[-80px] lg:-mt-32 md:px-[41px] bg-[#F9F9F9]">
        <div className="lg:w-[520px] mt-[65px] md:mt-[80px] lg:mt-[90px] rounded-[8px] flex flex-col gap-1 bg-[#fff]">
          <div className="flex p-5 gap-2">
            <img
              src={arr}
              className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]"
              alt=""
            />
            <div className="flex gap-1 items-center">
              <Link
                to={"/"}
                className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282] cursor-pointer"
              >
                Home{" >"}
              </Link>
              <p className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282]">
                Newest Product
              </p>
            </div>
          </div>
          <hr />

          <div className="p-5 shadow-loctionShad">
            <p className="text-[#282828] text-[24px] font-tekInter font-[700]">
              Ben Store
            </p>

            <p className="text-[#828282] text-[16px] font-tekInter hidden md:block">
              Welcome to Ben Store, your one-stop destination for quality and
              affordability. Founded with a passion for providing the best
              products and services to our customers, Ahmed Store has grown into
              a beloved shopping destination for families.
            </p>

            <div className="flex gap-2 mt-[24px]">
              <img
                src={location}
                className="p-[8px] h-[40px] bg-[#F9F9F9] border border-[#BDBDBD] rounded-[4px]"
                alt=""
              />
              <p className="text-[16px] text-[#828282] font-tekInter leading-5">
                No. 13 Odo-Ota Street, by Ogbomoso, Ajah Lagos
              </p>
            </div>

            <div className="mt-[21px] flex gap-3">
              <div className="flex gap-1">
                <img src={staro} className="h-[19px]" alt="" />
                <p className="text-[14px] md:text-[16px] text-[#333333] font-tekInter">
                  4.2k (380)
                </p>
              </div>

              <p className="text-[14px] md:text-[16px] text-[#282828] font-[700] font-tekInter">
                Store Opens: 8am - 5pm
              </p>
            </div>

            <button className="text-white bg-[#1843E2] flex gap-[8px] text-[16px] font-[600] font-tekInter py-[10px] px-[18px] border border-[#1843E2] mt-5 rounded-[8px] cursor-pointer">
              <img src={arr} className="rotate-90" alt="" /> Enter this store
            </button>

            <button className="bg-[#FEF3F2] mt-[16px] rounded-[8px] flex gap-2 py-[10px] px-[18px] border border-[#FF7F00] text-[#FF7F00] text-[16px] font-tekInter font-[600]">
              <img src={heart} alt="" /> Save this store
            </button>
          </div>

          <div className="bg-white rounded-[10px] -mt-2 pt-5 hidden md:block pb-6">
            <div className="flex gap-3 px-6 py-4 items-center">
              <img src={star} className="w-[40px] h-[40px]" alt="" />

              <p className="text-[#333333] text-[24px] font-tekInter">
                Store Rating
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
                  </p>
                </div>
              </div>

              <button className="py-[10px] px-[18px] font-tekInter font-[600] text-[16px] text-[#FF7F00] flex gap-[8px] border border-[#FF7F00] bg-[#FEF3F2] w-[200px] rounded-[8px] mt-[32px]">
                <img src={starl} alt="" />
                Rate this store
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:items-start lg:justify-center md:mt-[1px] lg:mt-[69px] w-full h-full md:gap-2 bg-white md:bg-transparent">
          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-[30px]">
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full gap-7 mt-[-80px] lg:-mt-32 md:px-[41px] bg-[#F9F9F9]">
        <div className="lg:w-[520px] mt-[65px] md:mt-[80px] lg:mt-[90px] rounded-[8px] flex flex-col gap-1 bg-[#fff]">
          <div className="flex p-5 gap-2">
            <img
              src={arr}
              className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]"
              alt=""
            />
            <div className="flex gap-1 items-center">
              <Link
                to={"/"}
                className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282] cursor-pointer"
              >
                Home{" >"}
              </Link>
              <p className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282]">
                Newest Product
              </p>
            </div>
          </div>
          <hr />

          <div className="p-5 shadow-loctionShad">
            <p className="text-[#282828] text-[24px] font-tekInter font-[700]">
              Ben Store
            </p>

            <p className="text-[#828282] text-[16px] font-tekInter hidden md:block">
              Welcome to Ben Store, your one-stop destination for quality and
              affordability. Founded with a passion for providing the best
              products and services to our customers, Ahmed Store has grown into
              a beloved shopping destination for families.
            </p>

            <div className="flex gap-2 mt-[24px]">
              <img
                src={location}
                className="p-[8px] h-[40px] bg-[#F9F9F9] border border-[#BDBDBD] rounded-[4px]"
                alt=""
              />
              <p className="text-[16px] text-[#828282] font-tekInter leading-5">
                No. 13 Odo-Ota Street, by Ogbomoso, Ajah Lagos
              </p>
            </div>

            <div className="mt-[21px] flex gap-3">
              <div className="flex gap-1">
                <img src={staro} className="h-[19px]" alt="" />
                <p className="text-[14px] md:text-[16px] text-[#333333] font-tekInter">
                  4.2k (380)
                </p>
              </div>

              <p className="text-[14px] md:text-[16px] text-[#282828] font-[700] font-tekInter">
                Store Opens: 8am - 5pm
              </p>
            </div>

            <button className="text-white bg-[#1843E2] flex gap-[8px] text-[16px] font-[600] font-tekInter py-[10px] px-[18px] border border-[#1843E2] mt-5 rounded-[8px] cursor-pointer">
              <img src={arr} className="rotate-90" alt="" /> Enter this store
            </button>

            <button className="bg-[#FEF3F2] mt-[16px] rounded-[8px] flex gap-2 py-[10px] px-[18px] border border-[#FF7F00] text-[#FF7F00] text-[16px] font-tekInter font-[600]">
              <img src={heart} alt="" /> Save this store
            </button>
          </div>

          <div className="bg-white rounded-[10px] -mt-2 pt-5 hidden md:block pb-6">
            <div className="flex gap-3 px-6 py-4 items-center">
              <img src={star} className="w-[40px] h-[40px]" alt="" />

              <p className="text-[#333333] text-[24px] font-tekInter">
                Store Rating
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
                  </p>
                </div>
              </div>

              <button className="py-[10px] px-[18px] font-tekInter font-[600] text-[16px] text-[#FF7F00] flex gap-[8px] border border-[#FF7F00] bg-[#FEF3F2] w-[200px] rounded-[8px] mt-[32px]">
                <img src={starl} alt="" />
                Rate this store
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:items-start lg:justify-center md:mt-[1px] lg:mt-[69px] w-full h-full md:gap-2 bg-white md:bg-transparent">
          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-[30px]">
      </div>

      <div className="flex flex-col lg:flex-row w-full h-full gap-7 mt-[-80px] lg:-mt-32 md:px-[41px] bg-[#F9F9F9] pb-10">
        <div className="lg:w-[520px] mt-[65px] md:mt-[80px] lg:mt-[90px] rounded-[8px] flex flex-col gap-1 bg-[#fff]">
          <div className="flex p-5 gap-2">
            <img
              src={arr}
              className="p-[4px] h-[35px] bg-[#5075FF] rounded-[4px]"
              alt=""
            />
            <div className="flex gap-1 items-center">
              <Link
                to={"/"}
                className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282] cursor-pointer"
              >
                Home{" >"}
              </Link>
              <p className="text-[16px] md:text-[20px] font-[400] font-tekInter text-[#828282]">
                Newest Product
              </p>
            </div>
          </div>
          <hr />

          <div className="p-5 shadow-loctionShad">
            <p className="text-[#282828] text-[24px] font-tekInter font-[700]">
              Ben Store
            </p>

            <p className="text-[#828282] text-[16px] font-tekInter hidden md:block">
              Welcome to Ben Store, your one-stop destination for quality and
              affordability. Founded with a passion for providing the best
              products and services to our customers, Ahmed Store has grown into
              a beloved shopping destination for families.
            </p>

            <div className="flex gap-2 mt-[24px]">
              <img
                src={location}
                className="p-[8px] h-[40px] bg-[#F9F9F9] border border-[#BDBDBD] rounded-[4px]"
                alt=""
              />
              <p className="text-[16px] text-[#828282] font-tekInter leading-5">
                No. 13 Odo-Ota Street, by Ogbomoso, Ajah Lagos
              </p>
            </div>

            <div className="mt-[21px] flex gap-3">
              <div className="flex gap-1">
                <img src={staro} className="h-[19px]" alt="" />
                <p className="text-[14px] md:text-[16px] text-[#333333] font-tekInter">
                  4.2k (380)
                </p>
              </div>

              <p className="text-[14px] md:text-[16px] text-[#282828] font-[700] font-tekInter">
                Store Opens: 8am - 5pm
              </p>
            </div>

            <button className="text-white bg-[#1843E2] flex gap-[8px] text-[16px] font-[600] font-tekInter py-[10px] px-[18px] border border-[#1843E2] mt-5 rounded-[8px] cursor-pointer">
              <img src={arr} className="rotate-90" alt="" /> Enter this store
            </button>

            <button className="bg-[#FEF3F2] mt-[16px] rounded-[8px] flex gap-2 py-[10px] px-[18px] border border-[#FF7F00] text-[#FF7F00] text-[16px] font-tekInter font-[600]">
              <img src={heart} alt="" /> Save this store
            </button>
          </div>

          <div className="bg-white rounded-[10px] -mt-2 pt-5 hidden md:block pb-6">
            <div className="flex gap-3 px-6 py-4 items-center">
              <img src={star} className="w-[40px] h-[40px]" alt="" />

              <p className="text-[#333333] text-[24px] font-tekInter">
                Store Rating
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
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
                    I so much love this store, because they deliver exactly what
                    i ordered.
                  </p>
                </div>
              </div>

              <button className="py-[10px] px-[18px] font-tekInter font-[600] text-[16px] text-[#FF7F00] flex gap-[8px] border border-[#FF7F00] bg-[#FEF3F2] w-[200px] rounded-[8px] mt-[32px]">
                <img src={starl} alt="" />
                Rate this store
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:items-start lg:justify-center md:mt-[1px] lg:mt-[69px] w-full h-full md:gap-2 bg-white md:bg-transparent">
          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodc}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={proda}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prod}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>

          <div className="bg-white md:none w-[123px] h-[255px] lg:w-[202px] lg:h-[380px] p-[8px] mt-5 rounded-[8px]">
            <img
              src={prodb}
              className="lg:w-[203px] lg:h-[203px] rounded-[8px]"
              alt=""
            />

            <div className="mt-[12px] flex flex-col">
              <p className="text-[#000] text-[14px] lg:text-[20px] font-tekInter font-[700]">
                Product name
              </p>

              <p className="text-[#282828] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                ₦2570
              </p>

              <p className="text-[#FF8F21] text-[14px] lg:text-[20px] font-tekInter font-[400]">
                40 instock
              </p>

              <button className="bg-[#F9F5FF] py-[8px] md:py-[10px] px-[14px] lg:px-[18px] text-[#1843E2] mt-1 rounded-[8px] w-[106px] lg:w-[145px] text-[14px] lg:text-[20px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <>
        <SecondAds />
        <Newsletter />
      </>
    </div>
  );
};

export default SeeMore;
