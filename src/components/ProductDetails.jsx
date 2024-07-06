import { useParams } from 'react-router-dom';
import { productdata } from '../data/product';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productdata.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.pics} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <span>{product.stock}</span>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductDetails;
