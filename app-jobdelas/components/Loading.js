import { useEffect, useState } from "react";
import Logo from "./Logo";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  const [exibirAnimacao, setExibirAnimacao] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExibirAnimacao(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!exibirAnimacao) {
    return null;
  }

  return (
    <div className={styles.estilo_loading}>
      <Logo />
      <p className={styles.loadingText}>Aguarde um momento...</p>
    </div>
  );
};

export default Loading;
