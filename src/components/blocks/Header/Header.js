import React from "react";
import styles from "./header.module.css";
import "../../../index.js";
import Button from "../../../ui/Button/Button.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ nameContainer = "container" }) => {
  const count = useSelector((state) => state.products.counterInBasket);

  const allPrice = useSelector((state) => state.products.allPriceInBasket);
  return (
    <div className={styles.header}>
      <div className={nameContainer}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}> Basket products</h1>
          <div className={styles.headerInner}>
            <div className={styles.headerCounter}>
              <Link to={"/basket"}>Basket</Link>
              <div className="">
                {count} товара
                <br />
                на сумму {allPrice} р
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
