import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 0,
      url: "",
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      price: 2700,
      count: 0,
    },
    {
      id: 1,
      url: "",
      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: 1600,
      count: 0,
    },
    {
      id: 2,
      url: "",
      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: 1820,
      count: 0,
    },
    {
      id: 3,
      url: "",
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      price: 2700,
      count: 0,
    },
    {
      id: 4,
      url: "",
      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: 1600,
      count: 0,
    },
    {
      id: 5,
      url: "",
      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: 1820,
      count: 0,
    },
    {
      id: 6,
      url: "",
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      price: 2700,
      count: 0,
    },
    {
      id: 7,
      url: "",
      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: 1600,
      count: 0,
    },
    {
      id: 8,
      url: "",
      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: 1820,
      count: 0,
    },
    {
      id: 9,
      url: "",
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
      price: 2700,
      count: 0,
    },
    {
      id: 10,
      url: "",
      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: 1600,
      count: 0,
    },
    {
      id: 11,
      url: "",
      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: 1820,
      count: 0,
    },
  ],
  basketProducts: [],
  counterInBasket: 0,
  allPriceInBasket: 0,
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
