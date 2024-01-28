import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, Input } from "@mui/material";
import { CheckCircle, Lightbulb, Message } from "@mui/icons-material";
import styles from "../styles/SidePerfil.module.css";
import UserService from "@/services/UserService";

export const SidePerfil = () => {
  const [values, setValues] = useState({
    primeiroNome: "",
    vagasAplicadas: "",
    foto: "",
    oportunidades: 10,
    postagensFeitas: 10,
  });

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];

      await UserService.editarFotoUsuaria(file);
    } catch (error) {
      console.error("Erro ao editar a foto do usuário", error);
    }
  };

  const atualizarValores = async () => {
    try {
      const detalhesUsuario = await UserService.detalhesUsuaria();

      setValues({
        ...values,
        nome: detalhesUsuario.nome,
        vagasAplicadas: detalhesUsuario.candidaturas,
        oportunidades: "detalhesUsuario.oportunidades",
        postagensFeitas: "detalhesUsuario.postagensFeitas",
        foto: detalhesUsuario.foto,
      });
    } catch (error) {
      console.error("Erro ao obter detalhes do usuário", error);
    }
  };

  useEffect(() => {
    atualizarValores();
  }, []);

  return (
    <div className={styles.side_container}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <div className={styles.header_box}>
          <Typography className={styles.titulo_header}>
            {`${values.nome}`}
          </Typography>
        </div>
        <img
          src={values.foto}
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
              {`${values.vagasAplicadas} vagas aplicadas`}
            </Typography>
          </div>
          <Divider className={styles.customDivider} />
          <div className={styles.info_item}>
            <Lightbulb className={styles.info_icon} />
            <Typography mt={1}>
              {`${values.oportunidades} cursos iniciados`}
            </Typography>
          </div>
          <Divider className={styles.customDivider} />
          <div className={styles.info_item}>
            <Message className={styles.info_icon} />
            <Typography mt={1}>
              {`${values.postagensFeitas} conversas iniciadas`}
            </Typography>
          </div>
          <Divider className={styles.customDivider} />
        </div>
      </Box>
    </div>
  );
};
