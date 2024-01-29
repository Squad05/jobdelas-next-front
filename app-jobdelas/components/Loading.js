import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  const [exibirAnimacao, setExibirAnimacao] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExibirAnimacao(false);
    
      router.push("/auth/logar");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [router]);

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
