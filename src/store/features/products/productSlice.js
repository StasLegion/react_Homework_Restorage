import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  products: [
    {
      id: 0,
      url: "../../../img/1.png",
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры Значимость этих проблем настолько очевидна, что укрепление и развитие структурыЗначимость этих проблем настолько очевидна, что укрепление и развитие структурыЗначимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      price: 2700,
      count: 0,
    },
    {
      id: 1,
      url: "../../../img/2.png",
      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: 1600,
      count: 0,
    },
    {
      id: 2,
      url: "../../../img/3.png",
      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: 1820,
      count: 0,
    },
  ],
  basketProducts: [],
  counterInBasket: 0,
  currentProduct: {},
  allPriceInBasket: 0,
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductsInBasket: (state, action) => {
      let currentProduct = { ...action?.payload };

      const findeIndex = state.basketProducts.findIndex((item) => {
        return item?.id === action.payload.id;
      });

      console.log("findeIndex", findeIndex);

      if (findeIndex === -1) {
        currentProduct.count += 1;
        state.basketProducts.push(currentProduct);
      } else {
        state.basketProducts[findeIndex].count++;
      }

      state.counterInBasket = state.basketProducts.reduce((acc, item) => {
        return acc + item.count;
      }, 0);

      state.allPriceInBasket = state.basketProducts.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
    updadeCurrentProduct: (state, action) => {
      console.log("action", action);

      state.currentProduct = state.products.find((item) => {
        return item.id === action.payload;
      });
    },
    productsInShoppingCard: (state, action) => {
      if (action.payload.type === -1) {
        state.basketProducts = state.basketProducts.filter((item) => {
          return item.id !== action.payload.id;
        });

        state.counterInBasket = state.basketProducts.reduce((acc, item) => {
          return acc + item.count;
        }, 0);

        state.allPriceInBasket = state.basketProducts.reduce((acc, item) => {
          return acc + item.price * item.count;
        }, 0);

        return;
      }

      const findeIndex = state?.basketProducts.findIndex((item) => {
        return item?.id === action.payload.id;
      });
      if (action.payload.type === 1) {
        state.basketProducts[findeIndex].count++;
      }

      if (action.payload.type === 0) {
        state.basketProducts[findeIndex].count--;

        if (state.basketProducts[findeIndex].count === 0) {
          state.basketProducts = state.basketProducts.filter((item) => {
            return item.id !== action.payload.id;
          });
        }
      }

      state.counterInBasket = state.basketProducts.reduce((acc, item) => {
        return acc + item.count;
      }, 0);

      state.allPriceInBasket = state.basketProducts.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductsInBasket,
  updadeCurrentProduct,
  productsInShoppingCard,
} = counterSlice.actions;

export default counterSlice.reducer;
