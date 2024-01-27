import Head from "next/head";
import styles from "../../styles/Auth.module.css";
import NavbarAuth from "@/components/NavbarAuth";
import FormLogin from "@/components/FormLogin";
import InfoSecaoAuth from "@/components/InfoSecaoAuth";
import Loading from "@/components/Loading";

export default function Logar() {
  return (
    <>
      <Loading />

      <Head>
        <title>Jobdelas - Login </title>
      </Head>
      <main className={styles.estilo_body}>
        <NavbarAuth />
        <div className={styles.container_principal}>
          <InfoSecaoAuth />
          <FormLogin />
        </div>
      </main>
    </>
  );
}
