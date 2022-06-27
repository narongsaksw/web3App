import React from "react";
import { SellerCard } from "../atoms/Card";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import user4 from "../../images/user4.png";
import user5 from "../../images/user5.png";

const users = [
  { name: "Mia Ayana", price: "5.250", src: user1 },
  { name: "Rian Leon", price: "4.932", src: user2 },
  { name: "Lady Young", price: "4.620", src: user3 },
  { name: "Black glass", price: "4.125", src: user4 },
  { name: "Budhiman", price: "3.921", src: user5 },
];

const TopSellers = () => {
  return (
    <div className="mb-8">
      <div className="text-[#1B1A21] dark:text-white text-xl font-semibold mb-5">
        Top Sellers
      </div>
      <div className="flex flex-row justify-start gap-3 overflow-x-auto overflow-hidden">
        {users.map((user, index) => (
          <SellerCard key={index} rank={index + 1} {...user} />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
