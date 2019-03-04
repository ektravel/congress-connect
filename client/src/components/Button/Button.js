import React from "react";

const Button = ({ type = "button", className, children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn", `btn-${type}`, className].join(" ")}
  >
    {children}
  </button>
);

export default Button;
