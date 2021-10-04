import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = (props) => {
  const { onClick, type, btnStyle, btnSize, children } = props;
  const checkButtonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkButtonSize = STYLES.includes(btnSize) ? btnSize : SIZES[0];

  const btnClass = `btn ${checkButtonStyle} ${checkButtonSize}`;

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button className={btnClass} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
