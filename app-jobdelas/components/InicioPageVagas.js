import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/InicioPageVagas.module.css";

const InicioPageVagas = () => {
  const isCursosRoute = window.location.pathname === "/social/cursos";

  let title = "Encontre a oportunidade perfeita";
  let text = "Explore as melhores vagas disponíveis para você";

  if (isCursosRoute) {
    title = "Descubra os melhores cursos disponíveis para você";
    text = "Explore os melhores cursos e aprimore suas habilidades";
  }

  return (
    <div className={styles.introContainer}>
      <h2 className={styles.introTitle}>
        <SearchIcon className={styles.searchIcon} />
        {title}
      </h2>
      <p className={styles.introText}>{text}</p>
    </div>
  );
};

export default InicioPageVagas;
