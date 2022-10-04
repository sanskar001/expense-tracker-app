import React from "react";
import ReactDOM from "react-dom";
import logo from "../../../img/logo.svg";
import styles from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const Window = (props) => {
  return (
    <div className={styles.window}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onCloseModal} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Window>{props.children}</Window>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
