
import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"

import Footerimg from "/Image/footer-dahsboard.svg"
import { useState } from "react"
import MobileSideDashboard from "./mobileSideDashboard"
import SidebarDashboard from "./sidebarDashboard"
import { useParams } from "react-router-dom"
import { profiledata } from "../data/profilledata"
import plusCircle from "../../../public/Image/whitePlus-circle.svg"

const EditProfile = () => {


    const [showSide, setShowSide] = useState(false)

    const handleSide = ( ) => {
      setShowSide((prev) => !prev);
    }

    const {id} = useParams();
    const item = profiledata.find((item)=> item.id === id)

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
    
    
     <div className="flex flex-col py-[1rem] md:px-[1rem] px-[0.4rem]  max-w-[1141px] w-full">
    
    
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

    <img src={notification}  alt="graph-pics" className="w-[24px] h-[24px]"/>
    <div className="w-[14px] h-[14px] rounded-[35px] bg-[#FF7F00] p-[2px] gap-[5px] justify-center items-center text-center ml-[-0.8rem] mt-[-0.3rem]"> <h1 className="text-[8px] leading-[10px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">20</h1></div>
 

</div>


<div className="flex items-center justify-center gap-[0px]">
<img src={manager}  alt="graph-pics" className="w-[75px] h-[30px]"/>
<h1 className="text-[14px] leading-[16px] text-[#181818] font-tekInter font-[400]">Manager</h1>

</div>

    </div>



      

        </div>



{/* main content */}
<div className="flex flex-col bg-[#ffffff] rounded-[16px] pt-[24px] pr-[32px] 
pb-[24px] pl-[32px] gap-[27px] my-[2rem]"


style={{boxShadow:"0px 8px 32px 0px #3326AE14"}}>


    {/* Heading */}
    <div>
        <h1  className="text-[#1843E2] font-[400] font-tekInter text-[24px] leading-[36px]">Edit Profile</h1>
    </div>



    <div className="flex gap-[24px] justify-between">



{/* image */}
        <div className="max-w-[324px] w-full flex flex-col">

        <div className="w-full relative md:h-[190px] h-[154px] rounded-[8px] cursor-pointer">
          <img
            src={item.bgPics}
            alt="ahmed_pics"
            className="max-w-[973px] w-[100%] h-[100%]  rounded-[5px] "
            style={{ filter: 'brightness(50%)' }}
          />

          <div className=" w-[32px] h-[32px] absolute right-[208px] top-[230px] z-[100]">
          <img
            src={plusCircle}
            alt="ahmed_pics"
            className="max-w-[973px] w-[100%] h-[100%]  rounded-[5px]"
          />
          </div>
        </div>

        <div className="md:w-[210px] md:h-[210px] w-[84px] h-[84px] mt-[-3rem] relative">



        <div className=" w-[32px] h-[32px] absolute right-[30px] bottom-[230px] z-[100] cursor-pointer">
          <img
            src={plusCircle}
            alt="ahmed_pics"
            className="max-w-[973px] w-[100%] h-[100%]  rounded-[5px]"
          />
          </div>

              <img
                src={item.profilePics}
                alt="user_pics"
                className=" rounded-[50%] "
                style={{ filter: 'brightness(50%)' }}
              />


              
     
            </div>

        </div>

{/* form */}
        <div className="flex flex-col max-w-[729px] w-full  gap-[15px]">
            <form className="flex flex-col gap-[15px]">

<div className="h-[53px] w-full rounded-[8px] border-[#BDBDBD] border-[1px] pr-[16px] pl-[16px]
">
    <input type="" className="outline-none border-none bg-transparent w-full h-full p-[5px]"   placeholder={`${item.storeName}`}  />
</div>

<div className="h-[53px] w-full rounded-[8px] border-[#BDBDBD] border-[1px]  pr-[16px]  pl-[16px]
">
    <input type="" className="outline-none border-none bg-transparent w-full h-full p-[5px] "   placeholder={`${item.street}`} />
</div>


<div className="h-[53px] w-full rounded-[8px] border-[#BDBDBD] border-[1px] pr-[16px]  pl-[16px]
">
    <input type="" className="outline-none border-none bg-transparent w-full h-full p-[5px]"  placeholder={`${item.time}`}  />
</div>


<div className="h-[237px] w-full rounded-[8px] border-[#BDBDBD] border-[1px] pt-[26px] pr-[16px] pb-[26px] pl-[16px]
">
    <textarea type="" className="outline-none border-none bg-transparent w-full h-full p-[5px]"   placeholder={`${item.textOne}`}   />
</div>


{/* update button */}
<div className=" flex flex-row  md:flex-col gap-2  lg:items-end ">
                <button className="flex items-center justify-center gap-2 mb-2 w-[97px] h-[36px] rounded-[8px] bg-mainBlue text-[#fff] text-[16px] font-[400] leading-[19px]">
           
              <h1 >Update </h1>
                </button>

    
              </div>

            </form>
        </div>
    </div>
</div>






        

{/* Footer logo */}

 <div className="w-full items-center justify-center flex">
    <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
    </div>



        </div>

        </section>
  )
}

export default EditProfile
