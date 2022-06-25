import React from "react";
import SellerCard from "./Card/SellerCard";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import user4 from "../../images/user4.png";
import user5 from "../../images/user5.png";

const users = [
  { name: "Mia Ayana", price: "5.250 ETH", src: user1 },
  { name: "Rian Leon", price: "4.932 ETH", src: user2 },
  { name: "Mia Ayana", price: "5.250 ETH", src: user3 },
  { name: "Mia Ayana", price: "5.250 ETH", src: user4 },
  { name: "Mia Ayana", price: "5.250 ETH", src: user5 },
];

const TopSellers = () => {
  return (
    <>
      <div className="text-[#1B1A21] text-xl font-semibold mb-5">
        Top Sellers
      </div>
      <div className="flex flex-row justify-start md:justify-between overflow-hidden">
        {users.map((user, index) => (
          <SellerCard key={index} rank={index + 1} {...user} />
        ))}
      </div>
    </>
  );
};

export default TopSellers;
