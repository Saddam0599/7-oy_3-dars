const ProductItem = ({ product }) => {
  return (
    <li className="max-w[280px] max-h-[464px] rounded-[12px] shadow-md p-4 bg-white">
      <img src={product.image} alt={product.title} className="w-[280px] h-48 object-contain mb-4 transition-transform duration-300 transform hover:scale-110" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">Price: <span className="text-green-500 font-bold">${product.price}</span></p> 
    </li>
  );
};

export default ProductItem;
