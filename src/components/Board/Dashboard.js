import { useContext, useEffect } from "react";
import styles from "./Dashboard.module.css";
import SideBar from "./SideBar/SideBar";
import Expenses from "./Expenses/Expenses";
import Summary from "./Summary/Summary";
import ExpenseContext from "../Store/expense-context";

// Return last nth date from today.
const getPastDate = function (num) {
  const onday = 86400000;
  const currentDate = new Date();

  return new Date(currentDate.getTime() - num * onday);
};

const DashBoard = (props) => {
  const { expenseItems, filter: expenseFilter } = useContext(ExpenseContext);

  // Save expense item into local storage
  useEffect(() => {
    localStorage.setItem(
      "expenseTracker",
      JSON.stringify({ username: props.username, expenseItems: expenseItems })
    );
  }, [expenseItems, props.username]);

  // Expense filtering method
  const expenseFilterHandler = () => {
    switch (expenseFilter) {
      case "7 days":
        return expenseItems.filter(
          (item) => Date.parse(item.date) > getPastDate(7).getTime()
        );
      case "28 days":
        return expenseItems.filter(
          (item) => Date.parse(item.date) > getPastDate(28).getTime()
        );
      case "90 days":
        return expenseItems.filter(
          (item) => Date.parse(item.date) > getPastDate(90).getTime()
        );
      default:
        return expenseItems;
    }
  };

  return (
    <div className={styles.dashboard}>
      <SideBar />
      <Expenses
        firstName={props.username.split(" ")[0]}
        expenseList={expenseFilterHandler()}
      />
      <Summary expenseList={expenseFilterHandler()} />
    </div>
  );
};

export default DashBoard;
