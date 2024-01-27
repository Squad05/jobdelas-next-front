import Head from "next/head";
import NavbarSocial from "@/components/NavbarSocial";
import styles from "../../../styles/Vagas.module.css";
import { useAuth } from "@/hooks/useAuth";
import ListaCursos from "@/components/CardCursos";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import InicioPageVagas from "@/components/InicioPageVagas";

export default function Cursos() {
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
          <div className={styles.container_conteudo}>
            <InicioPageVagas />
            <ListaCursos />
          </div>
        </main>
      </>{" "}
    </AuthenticatedRoute>
  );
}
