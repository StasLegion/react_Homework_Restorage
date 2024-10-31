import React from "react";
import ButtonCircle from "../../ui/ButtonCircle/ButtonCircle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productsInShoppingCard } from "../../store/features/products/productSlice";
import { type } from "@testing-library/user-event/dist/type";

function Card({
  id,
  count = "0",
  title,
  description,
  price,
  onClickCircle,
  styleCardProducts = "styleCardProducts",
  isShowCount = false,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className={styleCardProducts}
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      <img src="" alt="" className="cardPreview" />
      <h2 className="cardTitle">{title}</h2>
      <p
        className="cardDiscription"
        style={{
          display: isShowCount ? "none" : "block",
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: isShowCount ? "flex" : "none",
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              productsInShoppingCard({
                type: 1,
                id: id,
              })
            );
          }}
        >
          +
        </button>
        {count}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              productsInShoppingCard({
                type: 0,
                id: id,
              })
            );
          }}
        >
          -
        </button>
      </div>
      <div className="cardBottom">
        <div className="cardPrice">{price} р</div>
        <ButtonCircle onClickCircle={onClickCircle} />
      </div>
    </div>
  );
}

export default Card;
