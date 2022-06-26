import React from "react";

const LogoWithName = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-8 h-8 bg-gradient-to-r from-[#EB1484] to-[#C81CC5] rounded-[10px] flex justify-center items-center">
        <div className="w-4 h-4 rounded-full bg-transparent border-white border-2"></div>
      </div>
      <div className="text-[#1B1A21] dark:text-white font-bold ml-1">NFTMart</div>
    </div>
  );
};

export default LogoWithName;
