import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CursoService from "@/services/CursoService";
import styles from "../styles/CursoInfo.module.css";
import SchoolIcon from "@mui/icons-material/School";

import { useRouter } from "next/router"; 

const CursoInfo = () => {
  const router = useRouter();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const id = router.query.id;

        const cursoData = await CursoService.pegarCursoPorId(id);
        console.log(cursoData);
        setCurso(cursoData);
      } catch (error) {
        console.error("Erro ao buscar informações do curso:", error);
      }
    };

    fetchCurso();
  }, [router.query.id]);

  return (
    <>
      {curso && (
        <Card className={styles.introContainer}>
          <CardContent>
            <Typography className={styles.introTitle}>
              <SchoolIcon className={styles.SchoolIcon} />
            </Typography>
            <Typography className={styles.introText}>
              Duração: {curso.duracao}
            </Typography>
            <Typography className={styles.introText}>
              {curso.categoria}
            </Typography>
            <Typography className={styles.introText}>
              {curso.descricaoCurso}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CursoInfo;
