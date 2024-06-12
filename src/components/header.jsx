import logo from "../../public/Image/logo.png"
import profile from "../../public/Image/Profile.png"
import carticon from "../../public/Image/Icon.png"
const Header = () => {
  return (
 <section>
    <div className="flex justify-between items-center  bg-mainBlue h-[71px]  px-3">

{/* logo */}
<div>
    <img src={logo} alt='logo_image' />
</div>


<div>
    
</div>
<div  className="flex gap-3">
    {/* search input */}
 <div className="bg-white rounded-[10px] outline-none border-0 gap-2 px-2  ">
 <i className="ri-search-2-line  w-[15px] h-[15px] pr-2"></i>
 <input type="text" placeholder="Search for products and stores"  className="md:w-[522px] md:h-[44px] border-0
 bg-transparent outline-none"/>
    
 </div>

 {/* sign in button */}
 <div>
    <button  className="w-[95px] h-[44px] rounded-[8px] bg-secondBlue text-white">Search</button>
 </div>
</div>


{/* sign up , Menu and cart */}
<div  className="flex gap-3  items-center">

    {/*sign up */}
    <div>
    <button  className="w-[91px] h-[44px] rounded-[8px] items-center  px-1  text-[#fff] bg-mainOrange flex gap-3"><img src={profile} alt="profile_icon" className="w-[12px] h-[16px]" />Sign Up</button>
    </div>

    {/* Menu */}
    <div className="flex gap-1">
        <h1  className="text-[16px] font-[400]  text-[#fff]">Menu</h1>
        <ul>
            <li><i className="ri-arrow-down-s-line  w-[10px] h-[5px]  text-[#fff]"></i></li>
        </ul>
    </div>

     {/* cart */}
     <div className="flex  items-center gap-1">
        <h1  className="text-[16px] font-[400]  text-[#fff]">My cart</h1>
        <ul>
            <li><img src={carticon}  className="w-[16px] h-[15px]" /></li>
        </ul>
    </div>

</div>


    </div>
 </section>

  )
}

export default Header
