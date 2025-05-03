import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileSideDashboard from "../component/mobileSideDashboard";
import SidebarDashboard from "../component/sidebarDashboard";
import ProductPagination from "../component/pagination/productPagination";
import serachIcon from "/Image/search.svg";
import edit from "/Image/edit.svg";

const DashboardProduct = () => {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const vendorId = Number(localStorage.getItem("storeId"));

  useEffect(() => {
    if (window.innerWidth < 768) {
      navigate("/store-product-mobile");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://django-7u8g.onrender.com/api/products/list/");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        const filtered = data.filter((item) => Number(item.vendor) === vendorId);
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (vendorId) fetchProducts();
  }, [vendorId]);

  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(firstIndex, firstIndex + ITEMS_PER_PAGE);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="flex w-full bg-[#F8F8F8]">
      {/* Sidebar */}
      <div className="max-w-[204px] w-full md:flex hidden bg-[#1843E2]">
        <SidebarDashboard />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:w-[82%] py-4 px-2 w-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-[#5075FF]">Store Product</h1>
          <div className="hidden md:flex gap-2 bg-white border border-gray-300 rounded-md p-2">
            <img src={serachIcon} alt="search_icon" className="w-5 h-5" />
            <input type="text" placeholder="Search" className="outline-none bg-white text-sm" />
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white p-4 md:p-8 mt-6 rounded-lg shadow-lg max-w-[1077px]">
          <h1 className="text-xl font-semibold text-[#1843E2]">All Products</h1>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
              {currentProducts.length > 0 ? (
                currentProducts.map((item) => (
                  <div key={item.id} className="max-w-[203px] w-full rounded-md">
                    <Link to={`/dashboard/about-product/${item.id}`}>
                      <div className="bg-white p-2 h-[403px] rounded-md">
                        <img src={item.image || "default-image.png"} alt="product" className="w-full h-56 object-cover rounded-md" />
                        <h1 className="text-lg font-bold pt-1">{item.name.length > 12 ? `${item.name.substring(0, 12)}...` : item.name}</h1>
                        <p className="text-gray-800 text-lg py-2">₦{item.unit_price || "No Price"}</p>
                        <span className="text-orange-500 font-bold">{item.stock !== undefined ? item.stock : "Out of stock"}</span>
                        <button className="flex justify-center w-full bg-[#F9F5FF] border rounded-md mt-2 py-2 text-[#1843E2] font-semibold">
                          Edit Item <img src={edit} alt="edit-icon" className="w-6 h-5 ml-2" />
                        </button>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          )}
          <ProductPagination paginate={paginate} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} totalItems={products.length} />
        </div>
      </div>
    </section>
  );
};

export default DashboardProduct;
