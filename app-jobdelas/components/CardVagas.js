import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Grid, Modal, Paper } from "@mui/material";
import FiltroVagas from "./FiltroVagas";
import styles from "../styles/CardVaga.module.css";
import WorkIcon from "@mui/icons-material/Work";
import VagaService from "../services/VagaService";
import CandidaturaService from "../services/CandidaturaService";
import UserService from "@/services/UserService";

const ListaVagas = () => {
  const [vagas, setVagas] = useState([]);
  const [vagasFiltradas, setVagasFiltradas] = useState([]);
  const [numColunas, setNumColunas] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [mensagemModal, setMensagemModal] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("Todos");

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
    setFiltroStatus(status);

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

  const handleAplicar = async (vaga) => {
    try {
      const detalhesUsuaria = await UserService.detalhesUsuaria();
      const candidatura = {
        candidataEmail: detalhesUsuaria.email,
        candidataNome: detalhesUsuaria.nome,
        vagas: vaga,
      };

      console.log(vaga);
      await CandidaturaService.cadastrarCandidaturaVaga(candidatura);

      setMensagemModal(
        `Você se candidatou para a vaga de ${vaga.funcao}!  Um email com o comprovante da aplicação foi enviado pelo seu email. `
      );
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao enviar candidatura:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMensagemModal("");
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
        <Grid sx={{ margin: "auto" }} container spacing={3}>
          {vagasFiltradas.map((vaga, index) => (
            <Grid item xs={12} sm={numColunas === 1 ? 12 : 6} key={index}>
              <Card
                className={`${styles.estilo_card} ${
                  styles[vaga.status_vaga ? "aberta" : "fechada"]
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
                      onClick={() => handleAplicar(vaga)}
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

      <Modal
        className={styles.estilo_modal}
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          className={styles.estilo_box}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            id="modal-title"
            className={styles.titulo_modal}
          >
            Candidatura aplicada com sucesso
          </Typography>
          <Typography id="modal-description" className={styles.texto_modal}>
            {mensagemModal}
          </Typography>
          <Button onClick={handleCloseModal} className={styles.botao_modal}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default ListaVagas;
