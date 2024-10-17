import { useState } from "react";
import { PiImageBroken } from "react-icons/pi";

function ItemCard({ product }) {
  const {
    product_name,
    product_image,
    brand_name,
    brand_image,
    title,
    progress = 0,
  } = product;

  const [productImageError, setProductImageError] = useState(false);
  const [brandImageError, setBrandImageError] = useState(false);

  return (
    <div className="w-[183px] h-[250px] md:h-[272px] md:w-[220px] xl:h-[310px] xl:w-[248px]   rounded-xl shadow-md bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transform transition-transform hover:-translate-y-2">
      <div className="relative">
        {/* Product Image */}
        <div className="h-[120px] md:h-[140px] xl:h-[160px] bg-gray-300">
          {product_image && !productImageError ? (
            <img
              src={product_image}
              alt={product_name}
              className="w-full h-full object-cover"
              onError={() => setProductImageError(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-[120px] md:h-[140px] xl:h-[160px] bg-gray-300">
              <PiImageBroken height={120} width={120} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-grow p-2 space-y-2">
        <div className="w-full flex flex-row content-between justify-between space-x-4">
          {/* Brand Logo */}
          {brand_image && !brandImageError ? (
            <img
              src={brand_image}
              alt={brand_name}
              className="h-4 rounded-sm"
              onError={() => setBrandImageError(true)}
            />
          ) : (
            <PiImageBroken height={44} width={44} />
          )}
          {/* Brand Name*/}
          {brand_name && (
            <div className="flex items-end truncate">
              <h3 className="text-xs text-right font-semibold text-gray-500 underline">
                {brand_name || "Brand Name"}
              </h3>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {/* Product name */}
          <p className="text-sm xl:text-lg line-clamp-1 font-bold flex-grow ">
            {product_name || "Product Name"}
          </p>
          {/* Product Title */}
          <p className="text-xs xl:text-sm line-clamp-2 font-medium h-[30px] xl:h-[38px] flex-grow text-gray-500">
            {title || "Product title"}
          </p>
        </div>
        {/* Progress Bar */}
        {progress > 0 && (
          <div className="flex flex-grow">
            <div className="w-full bg-gray-200 rounded-sm h-1.5 ">
              <div
                className="bg-primary h-1.5 rounded-sm"
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
