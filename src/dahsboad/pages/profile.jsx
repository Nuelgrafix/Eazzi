import { useState } from "react";
import MobileSideDashboard from "../component/mobileSideDashboard";
import SidebarDashboard from "../component/sidebarDashboard";





import star from "/Image/Star 6.svg";




import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"

import Footerimg from "/Image/footer-dahsboard.svg"
import whiteEdit from "../../../public/Image/whiteEdit.svg"
import { profiledata } from "../data/profilledata";
import { Link } from "react-router-dom";





const Profile = () => {

  const [showSide, setShowSide] = useState(false)

  const handleSide = ( ) => {
    setShowSide((prev) => !prev);
  }


  return (
    <section className="flex w-full  bg-[#F8F8F8] ">


    <div >
    
          <div onClick={handleSide} className="flex md:hidden text-[#1843E2] fixed right-[15px]  top-[20px] text-[30px] z-[10000] bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]" 
          style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}>
    
            {
      showSide?
    
      (<i className="ri-close-line"></i>)
      :
      ( <i className="ri-menu-2-line"></i>)
    
          
    
    
    }
    
          </div>
    
    
    
    
    <div  className={`fixed overflow-y-scroll z-[1000] h-full  ${showSide? "max-w-[214px] w-full bg-[#1843E2] " 
        : "max-w-[214px] w-[0px] bg-[#1843E2] "}`}>
    <MobileSideDashboard />
     </div>
    
       
    </div>
    
    
        
        <div  className="max-w-[204px] w-full  md:flex hidden  bg-[#1843E2]">
    <SidebarDashboard />
     </div>
    
    
     <div className="flex flex-col md:w-[82%] py-[1rem] md:px-[1rem] px-[0.4rem] w-[100%]  ">
    
    
    {/* Top Link */}
    <div className="w-full flex   items-center justify-between">
      
        <div>
            <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Profile</h1>
        </div>



{/* Input */}
<div className=" hidden md:flex gap-[6px] bg-[#FFFFFF] border-[1px] border-[#D0D5DD] rounded-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]" 
    style={{boxShadow:"0px 1px 2px 0px #1018280D"}}>
        <img src={serachIcon} alt="searc_icon" className="w-[20px] h-[20px]" />
        <input type="text" placeholder="Search" className="outline-none w-full h-full bg-white text-[16px] leading-[24px] text-[#667085] font-tekInter font-[400]" />

    </div>


    {/*third div  */}

    <div className="md:flex lg:gap-[12px] hidden">
<div className="flex ">

<Link to="/dashboard/notification" className="flex cursor-pointer">

    <img src={notification}  alt="graph-pics" className="w-[24px] h-[24px]"/>
    <div className="w-[14px] h-[14px] rounded-[35px] bg-[#FF7F00] p-[2px] gap-[5px] justify-center items-center text-center ml-[-0.8rem] mt-[-0.3rem]"> <h1 className="text-[8px] leading-[10px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">20</h1></div>

    </Link>
 

</div>


<div className="flex items-center justify-center gap-[0px]">
<img src={manager}  alt="graph-pics" className="w-[75px] h-[30px]"/>
<h1 className="text-[14px] leading-[16px] text-[#181818] font-tekInter font-[400]">Manager</h1>

</div>

    </div>



      

        </div>



{/* main content */}

{  profiledata. map((p)=> (  
<div className=" flex flex-col rounded-[16px] my-[2rem] bg-[#FFFFFF] pt-[24px] pr-[32px] pb-[24px] pl-[32px]" key={p.id} style={{boxShadow:"0px 8px 32px 0px #3326AE14"}}>


  
        {/* image */}
        <div className="max-w-[973px] relative md:h-[244px] h-[154px]">
          <img
            src={p.bgPics}
            alt="ahmed_pics"
            className="max-w-[973px] w-[100%] h-[100%]  rounded-[5px]"
          />
        </div>

        {/* details about ahmed */}
        <div className="flex md:mt-[-4rem] mt-[-2rem] relative  mb-[2rem] px-1">
          <div className="flex  flex-col md:flex-row gap-[2rem]">
            <div className="md:w-[210px] md:h-[210px] w-[84px] h-[84px]">
              <img
                src={p.profilePics}
                alt="user_pics"
                className=" rounded-[50%] "
              />
            </div>

            <div className="flex flex-col md:flex-row  md:items-center justify-between md:pt-[4rem] w-[100%] lg:w-[715px]">
              <div className="flex flex-col">
                <h1 className="font-tekInter md:text-[32px] font-[700] md:leading-[48px] text-[20px] leading-[24px] text[#000000]">
                {p.storeName} - Ajah, Lagos
                </h1>
                <p className="font-tekInter text-[16px] font-[400] leading-[19px] text-[#4F4F4F] pt-[0.5rem]">
                {p.street}
                </p>

                <div className="flex gap-4 items-center  pt-[0.5rem]">
                  <div className="flex gap-1">
                    <img
                      src={star}
                      alt="star_pics"
                      className=" rounded-[50%] w-[18px] h-[18px]"
                    />
                    <span className="font-tekInter text-[16px] font-[400] leading-[19px] text-[#4F4F4F]">
                      4.2k (380)
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-[700] leading-[19.36px] font-tekInter text-[#3157E1]">
                      {" "}
                      Store Opens: 8am - 5pm
                    </span>
                  </div>
                </div>
                
              </div>

              <div className=" flex flex-row  md:flex-col gap-2 md:gap-0  md:mt-[5rem] mt-[1rem] lg:items-end p-[20px]">
                <button className="flex items-center justify-center gap-2 mb-2 w-[134px] h-[36px] rounded-[8px] bg-mainBlue text-[#fff] text-[16px] font-[400] leading-[19px]">
                  <img
                    src={whiteEdit}
                    alt="star_pics"
                    className=" rounded-[50%] w-[16px] h-[16px]"
                  />{" "}
              <Link to={`/dashboard/edit-profile/${p.id}`} >  Edit Profile  </Link>
                </button>

    
              </div>
            </div>
          </div>
        </div>

        {/* about stores  and text */}
        <div>
          <h1 className="font-[700] md:text-[24px] text-[20px] leading-[24px] md:leading-[38px] font-tekInter">
            {" "}
            About this Store
          </h1>
          <p className="font-[400] pt-[1rem] md:text-[16px] text-[14px] leading-[16px] md:leading-[19px] font-tekInter text-[#4F4F4F]">
            Welcome to Top Selling Store, your one-stop destination for quality and
            affordability. Founded with a passion for providing the best
            products and services to our customers, Ahmed Store has grown into a
            beloved shopping destination for families and individuals alike.
          </p>

          <p className="pt-[2rem] font-[400] md:text-[16px] text-[14px] leading-[16px] md:leading-[19px] font-tekInter text-[#4F4F4F]">
            At Top Selling Store, we believe in the power of choice and convenience.
            Our extensive range of products spans across various categories
            including electronics, home appliances, fashion, beauty, and
            groceries. We carefully select each item to ensure it meets our high
            standards of quality, durability, and value for money.
          </p>
        </div>

      </div>  
 ))
}



        

{/* Footer logo */}

 <div className="w-full items-center justify-center flex">
    <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
    </div>



        </div>

        </section>
  )
}

export default Profile

