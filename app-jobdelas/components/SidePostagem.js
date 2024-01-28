import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Mood } from "@mui/icons-material";
import UserService from "@/services/UserService";
import styles from "../styles/SidePostagem.module.css";

const getStatusIcon = () => {
  return <Mood className={styles.iconstatus} />;
};

const SidePostagem = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState("");
  const [status, setStatus] = useState("Ocupado");
  const [textoAdicional, setTextoAdicional] = useState("");

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const userToken = localStorage.getItem("token");
        const detalhesUsuario = await UserService.detalhesUsuaria(userToken);
        setNomeUsuario(detalhesUsuario.nome);
        setStatus(detalhesUsuario.status);
      } catch (error) {
        console.error("Erro ao obter detalhes do usuário:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div className={styles.sidePostagemContainer}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        className={styles.caixa_status}
      >
        <Typography className={styles.nome_status} mb={2}>
          Olá, {nomeUsuario}!
        </Typography>{" "}
        {getStatusIcon()}
        <Typography variant="h6" className={styles.texto_status} mb={2}>
          Como você está se sentindo hoje?
        </Typography>
      </Box>
    </div>
  );
};

export default SidePostagem;
