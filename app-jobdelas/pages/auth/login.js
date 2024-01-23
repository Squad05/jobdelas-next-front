import Head from "next/head";
import styles from "../../styles/Auth.module.css";
import NavbarAuth from "@/components/NavbarAuth";
import FormLogin from "@/components/FormLogin";
import InfoSecaoAuth from "@/components/InfoSecaoAuth";

export default function Login() {
  return (
    <>
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
