import React from "react";

const ExpenseDate = (props) => {
  const myDate = new Date(props.date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return <span className={props.className}>{myDate}</span>;
};

export default ExpenseDate;
