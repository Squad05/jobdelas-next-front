import React, { useState } from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/CardCurso.module.css';
import FilterListIcon from "@mui/icons-material/FilterList";

const FiltroCursos = ({ categorias, onFiltrar }) => {
   
    const getCorCategoria = (categoria) => {
        const cores = {
            'Todos': '#B378FF',
            'Tecnologia': '#78ff95',
            'Negócios': '#ff7878',
            'Design': '#FF6347',
            'Marketing': '#ffd700',
            'Produtividade': '#FFD700',
            'Jogos': '#ffa07a',
            'Linguas': '#ff69b4'
        };
        return cores[categoria] || '';
    };

 

    return (
        <div className={styles.filtro}>

            <h2 className={`${styles.titulo_filtro} ${styles.titulo_filtro_visible}`}>
                <FilterListIcon style={{ marginRight: "8px" }} />
                Filtrar Cursos
            </h2>
            {categorias.map((categoria, index) => (
                <Button
                    key={index}
                    onClick={() => onFiltrar(categoria)}
                    className={`${styles.botaoFiltro} ${styles[getCorCategoria(categoria)]}`}
                    style={{
                        backgroundColor: getCorCategoria(categoria),
                        color: getCorCategoria === categoria ? '#fff' : ''
                    }}
                >
                    {categoria}
                </Button>

            ))}
            <img
                src="/imagens/img_page_vaga.svg"
                alt="Logo Job delas"
                className={`${styles.img_filtro} ${styles.img_filtro_visible}`}
            ></img>

        </div>
    );
};

export default FiltroCursos;
