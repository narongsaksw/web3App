import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement>  {
  title: string;
  classProps?: string;
}

const SecondaryButton = ({ title, classProps, ...rest }: Props) => {
  return <button className={`border-gradient dark:before:bg-[#24252D] ${classProps}`} title={title} {...rest}></button>;
};

export default SecondaryButton;
