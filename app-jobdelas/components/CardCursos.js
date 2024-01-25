import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import FiltroCursos from './Filtro';

const CursoCard = ({ duracao, materia, categoria }) => {
    const handleVerAulas = () => {
       
        console.log(`Ver aulas de ${materia}`);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">
                    Duração: {duracao}
                </Typography>
                <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
                    Matéria: {materia}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Categoria: {categoria}
                </Typography>
                <Button onClick={handleVerAulas} variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Ver Aulas
                </Button>
            </CardContent>
        </Card>
    );
};

const ListaCursos = () => {
    const cursos = [
        { duracao: '6 meses', materia: 'Matemática', categoria: 'Ciências' },
        { duracao: '7 meses', materia: 'Java', categoria: 'Tecnologia' },
        { duracao: '8 meses', materia: 'Física', categoria: 'Ciências' },
        { duracao: '5 meses', materia: 'Pixel Art', categoria: 'Arte' },
        { duracao: '5 meses', materia: 'Pixel Art', categoria: 'Arte' },
        { duracao: '5 meses', materia: 'Pixel Art', categoria: 'Arte' },
    ];

    const categorias = ['Ciências', 'Tecnologia', 'Arte'];

    const [cursosFiltrados, setCursosFiltrados] = React.useState(cursos);
    const [numColunas, setNumColunas] = React.useState(2);

    const handleFiltrar = (categoria) => {
        if (categoria === null) {
            setCursosFiltrados(cursos);
        } else {
            const cursosFiltrados = cursos.filter(curso => curso.categoria === categoria);
            setCursosFiltrados(cursosFiltrados);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <FiltroCursos categorias={categorias} onFiltrar={handleFiltrar} />
            </Grid>
            <Grid item xs={12} sm={9}>
                <Grid container spacing={3}>
                    {cursosFiltrados.map((curso, index) => (
                        <Grid item xs={12} sm={numColunas === 1 ? 12 : 6} key={index}>
                            <CursoCard
                                duracao={curso.duracao}
                                materia={curso.materia}
                                categoria={curso.categoria}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ListaCursos;
