import NavigationButton from "./navigation_buttons";

function NavigationBar() {
  return (
    <div className="h-[60px] bg-white flex w-full justify-between px-10">
      <NavigationButton label={"wow"} />
    </div>
  );
}

export default NavigationBar;
