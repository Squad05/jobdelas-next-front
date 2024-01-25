import { ConfiguracaoUser } from "@/components/FormPerfil";
import { SidePerfil } from "@/components/SidePerfil";
import Head from "next/head";
import styles from "../../../styles/Perfil.module.css";
import NavbarSocial from "@/components/NavbarSocial";
import { useAuth } from "@/hooks/useAuth";

export default function Config() {

  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Jobdelas</title>
      </Head>
      <main className={styles.main_principal}>
        <NavbarSocial />
        <div className={styles.container_conteudo}>
          <SidePerfil />
          <ConfiguracaoUser />
        </div>
      </main>
    </>
  );
}
