import NavigationButton from "./navigation_buttons";
import { RiCoupon2Fill, RiCoupon2Line } from "react-icons/ri";
import { GoHome, GoHomeFill, GoPerson, GoPersonFill } from "react-icons/go";

function NavigationBar({ currentView, setCurrentView }) {
  return (
    <div className="h-[60px] bg-white flex justify-around text-primary border-t-2 border-solid border-gray-100 shadow-sm">
      <NavigationButton
        icon={
          currentView === "home" ? (
            <GoHomeFill size={24} />
          ) : (
            <GoHome size={24} />
          )
        }
        label="Home"
        isActive={currentView === "home"}
        onClick={() => setCurrentView("home")}
      />
      <NavigationButton
        icon={
          currentView === "coupons" ? (
            <RiCoupon2Fill size={24} />
          ) : (
            <RiCoupon2Line size={24} />
          )
        }
        label="My Coupons"
        isActive={currentView === "coupons"}
        onClick={() => setCurrentView("coupons")}
      />
      <NavigationButton
        icon={
          currentView === "profile" ? (
            <GoPersonFill size={24} />
          ) : (
            <GoPerson size={24} />
          )
        }
        label="Me"
        isActive={currentView === "profile"}
        onClick={() => setCurrentView("profile")}
      />
    </div>
  );
}

export default NavigationBar;
