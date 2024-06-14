import logo from "../../public/Image/logo.png";
import facebook from "../../public/Image/bi_facebook.svg";
import twitter from "../../public/Image/Vector.svg";
import instagram from "../../public/Image/bi_instagram.svg";
import linkdin from "../../public/Image/bi_linkedin.svg";

const Footer = () => {
  return (
    <section className="flex-col w-[100%]">
      <div className="flex md:flex-row flex-col justify-between bg-mainBlue md:p-[2rem] pl-[1rem] p-[1rem]">
        {/* logo */}
        <div className="flex-col pt-[2rem]">
          <img src={logo} alt="logo_image" />

          <ul className="flex bottom-0 pt-[7rem] gap-2">
            <li>
              <img src={twitter} alt="facebook" className="w-[27px] h-[25px]" />
            </li>
            <li>
              <img
                src={instagram}
                alt="facebook"
                className="w-[27px] h-[25px]"
              />
            </li>
            <li>
              <img
                src={facebook}
                alt="facebook"
                className="w-[27px] h-[25px]"
              />
            </li>
            <li>
              <img src={linkdin} alt="facebook" className="w-[27px] h-[25px]" />
            </li>
          </ul>
        </div>

        <div className="flex-col items-start justify-start pt-[2rem]">
          <h1 className="text-[#fff] text-[26px] font-[700] leaing-[20px]">
            Company
          </h1>
          <ul className="flex-col  pt-[0.5rem]">
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              About us
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Blog
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Join our team
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Press media
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Contact us
            </li>
          </ul>
        </div>

        <div className="flex-col items-start justify-start pt-[2rem]">
          <h1 className="text-[#fff] text-[20px] font-[700] leaing-[20px]">
            Resources
          </h1>

          <ul className="flex-col pt-[0.5rem]">
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Privacy policy
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Terms and condition
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              FAQs
            </li>
          </ul>
        </div>

        <div className="flex-col items-start justify-start pt-[2rem]">
          <h1 className="text-[#fff] text-[20px] font-[700] leaing-[20px]">
            Resources
          </h1>

          <ul className="flex-col pt-[0.5rem]">
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Privacy policy
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              Terms and condition
            </li>
            <li className="text-[#fff] text-[16px] font-[400]  leading-[20px] pt-2">
              FAQs
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-fourthOrange text-center justify-center items-center flex w-[100%] h-[52px]">
        <h1 className="flex gap-3 text-center items-center ">
          <i className="ri-copyright-line  text-[20px]"></i>2024 Eazzi
        </h1>
      </div>
    </section>
  );
};

export default Footer;
