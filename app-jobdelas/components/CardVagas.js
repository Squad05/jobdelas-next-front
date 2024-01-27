import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import FiltroVagas from "./FiltroVagas";
import styles from "../styles/CardVaga.module.css";
import WorkIcon from "@mui/icons-material/Work";
import VagaService from "../services/VagaService";

const ListaVagas = () => {
  const [vagas, setVagas] = useState([]);
  const [vagasFiltradas, setVagasFiltradas] = useState([]);
  const [numColunas, setNumColunas] = useState(2);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const vagasData = await VagaService.listarVagas();
        setVagas(vagasData);
        setVagasFiltradas(vagasData);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      }
    };

    fetchVagas();
  }, []);

  const handleFiltrar = (status) => {
    if (status === "Todos") {
      setVagasFiltradas(vagas);
    } else {
      const vagasFiltradas = vagas.filter(
        (vaga) =>
          (status === "Aberta" && vaga.status_vaga) ||
          (status === "Fechada" && !vaga.status_vaga)
      );
      setVagasFiltradas(vagasFiltradas);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3} className={styles.estilo_item_filtro}>
        <FiltroVagas
          categorias={["Todos", "Aberta", "Fechada"]}
          onFiltrar={handleFiltrar}
        />
      </Grid>
      <Grid item xs={12} sm={9} className={styles.container_vagas}>
        <Grid sx={{margin: 'auto'}} container spacing={3}>
          {vagasFiltradas.map((vaga, index) => (
            <Grid item xs={12} sm={numColunas === 1 ? 12 : 6} key={index}>
              <Card
                className={`${styles.estilo_card} ${styles[vaga.status_vaga ? "aberta" : "fechada"]
                  }`}
              >
                <CardContent className={styles.card_body}>
                  <Typography
                    className={styles.titulo}
                    variant="h6"
                    component="div"
                  >
                    {vaga.funcao}
                  </Typography>
                  <Typography
                    className={styles.texto_card}
                    sx={{ marginTop: 2 }}
                  >
                    Localização: {vaga.localizacao}
                  </Typography>
                  <Typography
                    className={styles.texto_card}
                    sx={{ marginTop: 2 }}
                  >
                    Salário: {vaga.salario}
                  </Typography>
                  <Typography
                    className={styles.texto_card}
                    sx={{ marginTop: 2 }}
                  >
                    Status: {vaga.status_vaga ? "Aberta" : "Fechada"}
                  </Typography>
                  <Box className={styles.container_botao}>
                    <Button
                      className={styles.botao_card}
                      onClick={() =>
                        alert(
                          `Você se candidatou para a vaga de ${vaga.funcao}`
                        )
                      }
                      variant="outlined"
                      color="primary"
                    >
                      {" "}
                      <WorkIcon />
                      Aplicar
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

export default ListaVagas;
