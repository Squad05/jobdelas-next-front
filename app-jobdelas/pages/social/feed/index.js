import Head from "next/head";
import styles from "../../../styles/Feed.module.css";
import { useAuth } from "@/hooks/useAuth";
import { Box } from "@mui/material";
import NavbarSocial from "@/components/NavbarSocial";
import CriarPostagemCard from "@/components/CriarPostagemCard";
import ListaPostagemCard from "@/components/ListaPostagemCard";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import { SidePerfil } from "@/components/SidePerfil";
import SidePostagem from "@/components/SidePostagem";
import SideTarefas from "@/components/SideTarefas";

export default function Perfil() {
  return (
    <AuthenticatedRoute>
      <>
        <Head>
          <title>Jobdelas</title>
        </Head>
        <main className={styles.mainprincipal}>
          <NavbarSocial />
          <div className={styles.container_page}>
            <div className={styles.lateral}>
              <SideTarefas />
            </div>
            <div className={styles.feed}>
              <CriarPostagemCard />
              <ListaPostagemCard />
            </div>
            <div className={styles.lateral}>
              <SidePostagem />
            </div>
          </div>
        </main>
      </>
    </AuthenticatedRoute>
  );
}
