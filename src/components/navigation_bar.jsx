import NavigationButton from "./navigation_buttons";
import { RiCoupon2Line } from "react-icons/ri";
import { GoHome, GoPerson } from "react-icons/go";

function NavigationBar() {
  return (
    <div className="h-[60px] bg-white flex w-full justify-around text-primary">
      <NavigationButton icon={<GoHome height={24} />} label={"Home"} />
      <NavigationButton
        icon={<RiCoupon2Line height={24} />}
        label={"My Coupons"}
      />
      <NavigationButton icon={<GoPerson height={24} />} label={"Me"} />
    </div>
  );
}

export default NavigationBar;
