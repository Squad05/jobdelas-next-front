import Head from "next/head";
import FormPostagem from "@/components/FormPostagem";
import styles from "../../../styles/Feed.module.css";
import { useAuth } from "@/hooks/useAuth";
import { Box } from "@mui/material";
import NavbarSocial from "@/components/NavbarSocial";
import SidePostagem from "@/components/SidePostagem";
import PostagemCardList from "@/components/CardPost";

export default function Perfil() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Jobdelas</title>
      </Head>
      <main className={styles.feedBody}>
        <NavbarSocial />
        <Box display="flex" justifyContent="center">
          <SidePostagem />
          <FormPostagem userName="João Silva" userPhoto="url_da_foto" />
        </Box>
        <PostagemCardList />
      </main>
    </>
  );
}
