import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import PostagensService from "@/services/PostagensService";
import UserService from "@/services/UserService";
import styles from "../styles/CriarPostagemCard.module.css";

const CriarPostagemCard = ({ onPostagemCriada }) => {
  const [conteudo, setConteudo] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const userToken = localStorage.getItem("token");
        const detalhesUsuario = await UserService.detalhesUsuaria(userToken);
        setNomeUsuario(detalhesUsuario.nome);

        if (detalhesUsuario.foto == null) {
          setFotoUsuario("oi.png");
        } else {
          setFotoUsuario(detalhesUsuario.foto);
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do usuário:", error);
      }
    };

    fetchUsuario();
  }, []);

  const handleCriarPostagem = async () => {
    try {
      const userToken = localStorage.getItem("token");

      const novaPostagem = {
        conteudo: conteudo,
      };

      await PostagensService.cadastrarPostagens(novaPostagem, userToken);

      if (onPostagemCriada) {
        onPostagemCriada();
      }

      setConteudo("");
    } catch (error) {
      console.error("Erro ao criar nova postagem:", error);
    }
  };

  return (
    <Card className={styles.estilo_card}>
      <CardContent className={styles.conteudo_card}>
        <Box className={styles.cardHeader}>
          <Avatar alt="Foto do Usuário" src={fotoUsuario}>
            {!fotoUsuario && "U"}
          </Avatar>
          <Typography variant="h5">
            O que você está pensando, {nomeUsuario}?
          </Typography>
        </Box>

        <TextField
          label="Compartilhe seus pensamentos"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          InputProps={{ classes: { notchedOutline: styles.noBorder } }}
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        />
        <Button className={styles.estilo_botao} onClick={handleCriarPostagem}>
          Postar
        </Button>
      </CardContent>
      <Divider />
      <Box sx={{ flexGrow: 1 }} />
    </Card>
  );
};

export default CriarPostagemCard;
