import React from "react";
import { shortenAddress } from "../../../utils/shortenAddress";
import useFetch from "../../../hooks/useFetch";

interface Props {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  url: string;
}

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}: Props) => {
  const gif = useFetch({ keyword });
  return (
    <div className="flex flex-col items-center bg-white dark:bg-[#2A2D3A] border dark:border-[#2A2D3A] rounded-[10px] p-2 w-fit drop-shadow-lg">
      <img
        src={gif || url}
        className="rounded-[10px] w-[130px] h-[143px] mb-2"
      />
      <div>
        <div className="text-[10px] dark:text-white">
          From:{" "}
          <span className="font-semibold text-[#2D2E36] dark:text-white">
            {shortenAddress(addressFrom)}
          </span>
        </div>
        <div className="text-[10px] dark:text-white">
          To:{" "}
          <span className="font-semibold text-[#2D2E36] dark:text-white">
            {shortenAddress(addressTo)}
          </span>
        </div>
        <div className="text-[10px] dark:text-white">
          Amount:{" "}
          <span className="font-semibold text-[#2D2E36] dark:text-white">
            {amount} ETH
          </span>
        </div>
        <div className="text-[10px] dark:text-white">
          Message:{" "}
          <span className="font-semibold text-[#2D2E36] dark:text-white">
            {message}
          </span>
        </div>
        <div className="text-[10px] dark:text-white">
          Date:{" "}
          <span className="font-semibold text-[#2D2E36] dark:text-white">
            {timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
