import Head from "next/head";
import styles from "../../styles/Auth.module.css";
import CadastroForm from "@/components/FormCadastro";
import NavbarAuth from "@/components/NavbarAuth";

export default function Cadastro() {
  return (
    <>
      <Head>
        <title>Jobdelas - Cadastro </title>
      </Head>
      <main className={styles.estilo_body}>
        <NavbarAuth />
        <CadastroForm />
      </main>
    </>
  );
}
