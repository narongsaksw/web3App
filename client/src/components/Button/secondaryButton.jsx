import React from "react";

const SecondaryButton = ({ title, ...rest }) => {
  return <button className="border-gradient" title={title} {...rest}></button>;
};

export default SecondaryButton;
