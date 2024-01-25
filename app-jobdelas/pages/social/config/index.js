import { ConfiguracaoUser } from "@/components/FormPerfil";
import { SidePerfil } from "@/components/SidePerfil";
import Head from "next/head";
import styles from "../../../styles/Perfil.module.css";
import NavbarSocial from "@/components/NavbarSocial";

export default function Config() {
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
