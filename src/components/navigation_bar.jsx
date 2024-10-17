import NavigationButton from "./navigation_buttons";
import { RiCoupon2Line } from "react-icons/ri";
import { GoHome, GoPerson } from "react-icons/go";

function NavigationBar({ currentView, setCurrentView }) {
  return (
    <div className="h-[60px] bg-white flex w-full justify-around text-primary">
      <NavigationButton
        icon={<GoHome size={24} />}
        label="Home"
        isActive={currentView === "home"}
        onClick={() => setCurrentView("home")}
      />
      <NavigationButton
        icon={<RiCoupon2Line size={24} />}
        label="My Coupons"
        isActive={currentView === "coupons"}
        onClick={() => setCurrentView("coupons")}
      />
      <NavigationButton
        icon={<GoPerson size={24} />}
        label="Me"
        isActive={currentView === "profile"}
        onClick={() => setCurrentView("profile")}
      />
    </div>
  );
}

export default NavigationBar;
