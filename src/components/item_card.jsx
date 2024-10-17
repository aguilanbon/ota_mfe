function ItemCard({ product }) {
  const {
    product_name,
    product_image,
    brand_name,
    brand_image,
    title,
    progress = 0,
  } = product;

  return (
    <div className="w-[183px] min-h-[220px] rounded-xl shadow-md bg-white overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="h-[120px] bg-gray-100">
          {product_image && (
            <img
              src={product_image}
              alt={product_name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col p-3 space-y-1">
        {/* Brand Logo */}
        {brand_image && (
          <div className="w-44">
            <img src={brand_image} alt={brand_name} className="h-4 w-auto" />
          </div>
        )}
        {/* Product Name */}
        <h3 className="font-medium text-md truncate">
          {product_name || "Product Name"}
        </h3>
        {/* Product Title*/}
        {/* <p className="text-md line-clamp-2 font-bold">
          {title || "Product description"}
        </p> */}
        {/* Progress Bar */}
        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div
              className="bg-primary h-1.5 rounded-full mb-2"
              style={{ width: `${progress * 100}%` }}
            />
            <p className="text-xs">{`${
              Math.round(progress) * 100
            }% Complete`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
