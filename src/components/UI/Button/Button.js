import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const classes = `${styles.btn} ${props.className}`;

  return (
    <button
      className={classes}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
