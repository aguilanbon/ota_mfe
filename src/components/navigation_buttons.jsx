function NavigationButton({ icon, label, isActive, onClick }) {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer transition-colors justify-center ${
        isActive ? "hover:text-primary" : "hover:text-gray-300"
      }`}
      onClick={onClick}
    >
      <button className="" aria-label={`${label} Navigation Button`}>
        {icon}
      </button>
      <span className="text-xs">{label}</span>
    </div>
  );
}

export default NavigationButton;
