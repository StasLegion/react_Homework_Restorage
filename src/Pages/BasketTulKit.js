import Footer from "../components/blocks/Footer/Footer.js";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  increment,
  decrement,
} from "../store/features/counter/counterSlice.js";
import { fetchPosts, filterPosts } from "../store/features/posts/postsSlice.js";

function Basket() {
  const count = useSelector((state) => state.counter.count); // Используем опциональную цепочку
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <hr />

      <input
        type="text"
        onChange={(e) => {
          dispatch(filterPosts(e.target.value));
        }}
      />

      {filteredPosts.map((item) => {
        return <div className="">{item.title}</div>;
      })}

      <Footer />
    </div>
  );
}

export default Basket;
