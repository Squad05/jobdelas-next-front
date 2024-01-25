import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  InputLabel,
  Grid,
} from "@mui/material";
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
      <form className={styles.conteudo}>
        <CardHeader subheader="Atualize sua conta" title="Conta" />

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <InputLabel htmlFor="primeiroNome">Nome</InputLabel>
                <input
                  fullWidth
                  id="primeiroNome"
                  name="primeiroNome"
                  value={values.primeiroNome}
                />

                <InputLabel htmlFor="email">Email</InputLabel>
                <input
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                />

                <InputLabel htmlFor="senha">Senha</InputLabel>
                <input
                  fullWidth
                  id="senha"
                  name="senha"
                  type="password"
                  value={values.senha}
                />
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack spacing={2}>
                <InputLabel htmlFor="segundoNome">Sobrenome</InputLabel>
                <input
                  fullWidth
                  id="segundoNome"
                  name="segundoNome"
                  value={values.segundoNome}
                />

                <InputLabel htmlFor="status">Status</InputLabel>
                <input
                  fullWidth
                  id="status"
                  name="status"
                  value={values.status}
                />

                <InputLabel htmlFor="confirmarSenha">
                  Senha (Confirmação)
                </InputLabel>
                <input
                  fullWidth
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  value={values.confirmarSenha}
                />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-start", marginLeft: 1 }}>
          <Button variant="contained" type="submit">
            Atualizar
          </Button>
        </CardActions>
      </form>
    </div>
  );
};
