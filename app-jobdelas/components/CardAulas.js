import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CursoCard = ({ nomeCurso, duracao, categoria, descricaoCurso }) => {
    return (
        <Card sx={{ margin: 'auto', maxWidth: '1000px', marginBottom: '16px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Curso: {nomeCurso}
                </Typography>
                <Typography variant="h6" component="div">
                    Duração: {duracao}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Categoria: {categoria}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Descrição do Curso: {descricaoCurso}
                </Typography>
            </CardContent>
        </Card>
    );
};

const AulaCard = ({ titulo, link, descricao }) => {
    return (
        <Card sx={{ margin: 'auto', maxWidth: '1000px', marginBottom: '16px' }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    Título: {titulo}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Descrição: {descricao}
                </Typography>
            </CardContent>
        </Card>
    );
};

const cursos = [
    {
        nomeCurso: 'Ciências da Computação',
        duracao: '4 anos',
        categoria: 'Tecnologia',
        descricaoCurso: 'Um curso abrangente sobre ciência da computação, cobrindo diversos tópicos desde programação até algoritmos avançados.',
    },
];

const aulas = [
    {
        titulo: 'Introdução à Programação',
        link: 'https://www.example.com/intro-programacao',
        descricao: 'Aula introdutória sobre programação básica.',
    },
    {
        titulo: 'Trabalhando com React',
        link: 'https://www.example.com/react-basics',
        descricao: 'Aprenda os conceitos básicos de React e desenvolvimento de interfaces.',
    },
    {
        titulo: 'Manipulação de Dados com SQL',
        link: 'https://www.example.com/sql-data-manipulation',
        descricao: 'Explore técnicas de manipulação de dados usando SQL.',
    },
    {
        titulo: 'Manipulação de Dados com SQL',
        link: 'https://www.example.com/sql-data-manipulation',
        descricao: 'Explore técnicas de manipulação de dados usando SQL.',
    },
];

export const AulasContainer = () => {
    return (
        <>
            {cursos.map((curso, index) => (
                <CursoCard
                    key={index}
                    nomeCurso={curso.nomeCurso}
                    duracao={curso.duracao}
                    categoria={curso.categoria}
                    descricaoCurso={curso.descricaoCurso}
                />
            ))}
            {aulas.map((aula, index) => (
                <AulaCard
                    key={index}
                    titulo={aula.titulo}
                    link={aula.link}
                    descricao={aula.descricao}
                />
            ))}
        </>
    );
};
