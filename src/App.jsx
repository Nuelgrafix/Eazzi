import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import SecondAds from "./components/secondAds";
import Faq from "./components/faq";

import Location from "./components/location";
import ProductLayout from "./components/productLayout";
import ProductLocation from "./components/productLocation";
import Accessories from "./components/accessories";

function App() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header />
        <Hero />
        <ProductLocation />
        <Accessories />
        <Location />
        <ProductLayout />
        <SecondAds />
        <Faq />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
