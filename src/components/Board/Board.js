import React, { useRef, useState } from "react";
import styles from "./Board.module.css";
import Modal from "../UI/Modal/Modal";
import UserNameForm from "../UI/Modal/UserNameForm";
import DashBoard from "./Dashboard";

const Board = (props) => {
  const user_name = useRef(
    JSON.parse(localStorage.getItem("expenseTracker"))?.username || ""
  );
  const [isModalShown, setIsModalShown] = useState(props.showModal);

  const closeModalHandler = () => {
    setIsModalShown(false);
    props.onShowHeroScreen();
  };

  const getUsername = (username) => {
    setIsModalShown(false);
    user_name.current = username;
  };

  return (
    <div className={styles.board}>
      {isModalShown && (
        <Modal onCloseModal={closeModalHandler}>
          <UserNameForm
            onSubmitUsername={getUsername}
            onCloseModal={closeModalHandler}
          />
        </Modal>
      )}
      <DashBoard username={user_name.current} />
    </div>
  );
};

export default Board;
