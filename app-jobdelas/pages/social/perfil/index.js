import { ConfiguracaoUser } from "@/components/FormPerfil";
import { SidePerfil } from "@/components/SidePerfil";
import Head from "next/head";
import styles from "../../../styles/Perfil.module.css"


export default function Perfil () {
    return (
        <>
        <Head>
          <title>Jobdelas</title>
        </Head>
        <main className={styles.userbody}>
          <SidePerfil />
          <ConfiguracaoUser />
        </main>
      </>
    )
}