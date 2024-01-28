import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import UserService from "@/services/UserService";
import styles from "../styles/SidePostagem.module.css";

const SidePostagem = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState("");
  const [status, setStatus] = useState("Ocupado");

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const userToken = localStorage.getItem("token");
        const detalhesUsuario = await UserService.detalhesUsuaria(userToken);
        setNomeUsuario(detalhesUsuario.nome);
        setStatus(detalhesUsuario.status);

        if (detalhesUsuario.foto == null) {
          setFotoUsuario(
            "https://www.adobe.com/br/express/feature/image/media_142f9cf5285c2cdcda8375c1041d273a3f0383e5f.png?width=750&format=png&optimize=medium"
          );
        } else {
          setFotoUsuario(detalhesUsuario.foto);
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do usuário:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <div className={styles.container_foto}>
          <img
            className={styles.foto}
            src={fotoUsuario}
            alt={`Foto de ${nomeUsuario}`}
          />
        </div>
        <Typography className={styles.status}>{status}</Typography>
      </Box>
    </div>
  );
};

export default SidePostagem;
