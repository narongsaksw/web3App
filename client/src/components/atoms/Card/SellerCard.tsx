import React from "react";
import verifyIcon from "../../../images/verify.png";

interface Props {
  rank: number;
  name: string;
  price: string;
  src: string;
}

const SellerCard = ({ rank, name, price, src }: Props) => {
  return (
    <div className="relative w-[130px] md:w-[180px] bg-white dark:bg-[#2A2D3A] border border-[#E3E1E3] dark:border-[#2A2D3A] rounded-[20px] flex flex-col justify-center items-center pt-8 md:pt-11 pb-2 md:pb-5 px-6">
      <div className="absolute top-1 left-1 flex justify-center items-center bg-[#DA18A3] rounded-full w-[33px] h-[33px] dark:text-white">
        {rank}
      </div>
      <div className="relative">
        <div className="w-[77px] h-[77px] rounded-full overflow-hidden">
          <img src={src} />
        </div>
        <img src={verifyIcon} className="absolute bottom-0 right-0" />
      </div>
      <div className="text-[#1B1A21] font-semibold w-full text-center truncate dark:text-white">
        {name}
      </div>
      <div className="dark:text-white">
        {" "}
        <span className="font-semibold">{price}</span> ETH
      </div>
    </div>
  );
};

export default SellerCard;
