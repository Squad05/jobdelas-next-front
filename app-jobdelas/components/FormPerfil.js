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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

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

                  id="primeiroNome"
                  className={styles.form_input}
                  name="primeiroNome"
                  value={values.primeiroNome}
                  onChange={handleChange}
                />

                <InputLabel className={styles.titulo_input} htmlFor="email">
                  Email
                </InputLabel>
                <input

                  id="email"
                  className={styles.form_input}
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />

                <InputLabel className={styles.titulo_input} htmlFor="senha">
                  Senha
                </InputLabel>
                <input

                  id="senha"
                  className={styles.form_input}
                  name="senha"
                  type="password"
                  value={values.senha}
                  onChange={handleChange}
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

                  id="segundoNome"
                  className={styles.form_input}
                  name="segundoNome"
                  value={values.segundoNome}
                  onChange={handleChange}
                />

                <InputLabel className={styles.titulo_input} htmlFor="status">
                  Status
                </InputLabel>
                <input

                  id="status"
                  className={styles.form_input}
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                />

                <InputLabel
                  className={styles.titulo_input}
                  htmlFor="confirmarSenha"
                >
                  Senha (Confirmação)
                </InputLabel>
                <input
              
                  id="confirmarSenha"
                  className={styles.form_input}
                  name="confirmarSenha"
                  type="password"
                  value={values.confirmarSenha}
                  onChange={handleChange}
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
