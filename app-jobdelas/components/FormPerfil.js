import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
  Stack,
  InputLabel,
  Grid,
} from "@mui/material";
import { AccountCircle, Update } from "@mui/icons-material";
import UserService from "@/services/UserService";
import styles from "../styles/FormPerfil.module.css";
import { useRouter } from "next/router";
import LogoutService from "@/services/auth/LogoutService";

export const ConfiguracaoUser = () => {
  const [values, setValues] = useState({
    nome: "",
    email: "",
    cep: "",
    status: "",
    senha: "",
    confirmarSenha: "",
  });

  const token = localStorage.getItem("token");
  const router = useRouter();

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);


  const obterDetalhesUsuaria = async () => {
    try {
      const detalhesUsuaria = await UserService.detalhesUsuaria(token);

      setValues({
        nome: detalhesUsuaria.nome,
        email: detalhesUsuaria.email,
        cep: detalhesUsuaria.cep,
        status: detalhesUsuaria.status,
        senha: "",
        confirmarSenha: "",
      });
    } catch (error) {
      console.error("Erro ao obter detalhes do usuária:", error);
    }
  };

  useEffect(() => {
    if (token) {
      obterDetalhesUsuaria();
    } else {
      router.push("/logar");
    }
  }, [token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await UserService.editarUsuaria(token, values);

      router.push("/social/feed");
    } catch (error) {
      console.error("Erro ao atualizar usuária:", error);
    }
  };
  const handleLogout = () => {
    LogoutService.logout();
    router.push("/");
  };


  return (
    <div className={styles.container_form}>
      <form className={styles.estilo_form} onSubmit={handleSubmit}>
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
                  Nome Completo
                </InputLabel>
                <input
                  id="nome"
                  className={styles.form_input}
                  name="nome"
                  value={values.nome}
                  onChange={handleChange}
                />

                <InputLabel
                  className={styles.titulo_input}
                  htmlFor="cep"
                >
                  Cep
                </InputLabel>
                <input
                  id="cep"
                  className={styles.form_input}
                  name="cep"
                  value={values.cep}
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
            onClick={handleLogout}
            className={`${styles.botao_form} ${styles.botao_logout}`}
            variant="contained"
            type="button"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            Logout
          </Button>
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
