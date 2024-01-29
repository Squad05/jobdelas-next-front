import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [autenticado, setAutenticado] = useState(false);
  const router = useRouter();

  const verificarAutenticacao = async () => {
    const token = localStorage.getItem("token");

   

    if (!token) {
      router.push("/auth/logar");
    } else {
      setAutenticado(true);
    }
  };

  useEffect(() => {
    verificarAutenticacao();
  }, []);

  return { autenticado, verificarAutenticacao }; 
};

export { useAuth };
