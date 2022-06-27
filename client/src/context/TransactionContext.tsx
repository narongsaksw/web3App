import React, { useEffect, useState, Dispatch } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

interface FormData {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

const formData:FormData = {
  addressTo: "",
  amount: "",
  keyword: "",
  message: "",
}

interface Transaction {
  addressTo: string;
  addressFrom: string;
  timestamp: string;
  message: string;
  keyword: string;
  amount: string;
  url: string;
}

interface TransactionContextInterface {
  connectWallet: () => void;
  currentAccount: string;
  formData: FormData,
  setFormData: Dispatch<FormData>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void,
  sendTransaction: () => void,
  transactions: Transaction[];
  loading: boolean;
}

const defaultValues: TransactionContextInterface = {
  connectWallet: () => {},
  currentAccount: "",
  formData,
  setFormData: () => {},
  handleChange: () => {},
  sendTransaction: () => {},
  transactions: [],
  loading: false
}

export const TransactionContext = React.createContext<TransactionContextInterface>(defaultValues);

//@ts-ignore
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract
};

export const TransactionProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))
  const [transactions, setTransactions] = useState([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const transactionContract = getEthereumContract()

      const availableTransactions = await transactionContract.getAllTransactions()

      const structuredTransactions = availableTransactions.map((transaction: any) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / (10 ** 18)
      }))

      setTransactions(structuredTransactions)
    } catch (error) {
      console.log('error', error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions()
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract = getEthereumContract()
      const transactionCount = await transactionContract.getTransactionCount()
      window.localStorage.setItem('transactionCount', transactionCount)
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      //get the data from the form
      const { addressTo, amount, keyword, message } = formData
      const transactionContract = getEthereumContract()
      const parsedAmount = ethers.utils.parseEther(amount)

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', // hex => decimal = 21000 GWEI = 0.000021 ether
          value: parsedAmount._hex, // amount(ether) => GWEI
        }]
      })

      const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

      setLoading(true)
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait()
      setLoading(false)
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount()

      setTransactionCount(transactionCount.toNumber())

      //@ts-ignore
      window.reload()
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions, loading }}>
      {children}
    </TransactionContext.Provider>
  );
};
