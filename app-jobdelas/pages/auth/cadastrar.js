import Head from "next/head";
import styles from "../../styles/Auth.module.css";
import CadastroForm from "@/components/forms/FormCadastro";
import NavbarAuth from "@/components/navbar/NavbarAuth";
import InfoSecaoAuth from "@/components/InfoSecaoAuth";

export default function Cadastro() {
  return (
    <>
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
     
    </>
  );
}
