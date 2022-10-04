import { useContext, useState, useRef } from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";
import ExpenseContext from "../../Store/expense-context";
import Modal from "../../UI/Modal/Modal";
import DeleteModal from "../../UI/Modal/DeleteModal";

const ExpenseList = (props) => {
  const deleteItemId = useRef(null);
  const [isModalShown, setIsModalShown] = useState(false);
  const expenseCtx = useContext(ExpenseContext);
  const expenseItems = props.items;

  // Sorting expense data as per date (latest date on top)
  expenseItems.sort((prev, next) => {
    return Date.parse(next.date) - Date.parse(prev.date);
  });

  // Expense item remove handler method
  const removeExpenseItemHandler = (id) => {
    // 1. show delete modal
    setIsModalShown(true);

    // 2. get delete item id reference
    deleteItemId.current = id;
  };

  // method to confirmly delete expense item
  const confirmDeleteExpenseHandler = (id) => {
    // 1. remove item from context
    expenseCtx.removeExpense(id);

    // 2. close delete modal
    setIsModalShown(false);

    // 3. erase delete item id reference
    deleteItemId.current = "";
  };

  // method to close delete modal
  const closeModalHandler = () => {
    // 1. close delete modal
    setIsModalShown(false);

    // 2. erase delete item id reference
    deleteItemId.current = "";
  };

  const content =
    expenseItems.length > 0 ? (
      <ul>
        {expenseItems.map((item) => {
          return (
            <li key={item.id}>
              <ExpenseItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                date={item.date}
                amount={item.amount}
                onRemove={removeExpenseItemHandler.bind(null, item.id)}
              />
            </li>
          );
        })}
      </ul>
    ) : (
      <div className={styles.not_found}>No Expenses Found!</div>
    );

  // Deleted item by find() method
  const deleteItem = expenseCtx.expenseItems.find((item) => {
    return item.id === deleteItemId.current;
  });

  return (
    <div className={styles.expense_list}>
      {isModalShown && (
        <Modal onCloseModal={closeModalHandler}>
          <DeleteModal
            selectedItem={deleteItem}
            onCloseModal={closeModalHandler}
            onDelete={confirmDeleteExpenseHandler.bind(
              null,
              deleteItemId.current
            )}
          />
        </Modal>
      )}
      <h3>Recent Expenses</h3>
      {content}
    </div>
  );
};

export default ExpenseList;
