import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid,
  Container,
  Avatar,
  IconButton,
} from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import PostagensService from "@/services/PostagensService";
import styles from "../styles/ListaPostagemCard.module.css";

const ListaPostagemCard = () => {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    const fetchPostagens = async () => {
      try {
        const userToken = localStorage.getItem("token");
        const listaPostagens = await PostagensService.listarTodasPostagens(
          userToken
        );
        setPostagens(listaPostagens);
      } catch (error) {
        console.error("Erro ao listar postagens:", error);
      }
    };

    fetchPostagens();
  }, []);

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const handleCurtir = (index) => {
    // Lógica para tratar a ação de curtir
    // Pode ser um aumento no contador de curtidas ou uma chamada à API, dependendo da sua lógica de backend
  };

  return (
    <Container className={styles.container_lista}>
      <Grid container spacing={2}>
        {postagens.map((postagem, index) => (
          <Grid item xs={12} key={index}>
            <Card className={styles.card}>
              <CardContent className={styles.content}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt={postagem.nome}
                      src={postagem.fotoUrl}
                      className={styles.avatar}
                    />
                    <Typography variant="h6" marginLeft={1}>
                      {postagem.nome}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => handleCurtir(index)}>
                      <FavoriteIcon style={{ color: "#B378FF" }} />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary">
                      {postagem.curtidas}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent>
                <Typography variant="body1" color="textPrimary">
                  {postagem.conteudo}
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {formatarData(postagem.data)}
                </Typography>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListaPostagemCard;
