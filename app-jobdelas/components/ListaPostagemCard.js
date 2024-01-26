import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid,
  Container,
} from "@mui/material";
import PostagensService from "@/services/PostagensService";
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

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {postagens.map((postagem, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{postagem.nome}</Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Conteúdo: <span>{postagem.conteudo}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Data: <span>{postagem.data}</span>
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
