import Head from "next/head";
import styles from "../../../styles/Feed.module.css";
import { useAuth } from "@/hooks/useAuth";
import NavbarSocial from "@/components/NavbarSocial";
import CriarPostagemCard from "@/components/CriarPostagemCard";
import ListaPostagemCard from "@/components/ListaPostagemCard";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import SidePostagem from "@/components/SidePostagem";
import SideTarefas from "@/components/SideTarefas";

export default function Perfil() {

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
        <main className={styles.mainprincipal}>
          <NavbarSocial />
          <div className={styles.container_page}>
            <div className={styles.lateral_esquerda}>
              <SideTarefas />
            </div>
            <div className={styles.feed}>
              <CriarPostagemCard />
              <ListaPostagemCard />
            </div>
            <div className={styles.lateral_direita}>
              <SidePostagem />
            </div>
          </div>
        </main>
      </>
    </AuthenticatedRoute>
  );
}
