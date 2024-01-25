import Head from "next/head";

import NavbarSocial from "@/components/NavbarSocial";
import FormPostagem from "@/components/FormPostagem";
import styles from "../../../styles/Feed.module.css";

export default function Perfil() {
  return (
    <>
      <Head>
        <title>Jobdelas</title>
      </Head>
      <main className={styles.feedBody}>
        <NavbarSocial />
        <FormPostagem />
      </main>
    </>
  );
}
