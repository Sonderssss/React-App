import React from "react";

interface Props {
  children: string;
  color?: string; //you can use union operator to support other options
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button onClick={onClick} type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
