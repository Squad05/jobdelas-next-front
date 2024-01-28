import { useAuth } from "@/hooks/useAuth";
import NavbarSocial from "@/components/NavbarSocial";
import Head from "next/head";
import AulasContainer from "@/components/CardAulas";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";

export default function Aulas() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return null;
  }
  return (
    <AuthenticatedRoute>
      <Head>
        <title> Job Delas </title>
      </Head>
      <NavbarSocial />
      <main>
        <AulasContainer />
      </main>
    </AuthenticatedRoute>
  );
}
