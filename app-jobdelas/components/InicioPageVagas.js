import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/InicioPageVagas.module.css";

const InicioPageVagas = () => {
  return (
    <div className={styles.introContainer}>
      <h2 className={styles.introTitle}>
        {" "}
        <SearchIcon className={styles.searchIcon} />
        Encontre a oportunidade perfeita
      </h2>
      <p className={styles.introText}>
        {" "}
        Explore as melhores vagas disponíveis para você
      </p>
    </div>
  );
};

export default InicioPageVagas;
