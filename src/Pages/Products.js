import Header from "../components/blocks/Header/Header.js";
import Card from "../elements/Card/Card.js";
import styles from "./products.module.css";

import { useSelector, useDispatch } from "react-redux";

function Products() {
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.mainProducts}>
            {products.map((product) => (
              <div className="">
                <Card
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
