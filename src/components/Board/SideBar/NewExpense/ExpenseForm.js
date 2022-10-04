import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../UI/Button/Button";
import styles from "./ExpenseForm.module.css";
import ExpenseType from "./ExpenseType";
import ExpenseContext from "../../../Store/expense-context";

const expenseTitleRegex = /^[a-zA-z0-9\s]+$/;

const ExpenseForm = (props) => {
  const expenseCtx = useContext(ExpenseContext);
  const [expenseType, setExpenseType] = useState({
    value: "",
    icon: "",
  });
  const expenseTitle = useRef();
  const expenseAmount = useRef();
  const expenseDate = useRef();

  // Handling function to get expense type from child component.
  const getExpenseType = (expense_type) => {
    setExpenseType({
      value: expense_type.value,
      icon: expense_type.icon,
    });
  };

  // Form submit handling function
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredExpenseTitle = expenseTitle.current.value.trim();
    const enteredExpenseType = expenseType.value;
    const enteredExpenseAmount = +expenseAmount.current.value;
    const enteredExpenseDate = expenseDate.current.value;

    // Form Validation

    // 1) Expense Title validation
    if (
      enteredExpenseTitle.length === 0 ||
      !expenseTitleRegex.test(enteredExpenseTitle)
    ) {
      toast.error(
        "Invalid Expense Title (empty input or contains special characters)."
      );
    }

    // 2) Expense Type validation
    else if (enteredExpenseType.length === 0) {
      toast.error("Invalid Expense Type (empty input).");
    }

    // 3) Expense Amount validation
    else if (enteredExpenseAmount <= 0) {
      toast.error("Invalid Expense Amount (less than and equal to 0).");
    }

    // 4) Expense Date validation
    else if (enteredExpenseDate.length === 0) {
      toast.error("Invalid Expense Date (empty input).");
    }
    // Otherwise:
    else {
      const expenseData = {
        id: `e${(Math.random() * 1000).toFixed(2)}`,
        title: enteredExpenseTitle,
        type: enteredExpenseType,
        icon: expenseType.icon,
        amount: +enteredExpenseAmount.toFixed(2),
        date: enteredExpenseDate,
      };

      // Showing success toast notification
      toast.success(
        `Your new expense added Successfully. "${expenseData.title}"`
      );

      // Reset form input
      expenseTitle.current.value = "";
      expenseAmount.current.value = "";
      expenseDate.current.value = "";
      setExpenseType({ value: "", icon: "" });

      // Adding expense data into expense context.
      expenseCtx.addExpense(expenseData);
    }
  };

  return (
    <div className={styles.new_expense}>
      {ReactDOM.createPortal(
        <ToastContainer
          theme="colored"
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
        />,
        document.getElementById("overlay")
      )}
      <h2>New Expense</h2>
      <form className={styles.expense_form} onSubmit={formSubmitHandler}>
        <div className={styles.expense_title}>
          <label htmlFor="expense_title">Expense Title</label>
          <input
            type="text"
            id="expense_title"
            autoComplete="off"
            placeholder="A new Mobile"
            ref={expenseTitle}
          />
        </div>
        <div className={styles.expense_type}>
          <ExpenseType
            onGetExpenseType={getExpenseType}
            selectedValue={expenseType.value}
          />
        </div>
        <div className={styles.expense_amount}>
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            autoComplete="off"
            placeholder="200.45"
            ref={expenseAmount}
          />
        </div>
        <div className={styles.expense_date}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" ref={expenseDate} />
        </div>
        <div className={styles.form_actions}>
          <Button type="submit" className={styles.add_expense_btn}>
            + Add Expense
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
