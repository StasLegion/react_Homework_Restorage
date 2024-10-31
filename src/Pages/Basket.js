import {
  addProductsInBasket,
  productsInShoppingCard,
} from "../store/features/products/productSlice.js";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/blocks/Header/Header.js";
import Footer from "../components/blocks/Footer/Footer.js";
import Card from "../elements/Card/Card.js";
import styles from "./basket.module.css";
import { type } from "@testing-library/user-event/dist/type/index.js";

function Basket() {
  const basketProducts = useSelector((state) => state.products.basketProducts);
  const dispatch = useDispatch();

  return (
    <>
      <Header nameContainer="container-second" />
      <main className={styles.main}>
        <div className="container-second">
          {basketProducts.map((product) => (
            <Card
              styleCardProducts="styleBasketProducts"
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              count={product.count}
              isShowCount
              onClickCircle={(e) => {
                e.stopPropagation();
                dispatch(
                  productsInShoppingCard({
                    id: product.id,
                    type: -1,
                  })
                );
              }}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Basket;
