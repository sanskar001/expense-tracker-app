import React from "react";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import styles from "./Expenses.module.css";

const Expenses = (props) => {
  // Getting firstname of user
  const userFirstName = props.firstName
    ? props.firstName[0].toUpperCase() + props.firstName.slice(1)
    : "";

  // Getting total expenses amount.
  const totalExpenseAmount = props.expenseList.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <div className={styles.expenses}>
      <header>
        <div>
          <h2>Hello, {userFirstName}</h2>
          <p>
            Date: <ExpenseDate date={new Date().toString()} />
          </p>
        </div>
        <div>
          <p>Total Expense</p>
          <h2>$ {totalExpenseAmount.toFixed(2)}</h2>
        </div>
      </header>
      <ExpenseFilter />
      <ExpenseChart items={props.expenseList} />
      <ExpenseList items={props.expenseList} />
    </div>
  );
};

export default Expenses;
