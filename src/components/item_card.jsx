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
    <div className="w-[183px] h-[240px] rounded-xl shadow-md bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transform transition-transform hover:-translate-y-2">
      <div className="relative">
        {/* Product Image */}
        <div className="h-[120px] bg-gray-300">
          {product_image && (
            <img
              src={product_image}
              alt={product_name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col flex-grow p-2 space-y-2">
        {/* Brand Logo */}
        {brand_image && (
          <div className="w-44 flex-grow">
            <img src={brand_image} alt={brand_name} className="h-4 w-auto" />
          </div>
        )}
        {/* Product Name */}
        {/* <h3 className="font-medium text-md truncate flex-grow">
    {product_name || "Product Name"}
  </h3> */}
        {/* Product Title */}
        <p className="text-sm line-clamp-2 font-bold flex-grow">
          {title || "Product title"}
        </p>
        {/* Progress Bar */}
        {progress > 0 && (
          <div className="flex flex-grow">
            <div className="w-full bg-gray-200 rounded-full h-1.5 ">
              <div
                className="bg-primary h-1.5 rounded-full"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        )}
        {progress > 0 && (
          <div className="w-full flex-grow">
            <p className="text-xs">{`${Math.round(
              progress * 100
            )}% Complete`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
