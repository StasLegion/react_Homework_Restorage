import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updadeCurrentProduct } from "../../store/features/products/productSlice";
import styles from "./currentProduct.module.css";
import Header from "../../components/blocks/Header/Header.js";

function CurrentProduct() {
  const currentProduct = useSelector((state) => state.products.currentProduct);
  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(params);
    dispatch(updadeCurrentProduct(+params.id));
  }, []);
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="container">
        <div className={styles.currentProductWrapper}>
          <div className={styles.boxImages}>img</div>
          <div className={styles.boxDiscription}>
            <h1 className={styles.currentProductTitle}>
              {currentProduct.title}
            </h1>
            <p className={styles.currentProductDescription}>
              {currentProduct.description}
            </p>
            <div>
              <span className={styles.currentProductPrice}>
                {currentProduct.price + " P"}
              </span>
              <button className={styles.btn}>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentProduct;
