import { ConfiguracaoUser } from "@/components/forms/FormPerfil";
import { SidePerfil } from "@/components/SidePerfil";
import Head from "next/head";
import styles from "../../../styles/Perfil.module.css";
import NavbarSocial from "@/components/navbar/NavbarSocial";
import { useAuth } from "@/hooks/useAuth";
import AuthenticatedRoute from "../../../components/AuthenticatedRoute";
import Chat from "@/components/Chat";

export default function Config() {
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
        <main className={styles.main_principal}>
          <NavbarSocial />
          <Chat />
          <div className={styles.container_conteudo}>
            <SidePerfil />
            <ConfiguracaoUser />
          </div>
        </main>
      </>
    </AuthenticatedRoute>
  );
}
