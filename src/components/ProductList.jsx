import ProductItem from "./ProductItem"; 

const ProductList = ({ products }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

    </ul>
  );
};

export default ProductList;
