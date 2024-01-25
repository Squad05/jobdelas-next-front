import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import styles from "../styles/SidePerfil.module.css";
import { CheckCircle, Lightbulb, Message } from "@mui/icons-material";

export const SidePerfil = () => {
  const [values, setValues] = useState({
    primeiroNome: "João",
    segundoNome: "Silva",
    vagasAplicadas: 5,
    oportunidades: 10,
    postagensFeitas: 10,
  });

  const profileLink = "https://seu-site.com/meu-perfil";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(profileLink).then(
      function () {},
      function (err) {
        console.error("Erro ao copiar o link: ", err);
      }
    );
  };

  return (
    <div className={styles.side_container}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <div className={styles.header_box}>
          <Typography className={styles.titulo_header}>
            {" "}
            {values.primeiroNome} {values.segundoNome}
          </Typography>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.mz1gErwlzvhlkWyDgr1tqQAAAA?w=248&h=217&c=7&r=0&o=5&pid=1.7"
          alt="Foto de Perfil"
          className={styles.foto_perfil}
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
              {" "}
              {values.postagensFeitas} conversas iniciadas
            </Typography>
          </div>
          <Divider className={styles.customDivider} />
        </div>

        <div className={styles.footer_box}>
          <Button className={styles.botao_perfil}>Perfil</Button>
        </div>
      </Box>
    </div>
  );
};
