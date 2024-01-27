import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import FiltroCursos from './Filtro';
import styles from '../styles/CardVaga.module.css';
import Link from 'next/link';
import CursoService from '@/services/CursoService';


const ListaCursos = () => {
    const [cursos, setCursos] = useState([]);
    const [cursosFiltrados, setCursosFiltrados] = useState([]);
    const [numColunas, setNumColunas] = useState(2);

    useEffect(() => {
        const fetchCursos = async () => {
            try {
        
                const cursosData = await CursoService.listarCursos();
                setCursos(cursosData);
                setCursosFiltrados(cursosData);
            } catch (error) {
                console.error('Erro ao buscar cursos:', error);
            }
        };

        fetchCursos();
    }, []);

    const handleFiltrar = (categoria) => {
        if (categoria === 'Todos') {
            setCursosFiltrados(cursos);
        } else {
            const cursosFiltrados = cursos.filter((curso) => curso.categoria === categoria);
            setCursosFiltrados(cursosFiltrados);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3} className={styles.estilo_item_filtro}>
                <FiltroCursos categorias={['Todos', 'Tecnologia', 'Negócios', 'Design', 'Produtidade', 'Jogos', 'Linguas']} onFiltrar={handleFiltrar} />
            </Grid>
            <Grid item xs={12} sm={9} className={styles.container_vagas}>
                <Grid container spacing={3}>
                    {cursosFiltrados.map((curso, index) => (
                        <Grid item xs={12} sm={numColunas === 1 ? 12 : 6} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Duração: {curso.duracao}
                                    </Typography>
                                    <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
                                        Matéria: {curso.materia}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                                        Categoria: {curso.categoria}
                                    </Typography>
                                    <Link href={`/social/cursos/aulas`}>
                                        <Button  variant="contained" color="primary" sx={{ marginTop: 2 }}>
                                            Ver Aulas
                                        </Button>
                                    </Link>
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
