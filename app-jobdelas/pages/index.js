import Head from "next/head";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/components/Loading";

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
      <Loading />

      <main></main>
    </>
  );
}
