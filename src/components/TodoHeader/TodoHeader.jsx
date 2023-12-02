import React from "react";
import ArrowDown from "../../assets/arrow-down.svg";
import MenuDots from "../../assets/menu-dots.svg";
import styles from "./TodoHeader.module.css";

const TodoHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>
        <span>Today</span>
        <img className={styles.img} src={ArrowDown} alt="" />
      </h1>
      <span className={styles.headerSubtitle}>
        <img className={styles.img} src={MenuDots} alt="" />
      </span>
    </div>
  );
};

export default TodoHeader;
