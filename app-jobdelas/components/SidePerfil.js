import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "../styles/Perfil.module.css";

export const SidePerfil = () => {
  const [values, setValues] = useState({
    primeiroNome: "João",
    segundoNome: "Silva",
    vagasAplicadas: 5,
    oportunidades: 10,
  });

  const profileLink = "https://seu-site.com/meu-perfil";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(profileLink).then(
      function () {
        
      },
      function (err) {
        console.error("Erro ao copiar o link: ", err);
      }
    );
  };

  return (
    <div className={styles.sidebox}>
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <img
          src="https://th.bing.com/th/id/OIP.mz1gErwlzvhlkWyDgr1tqQAAAA?w=248&h=217&c=7&r=0&o=5&pid=1.7"
          alt="Foto de Perfil"
          style={{ borderRadius: "50%", width: "150px", height: "150px" }}
        />
      
        <Typography variant="h6" mt={2}>
          {values.primeiroNome} {values.segundoNome}
        </Typography>

       
        <Typography variant="body2" mt={1}>
          Vagas Aplicadas: {values.vagasAplicadas}
        </Typography>

   
        <Typography variant="body2" mt={1}>
          Oportunidades: {values.oportunidades}
        </Typography>

       
        <Button variant="contained" color="primary" mt={2}>
          Meu Perfil
        </Button>

       
        <Box mt={2} display="flex" alignItems="center">
          <Typography variant="body2" style={{ marginRight: "8px" }}>
            {profileLink}
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleCopyLink}>
            Copiar Link
          </Button>
        </Box>
      </Box>
    </div>
  );
};
