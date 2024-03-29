import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { cadastrar } from "@/services/auth/CadastroService";

import PublicIcon from "@mui/icons-material/Public";

import {
  FormControl,
  InputLabel,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

export default function CadastroForm() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMensagem, setErrorMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cadastrarUsuaria = await cadastrar(nome, email, senha);
      router.push("/auth/logar");
    } catch (erro) {
      if (erro.response && erro.response.status === 409) {
        setErrorMensagem(
          "Usuário com este email já existe. Por favor, escolha outro email."
        );
      } else {
        setErrorMensagem("Erro ao enviar requisição: " + erro.message);
      }
    }
  };

  return (
    <Box className={styles.main_container}>
      <Card className={styles.main_form}>
        <CardContent className={styles.card_content}>
          <Box className={styles.cabecalho_fomulario}>
            <Typography className={styles.titulo} variant="h3" component="h3">
              Cadastre-se!
            </Typography>
            <Typography sx={{ color: "#B378FF" }}>
              <PublicIcon
                fontSize="small"
                style={{ verticalAlign: "middle", marginRight: "4px" }}
              />
              <span>Faça conexões por todo o mundo</span>
            </Typography>
          </Box>

          <div className={styles.main_formulario}>
            <form className={styles.formulario} onSubmit={handleSubmit}>
              <InputLabel className={styles.form_label} htmlFor="primeiroNome">
                Nome Completo
              </InputLabel>
              <FormControl fullWidth className={styles.formulario_formcontrol}>
                <input
                  id="nome"
                  className={styles.formulario_input}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </FormControl>

              <InputLabel className={styles.form_label} htmlFor="email">
                Email
              </InputLabel>
              <FormControl fullWidth className={styles.formulario_formcontrol}>
                <input
                  id="email"
                  type="email"
                  className={styles.formulario_input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>

              <InputLabel className={styles.form_label} htmlFor="senha">
                Senha
              </InputLabel>
              <FormControl fullWidth className={styles.formulario_formcontrol}>
                <input
                  id="senha"
                  type="password"
                  className={styles.formulario_input}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </FormControl>

              {errorMensagem && (
                <Typography variant="body2" color="error" gutterBottom>
                  {errorMensagem}
                </Typography>
              )}

              <button
                className={styles.botao_formulario}
                variant="contained"
                style={{ marginTop: 20 }}
                type="submit"
              >
                Cadastrar
              </button>
            </form>
          </div>

          <div className={styles.container_footer}>
            <Typography
              className={styles.texto_footer}
              variant="h4"
              component="h4"
            >
              Já tem uma conta?
              <Link href="/auth/logar" className={styles.linkespecial}>
                {" "}
                Faça login{" "}
              </Link>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
