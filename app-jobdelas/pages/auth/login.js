import Head from "next/head";
import styles from "../../styles/Auth.module.css";
import NavbarAuth from "@/components/NavbarAuth";
import FormLogin from "@/components/FormLogin";

export default function Login() {
  return (
    <>
      <Head>
        <title>Jobdelas - Login </title>
      </Head>
      <main className={styles.estilo_body}>
        <NavbarAuth />
        <FormLogin />
      </main>
    </>
  );
}
