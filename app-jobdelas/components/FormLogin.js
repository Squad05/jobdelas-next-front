import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { login } from "../pages/services/auth/AuthService";

import {
    FormControl,
    InputLabel,
    Typography,
    Card,
    CardContent,
    Box,
} from "@mui/material";

export default function FormLogin() {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [errorMensagem, setErrorMensagem] = useState("");
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await login(email, senha);
            localStorage.setItem("token", token);
            router.push("/");
        } catch (erro) {
            setErrorMensagem(erro.message);
        }
    };

    return (
        <Box className={styles.main_container}>
            <Card className={styles.main_form}>
                <CardContent className={styles.card_content}>
                    <Box className={styles.cabecalho_fomulario} >
                        <Typography variant="h2" component="h2" sx={{ mb: 2 }} >
                            Bem vinda
                        </Typography>
                        <Typography sx={{ color: '#B378FF' }} >
                            <span>Desenvolva-se</span>
                        </Typography>
                    </Box>

                    <div className={styles.main_formulario}>
                        <form className={styles.formulario} onSubmit={handleSubmit}>
                            <InputLabel className={styles.form_label} htmlFor="email">
                                Email
                            </InputLabel>
                            <FormControl fullWidth className={styles.formulario_formcontrol}>
                                <input
                                    id="email"
                                    aria-describedby="Digite seu email"
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
                                    aria-describedby="Digite sua senha"
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
                                Entrar
                            </button>
                        </form>
                    </div>
                    <div className={styles.container_footer}>
                        <Typography variant="h4" component="h4">
                            Não tem cadastro?
                            <Link href="/auth/cadastrar" className={styles.linkespecial}>
                                {" "}
                                Cadastre-se{" "}
                            </Link>
                        </Typography>
                    </div>

                </CardContent>
            </Card>
        </Box>
    );
}
