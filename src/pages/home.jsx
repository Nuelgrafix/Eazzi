import Faq from "../components/faq"
import Hero from "../components/hero"
import Newsletter from "../components/newsletter"
import ProductLayout from "../components/productLayout"
import ProductLocation from "../components/productLocation"
import SecondAds from "../components/secondAds"


const Home = () => {
  return (
<>

<div  className="overflow-x-hidden relative w-[100%]">
<Hero />
<ProductLocation />
<ProductLayout />
<SecondAds />
<Faq />
<Newsletter />
</div>

</>
  )
}

export default Home