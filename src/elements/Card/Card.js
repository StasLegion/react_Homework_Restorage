import React from "react";
import styles from "./card.module.css";

function Card(widhtCard, heightCard) {
  const inlaneStyle = {
    widht: widhtCard,
    height: heightCard,
  };

  return (
    <div className={styles.card} style={inlaneStyle}>
      <img src="" alt="" className="cardPreview" />
      <h2 className="cardTitle">Устрицы по рокфеллеровски</h2>
      <p className="cardDiscription">
        Значимость этих проблем очевидна, что укрепление и развитие структуры.
      </p>
      <div className="cardBottom">
        <div className="cardPrice">2 700 р</div>
        <div className="btn">+</div>
      </div>
    </div>
  );
}

export default Card;
