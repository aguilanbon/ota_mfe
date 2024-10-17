import ItemCard from "./item_card";

function LaneComponent({ laneLabel }) {
  return (
    <div className="flex flex-col space-y-6 pb-6">
      <div className="flex flex-row justify-between items-baseline">
        <h2 className="text-xl font-bold text-gray-800">{laneLabel}</h2>
        <p className="text-xs text-primary">See all</p>
      </div>
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex flex-row space-x-4 min-w-min">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
}

export default LaneComponent;
