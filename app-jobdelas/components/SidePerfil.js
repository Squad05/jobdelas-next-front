import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import styles from "../styles/SidePerfil.module.css";
import { CheckCircle, Lightbulb, Message } from "@mui/icons-material";
import UserService from "@/services/UserService";

export const SidePerfil = () => {
  const [values, setValues] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const userToken = localStorage.getItem("token");
        const detalhesUsuario = await UserService.detalhesUsuaria(userToken);
        setNomeUsuario(detalhesUsuario.nome);

        if (detalhesUsuario.foto == null) {
          setFotoUsuario("oi.png");
        } else {
          setFotoUsuario(detalhesUsuario.foto);
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do usuário:", error);
      }
    };

    fetchUsuario();
  }, []);

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];

      await UserService.editarFotoUsuaria(file);
    } catch (error) {
      console.error("Erro ao editar a foto do usuário", error);
    }
  };

  return (
    <div className={styles.side_container}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <div className={styles.header_box}>
          <Typography className={styles.titulo_header}>
            {" "}
            {nomeUsuario}
          </Typography>
        </div>
        <img
          src={fotoUsuario}
          alt="Foto de Perfil"
          className={styles.foto_perfil}
        />

        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.fileInput}
        />

        <div className={styles.info_container}>
          <div className={styles.info_item}>
            <CheckCircle className={styles.info_icon} />
            <Typography mt={1}>
              {values.vagasAplicadas} vagas aplicadas
            </Typography>
          </div>
          <Divider className={styles.customDivider} />
          <div className={styles.info_item}>
            <Lightbulb className={styles.info_icon} />
            <Typography mt={1}>
              {values.oportunidades} cursos iniciados
            </Typography>
          </div>
          <Divider className={styles.customDivider} />
          <div className={styles.info_item}>
            <Message className={styles.info_icon} />
            <Typography mt={1}>
              {values.postagensFeitas} conversas iniciadas
            </Typography>
          </div>
          <Divider className={styles.customDivider} />
        </div>
      </Box>
    </div>
  );
};
