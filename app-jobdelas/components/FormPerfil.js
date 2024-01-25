import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Stack,
  InputLabel,
  Grid,
} from "@mui/material";
import { AccountCircle, Update } from "@mui/icons-material";

import styles from "../styles/FormPerfil.module.css";

export const ConfiguracaoUser = () => {
  const [values, setValues] = useState({
    primeiroNome: "",
    segundoNome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    status: "",
  });

  return (
    <div className={styles.container_form}>
      <form className={styles.estilo_form}>
        <div className={styles.form_header}>
          <Typography className={styles.titulo_header}>
            <AccountCircle className={styles.titulo_icon} /> Conta
          </Typography>
          <Typography variant="subtitle1" className={styles.subtitulo_header}>
            Atualize sua conta <Update />
          </Typography>
        </div>

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <InputLabel
                  className={styles.titulo_input}
                  htmlFor="primeiroNome"
                >
                  Nome
                </InputLabel>
                <input
                  fullWidth
                  id="primeiroNome"
                  className={styles.form_input}
                  name="primeiroNome"
                  value={values.primeiroNome}
                />

                <InputLabel className={styles.titulo_input} htmlFor="email">
                  Email
                </InputLabel>
                <input
                  fullWidth
                  id="email"
                  className={styles.form_input}
                  name="email"
                  type="email"
                  value={values.email}
                />

                <InputLabel className={styles.titulo_input} htmlFor="senha">
                  Senha
                </InputLabel>
                <input
                  fullWidth
                  id="senha"
                  className={styles.form_input}
                  name="senha"
                  type="password"
                  value={values.senha}
                />
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack spacing={2}>
                <InputLabel
                  className={styles.titulo_input}
                  htmlFor="segundoNome"
                >
                  Sobrenome
                </InputLabel>
                <input
                  fullWidth
                  id="segundoNome"
                  className={styles.form_input}
                  name="segundoNome"
                  value={values.segundoNome}
                />

                <InputLabel className={styles.titulo_input} htmlFor="status">
                  Status
                </InputLabel>
                <input
                  fullWidth
                  id="status"
                  className={styles.form_input}
                  name="status"
                  value={values.status}
                />

                <InputLabel
                  className={styles.titulo_input}
                  htmlFor="confirmarSenha"
                >
                  Senha (Confirmação)
                </InputLabel>
                <input
                  fullWidth
                  id="confirmarSenha"
                  className={styles.form_input}
                  name="confirmarSenha"
                  type="password"
                  value={values.confirmarSenha}
                />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end", marginLeft: 1 }}>
          <Button
            className={styles.botao_form}
            variant="contained"
            type="submit"
          >
            Atualizar
          </Button>
        </CardActions>
      </form>
    </div>
  );
};
