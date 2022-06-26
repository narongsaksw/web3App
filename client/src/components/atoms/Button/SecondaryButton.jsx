import React from "react";

const SecondaryButton = ({ title, classProps, ...rest }) => {
  return <button className={`border-gradient dark:before:bg-[#24252D] ${classProps}`} title={title} {...rest}></button>;
};

export default SecondaryButton;
