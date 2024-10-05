import {  Route, Routes } from "react-router-dom";

import HomeDashboard from "../dahsboad/pages/homeDashboard";
import ProductUpload from "../dahsboad/pages/productUpload";
//  import { useAuthContext } from "../hooks/useAuthContext";
import NoPageFound from "../pages/noPageFound";
import Orders from "../dahsboad/pages/orders";
import OrderHistory from "../dahsboad/pages/orderHistory";
import OrderDetails from "../dahsboad/pages/orderDetails";
import DashboardProduct from "../dahsboad/pages/dashboardProduct";
import Profile from "../dahsboad/pages/profile";
import EditProduct from "../dahsboad/pages/editProduct";
import AboutProduct from "../dahsboad/pages/aboutProduct";
import EditProfile from "../dahsboad/component/editProfile";
import NotificationDetails from "../dahsboad/component/notification/notificationDetails";
import DashboardNotification from "../dahsboad/pages/dashboardNotification";
import Analyticsdashboard from "../dahsboad/pages/analyticsdashboard";


const AdminRouts = () => {

// const {authUser} = useAuthContext()

  return (
    
    <Routes>



      {/* DashBoard Routes */}
      <Route  path="/admin/dashboard"  element={ <HomeDashboard /> } />
      <Route  path="/admin/product-upload"  element={ <ProductUpload  /> } />
      <Route  path="/admin/dashboard-analytics"  element={ <Analyticsdashboard  /> } />
      <Route  path="/admin/product-upload"  element={ <ProductUpload  /> } />
      <Route  path="/admin/orders"  element={ <Orders  /> } />
      <Route  path="/admin/dashboard-product"  element={ <DashboardProduct  /> } />
      <Route  path="/admin/ordersdetails/:id"  element={ <OrderDetails /> } />
      <Route  path="/admin/dashboard-profile"  element={ <Profile /> } />
      <Route  path="/admin/dashboard-edit/:id"  element={ <EditProduct /> } />
      <Route path="/admin/dashboard/about-product/:id"  element={ <AboutProduct />}  />
      <Route path="/admin/dashboard/profile"  element={ <Profile />}  />
      <Route path="/admin/dashboard/edit-profile/:id"  element={ <EditProfile />}  />

      <Route path="/admin/dashboard/notification"  element={ <  DashboardNotification />}  />
      <Route path="/admin/dashboard/notification/:id"  element={ <NotificationDetails />}  />

      <Route  path="/admin/order-history"  element={ <OrderHistory  /> } />



{/* No page Found */}
<Route path="*"  element={<NoPageFound />}  />
    </Routes>
  );
};

export default AdminRouts;
