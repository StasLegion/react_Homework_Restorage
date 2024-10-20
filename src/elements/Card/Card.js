import React from "react";
import styles from "./card.module.css";
import ButtonCircle from "../../ui/ButtonCircle/ButtonCircle";

function Card({ title, description, price }) {
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
    <div className={styles.card} style={styleCardProducts}>
      <img src="" alt="" className="cardPreview" />
      <h2 className="cardTitle">{title}</h2>
      <p className="cardDiscription">{description}</p>
      <div className="cardBottom">
        <div className="cardPrice">{price} р</div>
        <ButtonCircle />
      </div>
    </div>
  );
}

export default Card;
