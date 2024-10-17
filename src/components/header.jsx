import { useState } from "react";

function Header() {
  const [profileImageError, setProfileImageError] = useState(false);

  return (
    <div className="flex flex-col justify-center h-[94px] text-white">
      <div className="h-[46px] flex flex-row justify-start items-center">
        <div className="w-12 h-12 bg-orange-200 ml-4 mr-2 rounded-full flex items-center justify-center">
          {!profileImageError ? (
            <img
              src="https://picsum.photos/200/300"
              className="w-full h-full object-cover rounded-full"
              alt="Profile Image"
              onError={() => setProfileImageError(true)}
            />
          ) : (
            <div>N</div>
          )}
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
