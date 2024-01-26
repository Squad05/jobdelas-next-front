import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box, Divider, Grid, Container } from "@mui/material";
import PostagensService from "@/services/PostagensService";
import { extrairEmailDoToken } from "@/services/auth/EmailToken";

const PostagemCard = ({ postagem }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    <span>{postagem.nome}</span>
                </Typography>
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
    );
};

PostagemCard.propTypes = {
    postagem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nome: PropTypes.string.isRequired,
        conteudo: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
    }).isRequired,
};

const PostagemCardList = () => {
    const [postagens, setPostagens] = useState([]);

    useEffect(() => {
        const fetchPostagens = async () => {
            try {
                const userToken = localStorage.getItem("token");
                console.log("Token:", userToken);

                const listaPostagens = await PostagensService.listarTodasPostagens(userToken);


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
                {postagens.slice().reverse().map((postagem, index) => (
                    <Grid item xs={12} key={index}>
                        <PostagemCard
                            postagem={postagem}

                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PostagemCardList;
