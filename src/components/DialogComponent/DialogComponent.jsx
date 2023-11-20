// DialogComponent.js
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./dialogComponent.module.scss";

const DialogComponent = ({ isOpen, setIsOpen, comment }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles.dialogEnter,
        enterActive: styles.dialogEnterActive,
        exit: styles.dialogExit,
        exitActive: styles.dialogExitActive,
      }}
      unmountOnExit
    >
      <div className={styles.ovelay}>
        <div className={styles.dialog}>
          <div className={styles.dialogContent}>
            <h2>Your comment</h2>
            <p>{comment}</p>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DialogComponent;
