import { useState, useEffect } from "react";
import MobileSideDashboard from "../component/mobileSideDashboard";
import SidebarDashboard from "../component/sidebarDashboard";
import serachIcon from "/Image/search.svg";
import edit from "/Image/edit.svg";
import ProductPagination from "../component/pagination/productPagination";
import { Link } from "react-router-dom";

const DashboardProductMobile = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const vendorId = Number(localStorage.getItem("storeId"));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://django-7u8g.onrender.com/api/products/list/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
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
  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const currentProducts = products.slice(firstIndex, lastIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [showSide, setShowSide] = useState(false);
  const handleSide = () => setShowSide((prev) => !prev);

  return (
    <section className="flex flex-col w-full bg-[#F8F8F8] p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[20px] text-[#5075FF] font-bold">Store Products</h1>
        <button onClick={handleSide} className="text-[#1843E2] text-2xl bg-white rounded p-2 shadow-md">
          {showSide ? <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>}
        </button>
      </div>
      {showSide && <MobileSideDashboard />}
      <div className="flex gap-2 bg-white border rounded p-2 mb-4">
        <img src={serachIcon} alt="search" className="w-5 h-5" />
        <input type="text" placeholder="Search" className="w-full outline-none" />
      </div>
      <div className="bg-white rounded p-4 shadow-md">
        <h1 className="text-lg font-semibold text-[#1843E2] mb-3">All Products</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <div key={item?.id} className="bg-white p-2 rounded shadow-sm text-center">
                  <Link to={`/dashboard/about-product/${item?.id}`}>
                    <img src={item?.image || "default-image.png"} alt="product" className="w-full h-24 object-cover rounded" />
                    <h1 className="text-sm font-semibold mt-2">
                      {item?.name?.length > 10 ? `${item.name.substring(0, 10)}...` : item?.name}
                    </h1>
                    <p className="text-sm text-gray-600">₦{item?.unit_price || "No Price"}</p>
                    <span className="text-xs font-bold text-orange-500">{item?.stock !== undefined ? item.stock : "Out of stock"}</span>
                    <button className="flex items-center justify-center w-full mt-2 py-1 bg-blue-100 text-blue-600 rounded">
                      <span className="text-sm font-medium">Edit</span>
                      <img src={edit} alt="edit" className="w-4 h-4 ml-1" />
                    </button>
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
    </section>
  );
};

export default DashboardProductMobile;
