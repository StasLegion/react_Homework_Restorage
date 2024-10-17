import React from "react";
import styles from "./header.module.css";
import "../../../index.js";
import Button from "../../../ui/Button/Button.js";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}> Basket products</h1>
          <div className={styles.headerInner}>
            <div className={styles.headerCounter}>
              <div className="">
                3 товара
                <br />
                на сумму 3 500 р
              </div>
            </div>

            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
