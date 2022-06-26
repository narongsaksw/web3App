import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "../atoms/Loader";
import { PrimaryButton } from "../atoms/Button";
import { FormInput as Input } from "../atoms/Input";

import { TransactionContext } from "../../context/TransactionContext";

import { shortenAddress } from "../../utils/shortenAddress";

const Form = () => {
  const { currentAccount, formData, handleChange, sendTransaction, loading } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  if (!currentAccount) {
    return null;
  }

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-start my-10 ">
      <div className="text-[#1B1A21] dark:text-white self-start text-xl font-semibold mb-5">
        Send NFTs
      </div>
      <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-[280px] my-5 eth-card white-glassmorphism">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>
            <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div>
            <p className="text-white font-light text-sm">
              {shortenAddress(currentAccount)}
            </p>
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center">
        <Input
          placeholder="Address To"
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Keyword (Gif)"
          name="keyword"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Enter Message"
          name="message"
          type="text"
          handleChange={handleChange}
        />

        {loading ? (
          <Loader />
        ) : (
          <PrimaryButton onClick={handleSubmit} title="Send Now" />
        )}
      </div>
    </div>
  );
};

export default Form;
