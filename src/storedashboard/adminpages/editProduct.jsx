import { useParams } from "react-router-dom"
import { dashboardproductdata } from "../../data/product";


const EditProduct = () => {

const {id} = useParams();
const item = dashboardproductdata.find((item)=> item.id === id)

  return (
    <div>

        <div className="w-[224px] h-[180px]">

        <img src={item.id} alt="product_item" className="w-full h-full" />
        </div>
   
      
    </div>
  )
}

export default EditProduct
