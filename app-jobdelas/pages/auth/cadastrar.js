import Head from "next/head";
import styles from "../../styles/Auth.module.css";
import CadastroForm from "@/components/FormCadastro";
import NavbarAuth from "@/components/NavbarAuth";
import InfoSecaoAuth from "@/components/InfoSecaoAuth";
import Loading from "@/components/Loading";

export default function Cadastro() {
  return (
    <>
      <Loading />
      <Head>
        <title>Jobdelas - Cadastro </title>
      </Head>
      <main className={styles.estilo_body}>
        <NavbarAuth />
        <div className={styles.container_principal}>
          <InfoSecaoAuth />
          <CadastroForm />
        </div>
      </main>
      <Loading />
    </>
  );
}
