import React from "react";
import ExpenseDate from "./ExpenseDate";
import Button from "../../UI/Button/Button";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const formatedTitle = props.title[0].toUpperCase() + props.title.slice(1);

  return (
    <div className={styles.expense_item}>
      <div className={styles.left}>
        <span className={styles[`${props.icon}`]}>
          <i className="material-symbols-outlined">{props.icon}</i>
        </span>
        <p>{formatedTitle}</p>
      </div>
      <div className={styles.right}>
        <ExpenseDate className={styles.expense_date} date={props.date} />
        <div>
          <p>$ {props.amount.toFixed(2)}</p>
          <Button className={styles.delete_btn} onClick={props.onRemove}>
            <i className="material-symbols-outlined">delete</i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
