import Header from "../components/blocks/Header/Header.js";
import Card from "../elements/Card/Card.js";
import styles from "./products.module.css";
import { addProductsInBasket } from "../store/features/products/productSlice.js";

import { useNavigation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Products() {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  const addProduct = (e, product) => {
    e.stopPropagation();
    dispatch(addProductsInBasket(product));
  };
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.mainProducts}>
            {products.map((product) => (
              <div className="">
                <Card
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  onClickCircle={(e) => {
                    addProduct(e, product);
                  }}
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
