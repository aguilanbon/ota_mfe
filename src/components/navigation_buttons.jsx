function NavigationButton({ icon, label, isActive, onClick }) {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer transition-colors ${
        isActive ? "text-blue-600" : "text-primary hover:text-blue-400"
      }`}
      onClick={onClick}
    >
      <button className="p-2">{icon}</button>
      <span className="text-xs">{label}</span>
    </div>
  );
}

export default NavigationButton;
