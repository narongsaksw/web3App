import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

import { TransactionCard } from "../atoms/Card";

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div
      className={`flex w-full items-center ${
        !currentAccount && "justify-center"
      }`}
    >
      <div className="flex flex-col">
        {currentAccount ? (
          <h3 className="text-[#1B1A21] dark:text-white text-xl font-semibold">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-[#1B1A21] dark:text-white text-xl font-semibold text-center">
            Connect your account to see the Latest transactions
          </h3>
        )}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
