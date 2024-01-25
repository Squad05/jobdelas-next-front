import Head from "next/head";
import NavbarSocial from "@/components/NavbarSocial";
import styles from "../../../styles/Feed.module.css";
import { useAuth } from "@/hooks/useAuth";
import ListaVagas from "@/components/CardVagas";


export default function Vagas() {

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
                <ListaVagas />
            </main>
        </>
    )
}