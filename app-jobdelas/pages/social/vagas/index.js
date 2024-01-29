import Head from "next/head";
import NavbarSocial from "@/components/NavbarSocial";
import styles from "../../../styles/Vagas.module.css";
import { useAuth } from "@/hooks/useAuth";
import ListaVagas from "@/components/CardVagas";
import InicioPageVagas from "@/components/InicioPageVagas";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import Chat from "@/components/Chat";

export default function Vagas() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }

  return (
    <AuthenticatedRoute>
      <>
        <Head>
          <title>Jobdelas</title>
        </Head>
        <main className={styles.container_principal}>
          <NavbarSocial />
          <Chat />
          <div className={styles.container_conteudo}>
            <InicioPageVagas />
            <ListaVagas />
          </div>
        </main>
      </>{" "}
    </AuthenticatedRoute>
  );
}
