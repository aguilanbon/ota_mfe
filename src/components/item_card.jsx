function ItemCard() {
  return (
    <div className=" w-[183px] h-[220px] rounded-xl shadow-md  bg-white">
      <div className="h-[120px] bg-gray-100 rounded-t-lg" />
      <div className="flex flex-col p-2">
        <h3 className="font-medium">Item Title</h3>
        <p className="text-sm text-gray-600">Item description</p>
        <div className="mt-2 text-blue-600 font-bold">$99.99</div>
      </div>
    </div>
  );
}

export default ItemCard;
