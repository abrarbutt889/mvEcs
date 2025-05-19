import { Link } from "react-router-dom";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2 sm:p-4">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <div className="w-full mb-4 h-80 sm:h-96">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <h3 className="mb-2 text-sm font-semibold">{product.name}</h3>
            <p className="text-sm font-medium tracking-tighter text-gray-600">
              $ {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
