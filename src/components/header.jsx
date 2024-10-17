function Header() {
  return (
    <div className="flex flex-col justify-center h-[94px] text-white">
      <div className="h-[46px] flex flex-row justify-start items-center">
        <div className="w-12 h-12 bg-orange-200 mx-4 rounded-full flex items-center justify-center">
          <p>N</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Welcome to e-commerce</p>
          <p className="text-lg font-bold">Good morning, Nicole</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
