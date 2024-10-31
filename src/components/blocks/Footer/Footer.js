import { useSelector } from "react-redux";
import styles from "./footer.module.css";
function Footer() {
  const allPrice = useSelector((state) => state.products.allPriceInBasket);

  return (
    <footer className={styles.footer}>
      <div className="container-second">
        Заказ на сумму: <span className={styles.footerPrice}>{allPrice}</span>
      </div>

      {/* {count} */}
    </footer>
  );
}

export default Footer;
