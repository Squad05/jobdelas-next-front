import { useAuth } from "@/hooks/useAuth";
import NavbarSocial from "@/components/NavbarSocial";
import Head from "next/head";
import { AulasContainer } from "@/components/CardAulas";


export default function Aulas() {
    const { autenticado } = useAuth();

    if (!autenticado) {
      return null;
    }
    return (
        <div>
            <Head>
                <title> Job Delas </title>
            </Head>
            <NavbarSocial />
            <main >
               <AulasContainer />
            </main>
        </div>
    )
}