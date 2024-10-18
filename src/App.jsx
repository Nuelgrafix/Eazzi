import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Routs from "./routs/routs.jsx";
import { useLocation } from "react-router-dom";

function App() {


  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin-dashboard');
   const isProductUpload = location.pathname.startsWith('/product-upload')
   const isOrders = location.pathname.startsWith('/admin-orders')
   const isOrderHistory = location.pathname.startsWith('/order-history')
   const isProduct = location.pathname.startsWith('/admin-products')
   const isProfile = location.pathname.startsWith('/admin-profile')
   const isNotification = location.pathname.startsWith('/admin-notification')

  const isRider = location.pathname.startsWith('/rider-dashboard');
  const isRiderOrders = location.pathname.startsWith('/rider-orders')
  const isRidersOrderDetails = location.pathname.includes('/rider/ordersdetails')
  const isRidersAssignedOrder = location.pathname.includes('/rider-assigned-orders')
  const isRiderOrderHistory = location.pathname.startsWith('/rider-order-history')
  const isRiderStores = location.pathname.startsWith('/rider/stores')
  const isRiderRiders = location.pathname.startsWith('/rider/riders')
  const isAllRiders = location.pathname.startsWith('/rider/allrider')
  const isRidersDetails = location.pathname.includes('/rider/allriderdetails')
  const isRiderCustomer = location.pathname.startsWith('/rider/customer')
  const isRiderNotification = location.pathname.startsWith('/rider/notification')
  const isSettings = location.pathname.startsWith('/rider/settings')
  const isRiderStoreDetails = location.pathname.includes('/rider/storesdetails')


   return (
    <>
      <div className="overflow-x-hidden">
        {!isAdmin && !isProductUpload && !isOrders && !isOrderHistory && !isProduct && !isProfile && !isNotification 
      && !isRider && !isRiderOrders && !isRidersAssignedOrder  && !isRiderOrderHistory && !isRiderStores && !isRiderRiders && !isRidersDetails && !isRiderCustomer && !isRiderNotification && !isSettings
      && !isRiderStoreDetails   && !isRidersOrderDetails && !isAllRiders  && <Header />}
        
        <Routs />
        
        {!isAdmin && !isProductUpload && !isOrders && !isOrderHistory && !isProduct && !isProfile && !isNotification 
           && !isRider && !isRiderOrders && !isRiderOrderHistory && !isRiderStores && !isRiderRiders && !isRidersDetails && !isRiderCustomer  && !isRiderNotification && !isSettings
           && !isRiderStoreDetails  && !isRidersOrderDetails && !isAllRiders  && !isRidersAssignedOrder      && <Footer />}
      </div>
    </>
  );
}

export default App;
