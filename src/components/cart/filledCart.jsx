import red_sneakers from "/Image/red-sneakers.svg";

import { useEffect, useRef, useState } from "react";
import { saveditemsdata } from "../../data/saveditemdata";
import SavedItemModal from "../saveditems/savedItemModal";


import remove from "/Image/trash-2.svg";
import heart from "/Image/heart.svg";
import favorite from "/Image/shop.svg";
import menuitems from "/Image/menuitems.svg";
import whiteheart from "/Image/white-heart.svg";
import EmptyProduct from "./emptyProduct";
import Newsletter from "../newsletter";
import { getCartTotal, updateQuantity } from "../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";


import emptyCart from "/public/Image/emptyCart.gif";
import { Link } from "react-router-dom";



const FilledCart = () => {

  const [removeitemClick, setRemoveItemClick] = useState(false);
  const removeItemRef = useRef(null);

  const handleRemoveItemOutside = (e) => {
    if (
      removeItemRef.current &&
      !removeItemRef.current.contains(e.tagert.value)
    ) {
      setRemoveItemClick(false);
    }
  };

  useEffect(() => {
    if (removeitemClick) {
      document.addEventListener("mousedown", handleRemoveItemOutside);
    } else {
      document.removeEventListener("mousedown", handleRemoveItemOutside);
    }

    return () => {
      document.addEventListener("mousedown", handleRemoveItemOutside);
    };
  });

  const toggleRemoveItem = () => {
    setRemoveItemClick(!removeitemClick);
  };


  // const [qty] = useState(1)

    const increaseQuantity = ( itemId,currentQty) => {
        const newQty  = currentQty + 1;
dispatch(updateQuantity({id:itemId, quantity: newQty}))
    }

    const decreaseQuantity = ( itemId,currentQty) => {

      if(currentQty  > 1) {
      const newQty  = Math.max(currentQty - 1,1);
     
dispatch(updateQuantity({id:itemId, quantity: newQty}))
  }
  }


  const dispatch = useDispatch()
  const{data: cartProduct, totalAmounts} = useSelector((state)=>state.cart)

  
  
  useEffect(()=> {
      dispatch(getCartTotal());
      console.log("Cart products:", cartProduct);
  },[cartProduct])

  // const removeItem = () => {
  //     dispatch(removeQuantity())
  // }
  


  // const formatNumberWithCommas = (number) => {
  //   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };
  // const price = parseInt("2,750".replace(/,/g, ''), 10);
  // const totalprice = formatNumberWithCommas(Math.ceil(price * cartitem));





  return (
<section className="lg:mt-[3.5rem] mt-[9rem] flex flex-col  justify-center md:items-center bg-[#F9F9F9]">


<div className="md:hidden flex gap-[8px] items-center pl-[16px] pb-[7px] bg-[#FFFFFF] w-full">
<i className="ri-arrow-left-line text-[20px] text-[#282828]"></i>
  <h1 className="font-[700] text-[#282828] text-[20px] leading-[24px] font-tekInter">Cart</h1>

</div>


     {/* top */}

        <div
          className="flex   flex-col-reverse w-full md:flex-row justify-center lg:gap-[20px] md:pt-[1rem] lg:pt-[1rem]
 bg-[#F9F9F9] px-[1rem]"
        >

          <div className="md:hidden bg-[#FFFFFF]  flex mt-[1rem]  pt-[24px] pr-[16px] pb-[24px] pl-[16px]" style={{boxShadow: "6px 7px 12px 0px #1843E20D"}}>
          <button className="w-full h-[48px] bg-[#1843E2] rounded-[8px] text-[16px] leading-[24px] font-[600] text-[#FFFFFF] flex items-center justify-center
            md:pt-[10px] md:pr-[18px] md:pb-[10px] md:pl-[18px] "
             style={{ boxShadow: "0px 1px 2px 0px #1018280D"  }}>
              Checkout (#{totalAmounts})

            </button>
          </div>



             {/* Main content */}

             { cartProduct.length > 0 ?

( 
  <div className="flex flex-col w-full justify-between md:bg-[#F9F9F9]">
 {cartProduct.map((s) => (
   <div
     key={s.id}
     className="p-[8px] flex flex-col lg:flex-row justify-between my-[1rem] w-full bg-[#FFFFFF] lg:w-[960px] lg:h-[170px]"
   >
     <div className="flex gap-[20px] lg:gap-[8px] items-center">
       <div>
         <img
           src={s.img}
           alt="product"
           className="w-[84px] h-[84px] md:w-[154px] md:h-[154px] rounded-[3.5px] object-cover"
         />
       </div>
       <div className="flex flex-col gap-[8px] md:gap-[12px]">
         <h1 className="text-[#4F4F4F] text-[16px] leading-[19px] md:text-[24px] md:leading-[38px] font-[400]">
           {s.name}
         </h1>
         <p className="text-[#3157E1] text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] font-[700]">
          From Ahmed Store
         </p>
         <h1 className="text-[#282828] text-[16px] leading-[19px] md:text-[24px] md:leading-[38px] font-[700]">
           #{s.unit_price}
         </h1>
         <p className="text-[#FF8F21] text-[14px] leading-[16px] md:text-[16px] md:leading-[19px] font-tekInter">
           {s.stock}
         </p>
       </div>
     </div>

     {/* divider */}
     <div className="w-full border-[#E0E0E0] border-[1px] mt-[1rem]  md:hidden"></div>


     <div className="flex flex-row lg:flex-col justify-between lg:items-end items-center mt-[1rem] ">
       <h1
         className=" text-[#282828] text-[20px] leading-[24px] md:text-[24px] md:leading-[36px] font-[700] font-tekInter"
       >
#{s.unit_price * s.quantity} </h1>

       <ul
         className="flex cursor-pointer items-center gap-[24px]"
       >
         <li className="w-[40px] h-[40px] bg-[#5075FF] flex items-center justify-center text-[#FFFFFF] text-[16px] leading-[19px] font-[700] rounded-[8px]" onClick={() => decreaseQuantity(s.id,s.quantity)} >
        -
         </li>
         <li   className=" text-[#FF7F00] text-[16px] leading-[19px] font-[700] font-tekInter">{s.quantity || 1} </li>
       <li onClick={() => increaseQuantity(s.id,s.quantity)} className="w-[40px] h-[40px] bg-[#5075FF] flex items-center justify-center text-[#FFFFFF] text-[16px] leading-[19px] font-[700] rounded-[8px]">
        +
         </li>
       </ul>
     </div>
   </div>
 ))}
</div>

)

:

             
             (
              <div className="flex flex-col-reverse md:flex-row items-center justify-around w-[100%] h-full md:py-[4rem]   lg:max-w-[1440px]">
        
              <div
                className="lg:w-[860px]   h-full  w-full items-center flex flex-col py-[3rem]"
                style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}
              >
                <img
                  src={emptyCart}
                  alt="emptyCart_img"
                  className="md:w-[500px] md:h-[321px] w-[259px] h-[189px]"
                />
      
                <div className="gap-[24px] items-center justify-center flex flex-col">
                  <h1 className="font-[700] md:text-[32px]  text-[20px] leading-[24px] md:leading-[61px] font-tekInter text-[#000000]">
                    Your cart is empty
                  </h1>
                  <p
                    className="font-[400] text-[18px] leading-[19px] md:text-[24px]  text-center flex items-center justify-center md:leading-[38px]
          font-tekInter text-[#333333]"
                  >
                    We noticed you are not signed in
                  </p>
      
                  <div className="flex  flex-col-reverse md:flex-row md:gap-[24px] gap-[16px]">
              <Link
                to="/login"
                className="md:pt-[10px] pt-[12px] md:pl-[18px] pl-[20px] md:pb-[10px] pb-[12px] md:pr-[18px] pr-[20px] bg-[#1843E2] 
    border-[1px] border-[#1843E2]  rounded-[8px] text-[#FFFFFF] text-[16px] leading-[24px] text-center w-[203px] h-[48px] md:w-[199px] md:h-[44px]"
              >
                Sign in to my account
              </Link>

              <Link
                to="/signup"
                className="md:pt-[10px] pt-[12px] md:pl-[18px] pl-[20px] md:pb-[10px] pb-[12px] md:pr-[18px] pr-[20px] bg-[#F9F5FF] 
    border-[1px] border-[#1843E2]  rounded-[8px] text-[#1843E2] text-[16px] leading-[24px] text-center w-[203px] h-[48px] md:w-[199px] md:h-[44px]"
              >
                Sign up now
              </Link>
            </div>
                </div>
              </div>

            </div>
             )

             

}

          {/* Added item to cart display */}


<div className="">




  
</div>



          {/* Sidebar for big screens */}
 { cartProduct   &&
          
          <div
            className="md:w-[335px] h-auto md:h-[199px]  flex-col gap-[32px] bg-white  my-9  py-[24px] px-[16px]
     hidden md:flex "
            style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}
          >
        
            {/* Menu items */}
            <div className="flex items-center gap-2">
              <h1 className="text-[#333333] font-tekInter font-[400] text-[20px] leading-[24px] ">
              Subtotal of cart item
              </h1>
            </div>

            <ul className="flex gap-3 items-center justify-between h-9 w-full">
            <li>{cartProduct.length} Saved Product</li>
            <li className="fontt-[700] text-[#282828] font-[700] text-[16px] leading-[19px] font-tekInter">#{totalAmounts}</li>
            </ul>
            <Link to={cartProduct.length > 0 ? "/checkout" : "#"}>
            <button className="w-full h-[48px] bg-[#1843E2] rounded-[8px] text-[16px] leading-[24px] font-[600] text-[#FFFFFF] flex items-center justify-center
            md:pt-[10px] md:pr-[18px] md:pb-[10px] md:pl-[18px] "
             style={{ boxShadow: "0px 1px 2px 0px #1018280D"  }}>
          
              Checkout  (#{totalAmounts})
            
            </button>
            </Link>
        

            <div className="bg-transparent">
              <h1 className="text-[#828282] text-[14px] leading-[16px] font-[400] font-tekInter">Checking out now will be best decision as price and availability of items are subjected to change anytime</h1>
            </div>

      
          </div>
}
          

          {/* Sidebar for smaller screens */}


          { cartProduct  &&
          <div  className="flex flex-col md:hidden gap-[16px]  bg-[#ffffff]">
            
          <div  className="py-[1rem] bg-[#f9f9f9]">
              <h1 className="text-[#828282] text-[14px] leading-[16px] font-[400] font-tekInter">Checking out now will be best decision as price and availability of items are subjected to change anytime</h1>
            </div>


            <div className="w-full md:hidden flex flex-col bg-transparent gap-3 bg-[#FFFFFF]  pt-[24px] pr-[16px] pb-[24px] pl-[16px]"     
              style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}>

            <div className="flex gap-3 items-center h-9 w-full">
            <h1 className="text-[#333333] font-tekInter font-[400] text-[20px] leading-[24px] ">
              Subtotal of cart item
              </h1>
            </div>

            
          <div className="w-full border-[#E0E0E0] border-[2px]  md:hidden"></div>

            <ul className="flex gap-3 items-center justify-between h-9 w-full">
            <li>{cartProduct.quantity} Saved Product</li>
              <li className="fontt-[700] text-[#282828] font-[700] text-[16px] leading-[19px] font-tekInter">#{totalAmounts}</li>
            </ul>
          </div>
            
          </div>
}

        </div>




  
      {/* recent viewed product for bigger screen */}

      <div className="">
    
        <div className="mt-[2rem] mb-[2rem] bg-[#FFFFFF]">

          {/* heading */}
          <div
            className="max-w-[100%] flex justify-between items-center md:h-[73px] h-[48px] bg-[#F9F9F9] 
         md:bg-mainBlue md:border-b-4 md:border-secondOrange md:px-[1rem] p-[0.5rem]"
          >
            <div className="flex  md:flex-row flex-col md:items-center items-start gap-3">
              <h1 className="md:text-[#fff] text-[#181818] font-[400] md:text-[20px] text-[16px] leading-[36px]  font-tekInter">
                Recent viewed products
              </h1>
            </div>
          </div>

          <div className="w-full">
            <EmptyProduct />
          </div>
        </div>
      </div>


     {/* bottom */}
      <div className="flex flex-col justify-center items-center lg:ml-[4rem] bg-[#F9F9F9] ">
        <div>

          <div className="flex items-center justify-center w-full">
            {removeitemClick && (
              <div
                className="flex flex-col items-center justify-center w-full h-full"
                ref={removeItemRef}
                onClick={toggleRemoveItem}
              >
                <SavedItemModal />
              </div>
            )}
          </div>
        </div>

        <div
          className="flex flex-col w-full md:flex-row justify-center lg:gap-[20px] md:pt-[5rem] lg:pt-[1rem]  bg-[#F9F9F9] 
  px-[1rem]"
        >
          {/* Sidebar for big screens */}
          <div
            className="md:w-[335px] h-auto md:h-[220px]  flex-col bg-[#FFFFFF] gap-8 mt-4  
     hidden md:flex "
            style={{ boxShadow: "6px 7px 12px 0px #1843E20D" }}
          >
            {/* Menu items */}
            <div className="flex items-center gap-2">
              <div className="bg-[#5075FF] w-10 h-10 flex items-center justify-center">
                <img
                  src={menuitems}
                  alt="product_pics"
                  className="w-6 h-6 rounded-md"
                />
              </div>
              <h1 className="text-[#1843E2] font-tekInter font-[400] text-[20px] leading-[24px] ">
                Menu<i className="ri-arrow-right-s-line"></i>
                <span>Saved items</span>
              </h1>
            </div>

            <ul className="flex gap-3 items-center h-9 w-full">
              <li className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
                <img
                  src={heart}
                  alt="product_pics"
                  className="w-4 h-4 rounded-md"
                />
              </li>
              <li>5 Saved Product</li>
            </ul>

            <ul className="bg-gray-400 flex gap-3 p-1 rounded-md items-center h-9 w-full">
              <li className="w-7 h-7 bg-gray-100 items-center justify-center rounded-full flex">
                <img
                  src={favorite}
                  alt="product_pics"
                  className="w-4 h-4 rounded-md flex justify-center items-center"
                />
              </li>
              <li className="text-gray-100 text-base leading-5">
                4 Favorite store
              </li>
            </ul>

            <div className="w-full border-[#E0E0E0] border-[2px] "></div>

          </div>

          {/* Sidebar for smaller screens */}
          <div className="w-full h-[30vh] md:hidden flex flex-col   bg-[#FFFFFF] gap-[30px]">
            <ul className="flex gap-3 items-center h-9 w-full">
              <li className="w-10 h-10 bg-[#5075FF] flex items-center justify-center">
                <img
                  src={whiteheart}
                  alt="product_pics"
                  className="w-4 h-4 rounded-md"
                />
              </li>
              <li className="text-[#1843E2] text-xl leading-6">Saved items</li>
            </ul>

            <ul className="flex gap-3 p-1 items-center h-9 w-full">
              <li className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
                <img
                  src={heart}
                  alt="product_pics"
                  className="w-4 h-4 rounded-md"
                />
              </li>
              <li className="text-gray-800 font-medium text-base leading-5">
                5 Saved Product
              </li>
            </ul>

            <ul className="bg-gray-400 flex gap-3 p-1 rounded-md items-center h-9 w-full">
              <li className="w-7 h-7 border border-gray-300 bg-gray-100 items-center justify-center rounded-full flex">
                <img
                  src={favorite}
                  alt="product_pics"
                  className="w-4 h-4 rounded-md flex justify-center items-center"
                />
              </li>
              <li className="text-gray-800 font-medium text-base leading-5">
                4 Favorite store
              </li>
            </ul>



            <div className="w-full border-[#E0E0E0] border-[2px] "></div>
          </div>

       

          {/* Main content */}
          <div className="flex flex-col w-full justify-between mt-[1rem] md:mt-0">
            {saveditemsdata.map((s) => (
              <div
                key={s.id}
                className="p-[8px] flex flex-col lg:flex-row justify-between my-[1rem] w-full  bg-[#FFFFFF] lg:w-[960px] lg:h-[170px]"
              >
                <div className="flex gap-[20px] lg:gap-[8px] items-center">
                  <div>
                    <img
                      src={red_sneakers}
                      alt="product"
                      className="w-[84px] h-[84px] md:w-[154px] md:h-[154px] rounded-[3.5px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] md:gap-[12px]">
                    <h1 className="text-[#4F4F4F] text-[16px] leading-[19px] md:text-[24px] md:leading-[38px] font-[400]">
                      {s.productname}
                    </h1>
                    <p className="text-[#3157E1] text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] font-[700]">
                      {s.storename}
                    </p>
                    <h1 className="text-[#282828] text-[16px] leading-[19px] md:text-[24px] md:leading-[38px] font-[700]">
                      {s.price}
                    </h1>
                    <p className="text-[#FF8F21] text-[14px] leading-[16px] md:text-[16px] md:leading-[19px] font-tekInter">
                      {s.productnoumber}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse lg:flex-col md:justify-between justify-end mt-[1rem]">
                  <button
                    to="/signup"
                    className="bg-[#1843E2] border-[1px] border-[#1843E2] rounded-[8px] text-[#FFFFFF] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] text-center w-[158px] h-[40px] md:w-[157px] md:h-[48px]"
                  >
                    Buy Now
                  </button>

                  <ul
                    onClick={toggleRemoveItem}
                    ref={removeItemRef}
                    className="flex cursor-pointer items-center gap-[8px] pl-[2.5rem] w-[158px] md:w-full"
                  >
                    <li>
                      <img
                        src={remove}
                        alt="remove"
                        className="w-[16px] h-[16px]"
                      />
                    </li>
                    <li className="text-[#FF7F00]">Remove</li>
                  </ul>
                </div>

              </div>
            ))}
          </div>
          
        </div>

      </div>



      <div className="w-full">
          <Newsletter />
        </div>

</section>
  )
}

export default FilledCart