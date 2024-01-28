import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import FiltroCursos from "./Filtro";
import styles from "../styles/CardCurso.module.css";
import Link from "next/link";
import CursoService from "@/services/CursoService";
import BookIcon from "@mui/icons-material/Book";
import UserService from "@/services/UserService";
import { useRouter } from "next/router";
import CandidaturaService from "@/services/CandidaturaService";

const ListaCursos = () => {
  const [cursos, setCursos] = useState([]);
  const [cursosFiltrados, setCursosFiltrados] = useState([]);
  const [numColunas, setNumColunas] = useState(2);
  const router = useRouter();

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const cursosData = await CursoService.listarCursos();
        setCursos(cursosData);
        setCursosFiltrados(cursosData);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    };

    fetchCursos();
  }, []);

  const handleFiltrar = (categoria) => {
    if (categoria === "Todos") {
      setCursosFiltrados(cursos);
    } else {
      const cursosFiltrados = cursos.filter(
        (curso) => curso.categoria === categoria
      );
      setCursosFiltrados(cursosFiltrados);
    }
  };

  const handleAssistir = async (curso) => {
    try {
      const detalhesUsuaria = await UserService.detalhesUsuaria();

      await CandidaturaService.cadastrarCandidaturaCurso({
        candidataEmail: detalhesUsuaria.email,
        candidataNome: detalhesUsuaria.nome,
        cursos: curso,
      });
      console.log(detalhesUsuaria);

      router.push(`/social/aulas?id=${curso.id}`);
    } catch (error) {
      console.error("Erro ao assistir curso:", error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3} className={styles.estilo_item_filtro}>
        <FiltroCursos
          categorias={[
            "Todos",
            "Tecnologia",
            "Negócios",
            "Design",
            "Produtividade",
            "Jogos",
            "Linguas",
          ]}
          onFiltrar={handleFiltrar}
        />
      </Grid>
      <Grid item xs={12} sm={9} className={styles.container_cursos}>
        <Grid sx={{ margin: "auto" }} container spacing={3}>
          {cursosFiltrados.map((curso, index) => (
            <Grid item xs={12} sm={numColunas === 1 ? 12 : 6} key={index}>
              <Card className={styles.estilo_card}>
                <CardContent className={styles.card_body}>
                  <Typography
                    variant="h6"
                    component="div"
                    className={styles.titulo}
                  >
                    Matéria: {curso.materia}
                  </Typography>
                  <Typography
                    className={styles.texto_card}
                    sx={{ marginTop: 2 }}
                  >
                    Duração: {curso.duracao}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    className={styles.texto_card}
                    sx={{ marginTop: 2 }}
                  >
                    Categoria: {curso.categoria}
                  </Typography>
                  <Box className={styles.container_botao}>
                    <Button
                      className={styles.botao_card}
                      sx={{ marginTop: 2 }}
                      onClick={() => handleAssistir(curso)}
                    >
                      {" "}
                      <BookIcon />
                      Assistir
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListaCursos;
