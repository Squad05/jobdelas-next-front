import React, { useEffect, useState } from "react";
import AulasService from "@/services/AulasService";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../styles/ListaAulas.module.css";
import { useRouter } from "next/router";
import { PlayArrow } from "@mui/icons-material";

const ListaAulas = () => {
  const router = useRouter();
  const [aulas, setAulas] = useState([]);
  const [aulaSelecionada, setAulaSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [aulaDetalhes, setAulaDetalhes] = useState(null);

  useEffect(() => {
    const fetchAulas = async () => {
      try {
        const cursoId = router.query.id;
        const aulasDoCurso = await AulasService.listarAulasPorCursoId(cursoId);
        setAulas(aulasDoCurso);
      } catch (error) {
        console.error("Erro ao buscar informações das aulas:", error);
      }
    };

    fetchAulas();
  }, [router.query.id]);

  const handleAulaClick = async (titulo) => {
    setAulaSelecionada(titulo);
    abrirModal();

    try {
      const aulaId = aulas.find((aula) => aula.titulo === titulo).id;
      const aulaDetalhes = await AulasService.pegarAulaPorId(aulaId);
      setAulaDetalhes(aulaDetalhes);
    } catch (error) {
      console.error("Erro ao buscar detalhes da aula:", error);
    }
  };

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setAulaSelecionada(null);
    setAulaDetalhes(null);
  };

  return (
    <div>
      <ul>
        {aulas.map((aula, index) => (
          <li key={index}>
            <Box  className={styles.lista_aula} >
              <Typography className={styles.titulo}>{aula.titulo}</Typography>
              <Button className={styles.assistir} onClick={() => handleAulaClick(aula.titulo)}>
                <PlayArrow /> Assistir
              </Button>
            </Box>
          </li>
        ))}
      </ul>

      <Modal open={modalAberto} onClose={fecharModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {aulaDetalhes && (
            <div>
              <Typography className={styles.aula} variant="h6">{aulaSelecionada}</Typography>
              {/* Incorporando o vídeo diretamente no modal */}
              <iframe
                width="100%"
                height="315"
                src={aulaDetalhes.link}
                title={aulaDetalhes.titulo}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className={styles.descricao}>Descrição: {aulaDetalhes.descricao}</p>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ListaAulas;
