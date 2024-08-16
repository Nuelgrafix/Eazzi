
import dashboardHome from "/Image/dashboardhome.svg"
import analytics from "/Image/analytics.svg"
import profile from "/Image/profile.svg"
import order from "/Image/shopping-bag (1).svg"
import logout from "/Image/log-out.svg"
import product from "/Image/produtc.svg"
import settings from "/Image/setting-2.svg"
import { Link } from "react-router-dom"


const sidebar_Link = [

    {
        path: "#",
        Dashdisplay: "Dashboard",
        img: dashboardHome,
    },

    {
        path: "#",
        display: "Analytics",
        img: analytics,
    },


    {
        path: "#",
        display: "Orders",
        img: order,
        number: "20"
    },

    {
        path: "#",
        display: "Products",
        img: product,
    },

    {
        path: "#",
        display: "Order History",
        img: order,
    },

    {
        path: "#",
        display: "Profile",
        img: profile,
    },
    {
        path: "#",
        display: "Setting",
        img: settings,
    },
    {
        path: "#",
        display: "Log Out",
        img: logout,
    },
]

const SidebarDashboard = () => {
  return (
    <section className="h-full  flex flex-col gap-[147px] fixed overflow-y-scroll z-[1000]
    pt-[38px] pr-[38px] pb-[38px] pl-[24px] w-[214px]">

        <div className="flex flex-col items-center gap-[32px]">
        <h1 className="text-[24px] leading-[38px] text-[#FFFFFF] font-tekInter font-[700]">Ben&apos;s Store</h1>
        <Link to="/product-upload"  className="bg-[#FF7F00] gap-[8px] rounded-[8px] border-[1px] border-[#FF7F00] 
         text-[#FFFFFF] text-[16px] leading-[24px] font-[600] font-tekInter pt-[12px] pr-[20px] pb-[12px] pl-[10px]" 
        style={{boxShadow:"0px 1px 2px 0px #1018280D" }}
        >Add Product</Link>
        </div>




        <div className="flex flex-col gap-[28px]">
        {sidebar_Link.map((s, index) => (
          <div 
            key={index} 
            className={`flex rounded-[8px] gap-[10px] w-[151px] h-[52px] items-center justify-start pl-[0.5rem] ${s.Dashdisplay ? 'bg-[#FFFFFF]' : 'bg-[#A9BCFF]'}`}
          >
            <img src={s.img} alt="icons" className="w-[20px] h-[20px]" />
            <Link to={s.path} className="text-[16px] leading-[19px] text-[#181818] font-tekInter font-[400] flex items-center justify-center gap-[10px]">
              {s.Dashdisplay || s.display}
              {s.number && (
                <h1 className="bg-[#FF7F00] rounded-[50%] text-[12px] leading-[14px] w-[26px] h-[26px] flex
                  text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">
                  {s.number}
                </h1>
              )}
            </Link>
          </div>
        ))}
      </div>

</section>
  )
}

export default SidebarDashboard