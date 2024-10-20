// const ComponentDiv = () => {
//   const styleCardProducts = {
//     width: "312px",
//     height: "522px",
//   };
//   const styleBasketProducts = {
//     width: "622px",
//     height: "250px",
//   };
//   return <div style={true ? styleCardProducts : styleBasketProducts}> </div>;
// };

// export default ComponentDiv;

import React from "react";

const ComponentDiv = ({ isInBasket }) => {
  const styleCardProducts = {
    width: "312px",
    height: "522px",
    display: "flex",
    flexDirection: "column",
  };
  // Отображение карточек в колонку
  const styleBasketProducts = {
    width: "622px",
    height: "250px",
    display: "flex",
    flexDirection: "row",
  };
  // Отображение товаров в ряд
  return (
    <div style={isInBasket ? styleBasketProducts : styleCardProducts}>
      {/* Ваш контент здесь */}
    </div>
  );
};

export default ComponentDiv;
