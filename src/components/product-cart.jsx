export default function ProductCart(props) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 cursor-pointer transform hover:-translate-y-1">
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        {props.name}
      </h2>

      <p className="text-gray-600 mb-3">
        {props.description}
      </p>

      <p className="text-lg font-semibold text-green-600 mb-4">
        Rs. {props.price}
      </p>

      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-xl shadow hover:opacity-90 transition">
        Add to Cart
      </button>
    </div>
  );
}
