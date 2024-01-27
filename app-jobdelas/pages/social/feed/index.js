import Head from "next/head";
import styles from "../../../styles/Feed.module.css";
import { useAuth } from "@/hooks/useAuth";
import { Box } from "@mui/material";
import NavbarSocial from "@/components/NavbarSocial";
import CriarPostagemCard from "@/components/CriarPostagemCard";
import ListaPostagemCard from "@/components/ListaPostagemCard";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";

export default function Perfil() {
  return (
    <AuthenticatedRoute>
      <>
        <Head>
          <title>Jobdelas</title>
        </Head>
        <main className={styles.feedBody}>
          <NavbarSocial />
          <Box display="flex" justifyContent="center">
            <CriarPostagemCard />
          </Box>
          <ListaPostagemCard />
        </main>
      </>
    </AuthenticatedRoute>
  );
}
