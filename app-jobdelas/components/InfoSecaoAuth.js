import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";

import styles from "../styles/InfoSecaoAuth.module.css";

export default function InfoSecaoAuth() {
  return (
    <div className={styles.info_container}>
      <img
        className={styles.img_principal}
        src="/imagens/imagem_sessao_auth.svg"
      />
      <div className={styles.infos}>
        <Box className={styles.caixa_info}>
          <LinkIcon fontSize="large" style={{ color: "#FFFFFF" }} />
          <Typography className={styles.texto_info} variant="p">
            Crie conexões
          </Typography>
        </Box>
        <Box className={styles.caixa_info}>
          <BuildIcon fontSize="large" style={{ color: "#FFFFFF" }} />
          <Typography className={styles.texto_info} variant="p">
            Desenvolva-se
          </Typography>
        </Box>
        <Box className={styles.caixa_info}>
          <WorkIcon fontSize="large" style={{ color: "#FFFFFF" }} />
          <Typography className={styles.texto_info} variant="p">
            Consiga um emprego
          </Typography>
        </Box>
      </div>
    </div>
  );
}
