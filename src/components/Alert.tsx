import React, { ReactNode } from "react";

interface Props {
  children: ReactNode; //when you use children you can pass text as child to a component
  //reactnode allows us to pass html elements in a component
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
