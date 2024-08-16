import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Routs from "./routs/routs.jsx";
import { useLocation } from "react-router-dom";

function App() {


  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
   const isProductUpload = location.pathname.startsWith('/product-upload')


  return (
    <>
      <div className="overflow-x-hidden">
        {!isDashboard && !isProductUpload && <Header />}
        <Routs />
        {!isDashboard && !isProductUpload  && <Footer />}
      </div>
    </>

  );
}

export default App;
