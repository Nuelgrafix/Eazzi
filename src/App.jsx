
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import Newsletter from './components/newsletter'
import SecondAds from './components/secondAds'
import Faq from './components/faq'
import ProductsList from './components/productsList'
import Location from './components/location'


function App() {
 

  return (
    <>
 <div className="relative overflow-hidden">
 <Header />
<Hero />
<Location  />
<ProductsList />
<SecondAds  />
<Faq />
<Newsletter />
<Footer />
 </div>

    </>
  )
}

export default App
