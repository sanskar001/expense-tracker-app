import { useContext } from "react";
import styles from "./ExpenseFilter.module.css";
import ExpenseContext from "../../Store/expense-context";

const ExpenseFilter = (props) => {
  const expenseCtx = useContext(ExpenseContext);

  const filterChangeHandler = (event) => {
    expenseCtx.changeFilter(event.target.value);
  };

  return (
    <div className={styles.expense_filter}>
      <h3>Activity</h3>
      <div className={styles.filter}>
        <input
          name="expense_filter"
          type="radio"
          id="lifetime"
          value="lifetime"
          onChange={filterChangeHandler}
          checked={expenseCtx.filter === "lifetime"}
        ></input>
        <label htmlFor="lifetime">Lifetime</label>
        <input
          name="expense_filter"
          type="radio"
          id="7 days"
          value="7 days"
          onChange={filterChangeHandler}
          checked={expenseCtx.filter === "7 days"}
        ></input>
        <label htmlFor="7 days">7 days</label>
        <input
          name="expense_filter"
          type="radio"
          id="28 days"
          value="28 days"
          onChange={filterChangeHandler}
          checked={expenseCtx.filter === "28 days"}
        ></input>
        <label htmlFor="28 days">28 days</label>
        <input
          name="expense_filter"
          type="radio"
          id="90 days"
          value="90 days"
          onChange={filterChangeHandler}
          checked={expenseCtx.filter === "90 days"}
        ></input>
        <label htmlFor="90 days">90 days</label>
      </div>
    </div>
  );
};

export default ExpenseFilter;
