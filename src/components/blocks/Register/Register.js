import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../store/features/posts/store.js"; // Импортируйте ваш action
import styles from "./register.module.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { username, password };
    dispatch(registerUser(userData)); // Ваша логика регистрации
    navigate("/login"); // Перенаправляем на страницу входа
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h2 className={styles.titleInput}>Регистрация</h2>
        <form onSubmit={handleRegister}>
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
          <button type="submit" className={styles.buttonRegister}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
