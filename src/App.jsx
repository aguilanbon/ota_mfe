import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import NavigationBar from "./components/navigation_bar";
import HomeView from "./views/home_view";
import CouponsView from "./views/coupon_view";
import ProfileView from "./views/profile_view";

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
    <div className="flex flex-col h-screen bg-primary min-w-screen font-redHat">
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
