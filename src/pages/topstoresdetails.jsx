import Faq from "../components/faq"


import Newsletter from "../components/newsletter"
import ProductLayout from "../components/productLayout"
import Products from "../components/products"
import SecondAds from "../components/secondAds"
import StoresAccessories from "../components/storedetails/storesAccessories"
import TopstoresHero from "../topstoresdetails/TopstoreHero"




// import MapLayout from "../googlemap/mapLayout"

const Topstoresdetails = () => {



  
  return (
<>

<div  className="overflow-x-hidden relative w-[100%]">

<TopstoresHero />
   
<SecondAds />

<Newsletter />
 {/*<Accessories />
        <ProductLayout />
        <Faq />*/}

</div>

</>
  )
}

export default Topstoresdetails