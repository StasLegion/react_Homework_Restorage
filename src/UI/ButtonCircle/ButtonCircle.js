import styles from "./buttonCircle.module.css";
function ButtonCircle({ onClickCircle }) {
  return (
    <div onClick={onClickCircle} className={styles.buttonCircle}>
      +
    </div>
  );
}

export default ButtonCircle;
