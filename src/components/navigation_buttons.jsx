function NavigationButton({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <button className="p-2">{icon}</button>
      <span className="text-xs">{label}</span>
    </div>
  );
}

export default NavigationButton;
