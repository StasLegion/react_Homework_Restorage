import Header from "../components/blocks/Header/Header.js";
import Card from "../elements/Card/Card.js";
import styles from "./products.module.css";

function Products() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.mainProducts}>
            <Card widhtCard="312px" heightCard="522px" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
