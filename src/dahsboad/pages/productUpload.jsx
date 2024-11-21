import SidebarDashboard from "../component/sidebarDashboard"


import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"
import add from "../../../public/Image/plus-circle.svg"

import { Link } from "react-router-dom"
import edit from "/Image/edit.svg"
import { useEffect, useState } from "react"

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



import Products from "../../components/products"
import MobileSideDashboard from "../component/mobileSideDashboard"
import Footerimg from "../../../public/Image/footer-dahsboard.svg"
// import useGetProducts from "../dashboardhooks/useGetProducts"





const ProductUpload = () => {


    

  const [showSide, setShowSide] = useState(false)
  const handleSide = ( ) => {
    setShowSide((prev) => !prev);
  }
 

  // eslint-disable-next-line no-unused-vars
  const [preview, setPreview] = useState(null);
  

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setPreview(URL.createObjectURL(file));
      setInputs((prev) => ({ ...prev, image: file }));
    } else {
      alert("File size exceeds 5MB");
    }
  };



  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    unit_price: "",
    stock: "",
    image: null,
  });



  const validateForm = () => {
    const err = {};
    if (!inputs.title.trim()) {
      err.title = "This Field is Required";
    }
    if (!inputs.description.trim()) {
      err.description = "This Field is Required";
    }
    if (!inputs.unit_price.trim()) {
      err.unit_price = "This Field is Required";
    }
    if (!inputs.stock.trim()) {
      err.stock = "This Field is Required";
    }
    if (!inputs.image) {
      err.image = "This Field is Required";
    }
    
    return Object.keys(err).length === 0;
  };

  const uploadProduct = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields.", {
        position: "top-center",
      });
      return;
    }
    setIsSubmitting(true);


 const formData = new FormData();
  formData.append('name', inputs.title);
  formData.append('description', inputs.description);
  formData.append('unit_price', inputs.unit_price);
  formData.append('stock', inputs.stock);
  formData.append('image', inputs.image);  // Use the image state directly



  try {
    const response = await axios.post(
      "https://django-7u8g.onrender.com/api/products/upload/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success("Product uploaded successfully!", { position: "top-center" });
    console.log(response.data);
    navigate("/admin-product-upload");
  } catch (err) {
    console.error(err.response?.data || "Error occurred");
    toast.error(err.response?.data?.error || "Error submitting the form. Please try again!", {
      position: "top-center",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const [products, setProducts] = useState([]);

  useEffect(()=>  {
    const getProducts = async () => {
      try {
        const result = await axios.get("https://django-7u8g.onrender.com/api/products/list/");

        const res = result.data;
        setProducts(res);
  
        toast.success("Products fetched successfully!", {
          position: "top-center",
        });
      } catch (err) {
        console.error("Error:", err); // Debugging line
        if (err.response && err.response.data) {
          toast.error(err.response.data.error, {
            position: "top-center",
          });
        } else {
          toast.error("Error fetching the products. Please try again!", {
            position: "top-center",
          });
        }
      }
    };

    getProducts()
  }, [])






  return (
    <section className="flex w-full  bg-[#F8F8F8] ">



<div >

      <div onClick={handleSide} className="flex md:hidden text-[#1843E2] fixed right-[15px]  top-[55px] text-[30px] z-[10000] bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]" 
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



<div className="flex flex-col w-full bg-[#F8F8F8]   md:px-[1rem] p-[0.5rem]">

    {/* Top Link */}
<div className="w-full flex items-center justify-between ">
    <div className="">
        <h1 className="outline-none w-full h-full md:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Upload a Product</h1>
    </div>




    {/*third div  */}

    <div className="md:flex hidden md:gap-[12px] ">
<div className="flex ">

    <img src={notification}  alt="graph-pics" className="w-[24px] h-[24px]"/>
    <div className="w-[14px] h-[14px] rounded-[35px] bg-[#FF7F00] p-[2px] gap-[5px] justify-center items-center text-center ml-[-0.8rem] mt-[-0.3rem]"> <h1 className="text-[8px] leading-[10px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">20</h1></div>
 

</div>



<div className="md:flex items-center justify-center gap-[0px]">
<img src={manager}  alt="graph-pics" className="w-[75px] h-[30px]"/>
<h1 className="hidden md:flex text-[14px] leading-[16px] text-[#181818] font-tekInter font-[400]">Manager</h1>

</div>

    </div>

</div>

{/* Upload Product section */}
<div className="max-w-full ">
<form className="flex  flex-col lg:flex-row gap-[12px] mt-[3rem] mb-[1rem] max-w-full "  onSubmit={uploadProduct}>

<div className="flex flex-col lg:w-[391px] w-full">

  { preview ?

   <div>
     <img src={preview || add} alt="add-pics" className="w-full h-[317px]" />
  </div> 

   :
    <div className="bg-[#FFFFFF] flex flex-col items-center justify-center w-full h-[317px] gap-[3px]">
      {/* File Input (Hidden) */}
      <input 
             type="file"
                    id="fileInput"
                    name="file"
                    onChange={handleImage}
        className="hidden" 
      />

      {/* Label with Image */}
      <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center">
        <img src={preview || add} alt="add-pics" className="w-[60px] h-[60px]" />


        <h1 className="text-[#828282] font-[400] text-[16px] leading-[19px] font-tekInter py-[0.1rem]">
          Add Product Image
        </h1>
      </label>

      <span className="text-[#BDBDBD] font-[400] text-[12px] leading-[15px] font-tekInter">
        (Not bigger than 5mb)
      </span>
    </div>
}
<button
  type="submit"
  disabled={isSubmitting}
  className={`border-[1px] border-[#A9BCFF] pt-[10px] pr-[18px] pb-[10px] pl-[18px] flex items-center justify-center rounded-[8px] ${ preview ? "bg-[#1843E2]" : "bg-[#A9BCFF]" }
     text-[#FFFFFF] font-[600] text-[16px] leading-[24px] font-tekInter my-[1rem]`}
  style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
>
  {isSubmitting ? <div className="loader flex justify-center items-center"></div> : "Upload a product"} 
</button>

  </div>

    <div className="lg:w-[620px] w-full  ">

    <div className="bg-[#FFFFFF66] w-full h-[317px] border-[1px] border-[#BDBDBD] rounded-[8px]">
    <textarea 
        type="text" 
        placeholder="Enter the product description here" 
        value={inputs.description}
        onChange={(e)=>setInputs({...inputs, description:e.target.value})}
        className="outline-none bg-transparent text-[#828282] text-[20px] leading-[28px] font-tekInter h-full w-full resize-none overflow-y-auto p-3" 
    />
</div>

{/* second div */}
        <div className="flex flex-col lg:flex-row  my-[1rem] gap-[12px]">

        <div className="bg-[#FFFFFF66] w-full lg:w-[484px] h-[53px]  border-[1px] border-[#BDBDBD] rounded-[8px]">


            <input type="text" placeholder="Product Name"  
                 value={inputs.title}
                 onChange={(e)=>setInputs({...inputs, title:e.target.value})}
            className="outline-none bg-transparent  text-[#828282] text-[18px] leading-[19px] font-tekInter h-full pl-[16px]" / >

        </div>

        <div className="bg-[#FFFFFF66] lg:w-[255px]  h-[53px]  border-[1px] border-[#BDBDBD] rounded-[8px]">
            <input type="text" placeholder="Number of Item in stock" 
                 value={inputs.stock}
                 onChange={(e)=>setInputs({...inputs, stock:e.target.value})}
            className="outline-none bg-transparent  text-[#828282] text-[18px] leading-[19px] font-tekInter h-full pl-[16px]" / >

        </div>

        </div>

        {/* third div */}
        <div className="flex flex-col lg:flex-row  my-[1rem] gap-[12px]">

        <div className="bg-[#FFFFFF66] w-full lg:w-[391px] h-[53px]  border-[1px] border-[#BDBDBD] rounded-[8px]">
            <input type="text"
            value={inputs.unit_price}
            onChange={(e)=>setInputs({...inputs, unit_price:e.target.value})}
            placeholder="Product Unit Price" 
            className="outline-none bg-transparent  text-[#828282] text-[18px] leading-[19px] font-tekInter h-full pl-[16px]" / >
        </div>

        <div className="bg-[#FFFFFF66] lg:w-[327px] h-[53px]  border-[1px] border-[#BDBDBD] rounded-[8px]">
            <input type="text" placeholder="Discount price (optional)"
            

            className="outline-none bg-transparent  text-[#828282] text-[18px] leading-[19px] font-tekInter h-full pl-[16px]" / >

        </div>

        </div>

    </div>

    </form>

</div>


{/* All Products */}
<div className="flex flex-col bg-[#FFFFFF] md:w-full "
style={{boxShadow: "0px 8px 32px 0px #3326AE14"}} >

        {/* Heading */}
        <div className="flex items-center justify-between p-[1rem]">
<h1 className="text-[24px] leading-[36px] text-[#1843E2] font-tekInter font-[400]">All Products</h1>

<h1 className="text-[14px] leading-[16px] text-[#828282] font-[400] font-tekInter flex items-center gap-[3px]">More <i className="ri-arrow-right-line"></i></h1>
    </div>



       {/* mapping through */}
       <div className="md:grid lg:grid-cols-5 hidden w-[100%] grid-cols-1 md:grid-cols-3 relative  gap-4 py-[3rem]">
        {products.map((item) => (
          <div
            key={item.id}
            className="gap-3 top-0 rounded-[5px] max-w-[203px] w-full items-center justify-center"
          >
            <Link to='#'>
            <div className="bg-[#fff] px-2 h-[403px] mr-[2rem]  md:w-[190px] rounded-[8px] ">
              <img
                src={item.image}
                alt="trending_pics"
                className="w-[190px] h-[220px] "
              />
              <h1 className=" font-[700] text-[20px] leading-[24px]  font-tekInter pt-1">
                {item.name}
              </h1>
              <p className="text-[#282828] font-[400] text-[20px] leading-[24px] pb-[1rem] pt-[1rem] font-tekInter">
                #{item.unit_price}
              </p>
              <span className="text-fifthOrange font-[700] text-[20px] leading-[20px] pt-[1rem] font-tekInter">
                {item.stock} instock
              </span>
              <button
                className="flex justify-center w-[153px]  h-[44px] gap-[8px] bg-[#F9F5FF] border-[1px] border-[#F9F5FF] rounded-[8px] 
     hover:transform-x-[10px] items-center text-center text-mainBlue  leading-[24px] mt-[1rem]"
    style={{boxShadow: "box-shadow: 0px 1px 2px 0px #1018280D"}}
              >
                  <h1 className="text-[16px] leading-[24px] font-[600] text-[#1843E2] font-tekInter"> Edit Item   </h1>
                <img src={edit}  alt="edit-icon" className="w-[25px] h-[20px]"/>
            
              </button>
            </div>
            </Link>
          </div>
        ))}
      </div>


      <div className=" md:bg-productBg md:hidden ">
          <Products />
        </div>



{/* Footer logo */}
    <div className="w-full items-center justify-center flex">
    <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
    </div>

</div>


</div>

        </section>
  )
}

export default ProductUpload