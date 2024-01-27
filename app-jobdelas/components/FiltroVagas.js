import React from "react";
import Button from "@mui/material/Button";
import styles from "../styles/CardVaga.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";

const FiltroVagas = ({ categorias, onFiltrar }) => {
  const getCorStatus = (status) => {
    const cores = {
      Aberta: "aberta",
      Fechada: "fechada",
      Todos: "todos",
    };
    return cores[status] || "";
  };

  return (
    <div className={styles.filtro}>
      <h2 className={styles.titulo_filtro}>
        <FilterListIcon style={{ marginRight: "8px" }} />
        Filtrar vagas
      </h2>
      {categorias.map((categoria, index) => (
        <Button
          key={index}
          onClick={() => onFiltrar(categoria)}
          className={`${styles.botaoFiltro} ${styles[getCorStatus(categoria)]}`}
          style={{
            backgroundColor:
              getCorStatus(categoria) === "aberta"
                ? "#78ff95"
                : getCorStatus(categoria) === "fechada"
                ? "#ff7878"
                : "#B378FF",
          }}
        >
          {categoria}
        </Button>
      ))}
      <img
        src="/imagens/img_page_vaga.svg"
        alt="Logo Job delas"
        className={styles.img_filtro}
      ></img>
    </div>
  );
};

export default FiltroVagas;
