import ItemCard from "./item_card";

function LaneComponent({ laneLabel, itemList }) {
  // Return null if no items to prevent empty sections
  if (!itemList || itemList.length === 0) return null;

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-row justify-between items-baseline">
        <h2 className="text-xl font-bold text-gray-800">{laneLabel}</h2>
        <button className="text-xs text-primary hover:text-primary/80">
          See all
        </button>
      </div>
      <div className="w-full overflow-x-auto py-2">
        <div className="flex flex-row space-x-4 min-w-min">
          {itemList.map((product, index) => (
            <ItemCard
              key={`${product.product_name}-${index}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default LaneComponent;
