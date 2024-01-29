import { useAuth } from "@/hooks/useAuth";
import NavbarSocial from "@/components/NavbarSocial";
import Head from "next/head";
import styles from "../../../styles/Vagas.module.css";

import CursoInfo from "@/components/CursoInfo";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import ListaAulas from "@/components/ListaAulas";
import Chat from "@/components/Chat";

export default function Aulas() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }
  return (
    <AuthenticatedRoute>
      <Head>
        <title> Job Delas </title>
      </Head>
      <main className={styles.container_principal}>
        <NavbarSocial />
        <Chat />
        <div className={styles.container_conteudo}>
          <CursoInfo />
          <ListaAulas />
        </div>
      </main>
    </AuthenticatedRoute>
  );
}
