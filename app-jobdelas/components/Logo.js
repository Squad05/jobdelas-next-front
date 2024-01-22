import styles from "../styles/Logo.module.css";

export default function Logo() {
  return (
    <img
      src="/imagens/logo.png"
      alt="Logo Job delas"
      className={styles.estilo_logo}
    ></img>
  );
}
