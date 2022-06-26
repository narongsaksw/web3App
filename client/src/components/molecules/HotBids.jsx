import React from "react";
import { NFTCard } from "../atoms/Card";
import bid1 from "../../../images/bid1.png";
import bid2 from "../../../images/bid2.png";
import bid3 from "../../../images/bid3.png";
import bid4 from "../../../images/bid4.png";
import bid5 from "../../../images/bid5.png";
import bid6 from "../../../images/bid6.png";

const bids = [
  {
    name: "Abstact Smoke Red...",
    price: "1.25",
    src: bid1,
    like: true,
    likeAmount: 92,
  },
  {
    name: "Mountain Landscape",
    price: "0.20",
    src: bid2,
    like: false,
    likeAmount: 25,
  },
  {
    name: "Paint Color on Wall",
    price: "0.55",
    src: bid3,
    like: true,
    likeAmount: 55,
  },
  {
    name: "Abstract Patern",
    price: "0.87",
    src: bid4,
    like: true,
    likeAmount: 82,
  },
  {
    name: "White Line Grafiti",
    price: "0.99",
    src: bid5,
    like: false,
    likeAmount: 22,
  },
  {
    name: "Abstract Triangle",
    price: "0.9",
    src: bid6,
    like: true,
    likeAmount: 71,
  },
];

const HotBids = () => {
  return (
    <>
      <div className="text-[#1B1A21] dark:text-white text-xl font-semibold mb-5">
        Hot Bids
      </div>
      <div className="flex flex-wrap gap-2 md:gap-5">
        {bids.map((bid, index) => (
          <NFTCard key={index} {...bid} />
        ))}
      </div>
    </>
  );
};

export default HotBids;
