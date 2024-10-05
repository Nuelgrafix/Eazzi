import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Routs from "./routs/routs.jsx";
import { useLocation } from "react-router-dom";

function App() {


  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
   const isProductUpload = location.pathname.startsWith('/product-upload')
   const isOrders = location.pathname.startsWith('/orders')
   const isOrderHistory = location.pathname.startsWith('order-history')
   const isProduct = location.pathname.startsWith('dashboard-products')
   const isProfile = location.pathname.startsWith('/dashboard/prfoile')
   const isNotification = location.pathname.startsWith('/dashboard/notification')


  return (
    <>
      <div className="overflow-x-hidden">
        {!isDashboard && !isProductUpload  && !isOrders && !isOrderHistory && !isProduct  && !isProfile && !isNotification && <Header />}
        <Routs />
        
        {!isDashboard && !isProductUpload && !isOrders && !isOrderHistory && !isProduct && !isProfile && !isNotification  && <Footer />}
      </div>
    </>

  );
}

export default App;
