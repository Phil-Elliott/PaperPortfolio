import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-Tertiary text-white rounded-sm py-2 px-3 font-semi-bold text-lg hover:bg-Secondary duration-500 z-10">
      {children}
    </button>
  );
};

export default Button;
