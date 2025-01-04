import { useParams } from "react-router-dom"
import { aboutproductext, dashboardproductdata } from "../../data/product";

import MobileSideDashboard from "../component/mobileSideDashboard";
import SidebarDashboard from "../component/sidebarDashboard";
import { useState } from "react";

import whiteedit from "/Image/whiteEdit.svg"
import productStar from "../../../public/Image/yellow_star.svg"

import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"
import Footerimg from "/Image/footer-dahsboard.svg"

const AboutProduct = () => {

    
    const [showSide, setShowSide] = useState(false)

    const handleSide = ( ) => {
      setShowSide((prev) => !prev);
    }


    const {id} = useParams();

    const item = dashboardproductdata.find((item)=> item.id === id);

    if(!item){
        return <div><h1>Item not Found</h1></div>
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
       <div className="w-full flex items-center justify-between">
           <div>
               <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Store Product</h1>
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

       {/* About Product */}
       <div className="flex flex-col bg-[#FFFFFF] my-[2rem]  p-[32px] gap-[27px] rounded-[16px]"  
           style={{boxShadow:"0px 8px 32px 0px #3326AE14"}}>
   

{/* Heading */}

<div>
<h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">About this product</h1>
    </div>



       <div className=" flex w-full max-w-[1141px] rounded-[16px]" >



{/* first */}
<div  className="flex flex-col pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[24px] max-w-[280px] w-full">


    <div  className="bg-[#FFFFFF] flex flex-col gap-[16px] pt-[16px] pr-[12px] pb-[16px] pl-[12px] rounded-[16px]"
    style={{boxShadow:"6px 7px 12px 0px #1843E20D"}}>
        <img src={item.pics} alt="product_pics" 
        className="w-[224px] h-[180px] rounded-[8px] opacity-[39px] gap-[22px]" />
        <ul className="flex gap-[12px] items-center ">
            <li className="text-[#181818] font-[700] text-[20px] leading-[24px] font-tekInter">{item.price}</li>
            <li className="text-[#828282] font-[700] text-[16px] leading-[19px] font-tekInter line-through">#22,300</li>

        </ul>

        <ul className="flex gap-[12px] items-center ">
            <li className="text-[#4F4F4F] font-[700] text-[14px] leading-[16px] font-tekInter flex items-center gap-[4px]">Available: <span className="text-[#FF7F00] font-[400] text-[20px] leading-[24px]">{item.realStock}</span></li>
            <li className="text-[#7B97FF] font-[700] text-[14px] leading-[16px] font-tekInter flex items-center gap-[4px]">Available: <span className="text-[#333333] font-[400] text-[20px] leading-[24px]">10</span></li>

        </ul>

    </div>

    <ul className="flex flex-col gap-[16px]">
    <button
                className="flex justify-center w-[153px]  h-[44px] gap-[8px] bg-[#1843E2] border-[1px] border-[#1843E2] rounded-[8px] 
     hover:transform-x-[10px] items-center text-center text-mainBlue  leading-[24px] mt-[1rem]"
    style={{boxShadow: "box-shadow: 0px 1px 2px 0px #1018280D"}}
              >
                  <h1 className="text-[16px] leading-[24px] font-[600] text-[#FFFFFF] font-tekInter"> Edit Item   </h1>
                <img src={whiteedit}  alt="edit-icon" className="w-[25px] h-[20px]"/>
            
              </button>

              <button
                className="flex justify-center w-[153px]  h-[44px] gap-[8px] bg-[#FEF3F2] border-[1px] border-[#FF7F00] rounded-[8px] 
     hover:transform-x-[10px] items-center text-center text-[#FF7F00]  leading-[24px] mt-[1rem]"
    style={{boxShadow: "box-shadow: 0px 1px 2px 0px #1018280D"}}
              >
                  <h1 className="text-[16px] leading-[24px] font-[600] text-[#FF7F00] font-tekInter"> Unpublish</h1>
           
            
              </button>

    </ul>

        <div className="flex border-b-[2px] border-[#E0E0E0] max-w-[249px] w-[100%] gap-[8px] p-[10px]">
  
    <img src={productStar}  alt="edit-icon" className="w-[25px] h-[20px]"/>
    <h1 className="text-[16px] leading-[19px] font-[400] text-[#4F4F4F] font-tekInter">Product review </h1>
    </div>

    <h1 className="text-[16px] leading-[19px] font-[400] text-[#4F4F4F] font-tekInter">This product got 8 reviews out of 10 buyers.</h1>

</div>

{/* second div */}

<div className="flex flex-col gap-[32px] ">

    <div className="flex flex-col">
        <h1 className="text-[#282828] font-tekInter font-[400] text-[30px] leading-[48px]">{item.title}</h1>
        <p className="text-[#4F4F4F] font-tekInter font-[400] text-[16px] leading-[19px]">{item.description}</p>
    </div>

    <div>
    {aboutproductext.map((d) => (
        <div key={d.id} className="flex flex-col gap-[20px]">
            <h1 className="text-[16px] leading-[19px] font-[700] font-tekInter ">{d.headingText}</h1>
            <ul className="list-disc pl-5 flex flex-col gap-[16px]">
                {d.title && (
                    <li className="flex items-start gap-[16px]">
                        <span className="font-bold text-[#4F4F4F]">{d.title}:</span>
                        <p className=" text-start">{d.textOne}</p>
                    </li>
                )}
                {d.titleTwo && (
                    <li className="flex items-start gap-[16px]">
                        <span className="font-bold">{d.titleTwo}:</span>
                        <p className=" text-start">{d.textTwo}</p>
                    </li>
                )}
                {d.titleThree && (
                    <li className="flex items-start gap-[16px]">
                        <span className="font-bold">{d.titleThree}:</span>
                        <p className=" text-start">{d.textThree}</p>
                    </li>
                )}
                {d.titleFour && (
                    <li className="flex items-start gap-[16px]">
                        <span className="font-bold">{d.titleFour}:</span>
                        <p className="text=start">{d.textFour}</p>
                    </li>
                )}
            </ul>
        </div>
    ))}
</div>


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


export default AboutProduct
