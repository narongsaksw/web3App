import React from "react";
import likeIcon from "../../../../images/like.png";
import unlikeIcon from "../../../../images/unlike.png";

const NFTCard = ({ name, src, price, like, likeAmount }) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-[#2A2D3A] border dark:border-[#2A2D3A] rounded-[10px] p-2 w-fit drop-shadow-lg">
      <img src={src} className="rounded-[10px] w-[130px]" />
      <div className="text-[#1B1A21] dark:text-white font-semibold text-center text-xs mt-3">
        {name}
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-[10px] dark:text-white">
          <span className="font-semibold text-[#2D2E36] dark:text-white">
            {price}
          </span>{" "}
          ETH
        </div>
        <div className="flex gap-1 justify-center">
          <img src={like ? likeIcon : unlikeIcon} className="w-3 h-3" />
          <div className="text-[10px] dark:text-white">{likeAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
