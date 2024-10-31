import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/features/posts/store.js";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storedUsers || []);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      dispatch(loginUser(user));
      navigate("/products");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <form onSubmit={handleLogin}>
          <h2 className={styles.titleInput}>Вход</h2>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Логин"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.inputField}
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <input
              className={styles.inputRadio}
              type="radio"
              value="Я согласен получать обновления на почту"
            />
            <label for="huey">Я согласен получать обновления на почту</label>
          </div>
          {error && <div>{error}</div>}
          <button type="submit" className={styles.buttonRegister}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
