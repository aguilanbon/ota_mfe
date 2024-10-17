import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import NavigationBar from "./components/navigation_bar";
import ItemCard from "./components/item_card";

const HomeView = () => (
  <div className="flex flex-col w-full h-full">
    <div className="flex flex-col space-y-6 pb-6">
      <div className="flex flex-row justify-between items-baseline">
        <h2 className="text-xl font-bold text-gray-800">For You</h2>
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
    <div className="flex flex-col space-y-6 pb-6">
      <div className="flex flex-row justify-between items-baseline">
        <h2 className="text-xl font-bold text-gray-800">Hot Products</h2>
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
    <div className="flex flex-col space-y-6 pb-6">
      <div className="flex flex-row justify-between items-baseline">
        <h2 className="text-xl font-bold text-gray-800">Featured</h2>
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
  </div>
);

const CouponsView = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <h2 className="text-lg font-bold text-gray-800 align-middle">
      Coming soon...
    </h2>
  </div>
);

const ProfileView = () => (
  <div className="flex items-center justify-center h-full">
    <h2 className="text-lg font-bold text-gray-800 align-middle">
      Coming soon...
    </h2>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState("home");

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomeView />;
      case "coupons":
        return <CouponsView />;
      case "profile":
        return <ProfileView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-primary min-w-screen">
      <Header />
      <div className="flex flex-1 items-center justify-center bg-offWhite rounded-t-xl p-6 overflow-y-auto">
        {renderView()}
      </div>
      <NavigationBar
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  );
}

export default App;
