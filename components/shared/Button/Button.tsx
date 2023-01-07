import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-Tertiary text-Primary rounded-sm py-3 px-5 font-medium text-lg">
      {children}
    </button>
  );
};

export default Button;
