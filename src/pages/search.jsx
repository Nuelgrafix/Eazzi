import { useState } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://django-7u8g.onrender.com/api/search/?q=${searchQuery}`
        );

        // Set stores and products separately
        setStores(response.data.stores || []);
        setProducts(response.data.products || []);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
      setLoading(false);
    } else {
      setStores([]);
      setProducts([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      {loading && <p>Loading...</p>}

      <h3>Stores</h3>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>{store.store_name}</li>
        ))}
      </ul>

      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
