import React, { useState, useEffect, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { PrimaryButton, SecondaryButton } from "../atoms/Button";
import LogoWithName from "../molecules/LogoWithName";

import { TransactionContext } from "../../context/TransactionContext";

const menus = ["Market", "Exchange", "Tutorials", "Wallets"];

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer dark:text-white ${classProps}`}>
      {title}
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const isDarkTheme = window.matchMedia("(prefers-color-scheme): dark").matches;
  useEffect(() => {
    if (isDarkTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full flex justify-between items-center p-3 md:px-10 border-b border-[#E3E1E3]">
      <LogoWithName />
      <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {menus.map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <div className="flex gap-2.5">
          {!currentAccount ? (
            <SecondaryButton title="Connect" onClick={connectWallet} />
          ) : (
            <PrimaryButton title="Create" />
          )}
          {!toggleMenu && (
            <button
              type="button"
              onClick={handleThemeSwitch}
              className=" bg-indigo-500 text-lg p-1 rounded-md"
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </button>
          )}
        </div>
      </ul>
      <div className="flex relative md:hidden">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-[#888888] md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-[#888888] md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {menus.map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
            <button
              type="button"
              onClick={handleThemeSwitch}
              className=" bg-indigo-500 text-lg p-1 rounded-md my-2 mx-4"
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
