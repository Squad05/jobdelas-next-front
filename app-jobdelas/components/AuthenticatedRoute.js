import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

const AuthenticatedRoute = ({ children }) => {
  const { autenticado, verificarAutenticacao } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const verificarExpiracaoToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const expiracao = decodedToken.exp;

          if (expiracao < Math.floor(Date.now() / 1000)) {
            localStorage.removeItem("token");
            router.push("/auth/logar");
          }
        } catch (error) {
          console.error("Erro ao decodificar o token:", error);
        }
      }
    };

    verificarAutenticacao();
    verificarExpiracaoToken();

    const intervalId = setInterval(verificarExpiracaoToken, 60000); // Verifica a cada minuto

    return () => clearInterval(intervalId);
  }, [verificarAutenticacao]);

  if (!autenticado) {
    return null;
  }

  return <>{children}</>;
};

export default AuthenticatedRoute;
