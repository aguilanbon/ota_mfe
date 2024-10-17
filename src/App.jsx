import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import NavigationBar from "./components/navigation_bar";

// View components
const HomeView = () => (
  <div className="flex flex-grow flex-col items-start justify-start self-start h-full">
    <h2 className="text-2xl font-bold text-gray-800">Home View</h2>
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
    <>
      <div className="flex flex-col min-h-screen bg-primary min-w-screen">
        <Header />
        <div className="flex flex-grow items-center justify-center bg-offWhite rounded-t-xl p-6">
          {renderView()}
        </div>
        <NavigationBar
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      </div>
    </>
  );
}

export default App;
