import Head from "next/head";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Jobdelas</title>
      </Head>
      <main></main>
    </>
  );
}
