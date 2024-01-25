import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import FiltroCursos from './Filtro';


const VagaCard = ({ funcao, localizacao, salario, status }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">
                    Função: {funcao}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Localização: {localizacao}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Salário: {salario}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    Status: {status}
                </Typography>
            </CardContent>
        </Card>
    );
};


const ListaVagas = () => {
    const vagas = [
        { funcao: 'Desenvolvedor Front-end', localizacao: 'São Paulo, SP', salario: '$5000', status: 'Aberta' },
        { funcao: 'Analista de Marketing', localizacao: 'Rio de Janeiro, RJ', salario: '$4500', status: 'Fechada' },
        { funcao: 'Engenheiro de Software', localizacao: 'Belo Horizonte, MG', salario: '$6000', status: 'Aberta' },
        { funcao: 'Engenheiro de Software', localizacao: 'Belo Horizonte, MG', salario: '$6000', status: 'Aberta' },
     
    ];

    const [vagasFiltradas, setVagasFiltradas] = useState(vagas);
    const [numColunas, setNumColunas] = useState(2);

    const handleFiltrar = (status) => {
        if (status === null) {
            setVagasFiltradas(vagas);
        } else {
            const vagasFiltradas = vagas.filter(vaga => vaga.status === status);
            setVagasFiltradas(vagasFiltradas);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
                <FiltroCursos categorias={['Aberta', 'Fechada']} onFiltrar={handleFiltrar} />
            </Grid>
            <Grid item xs={12} sm={9} >
                <Grid container spacing={3}>
                    {vagasFiltradas.map((vaga, index) => (
                        <Grid item xs={12} sm={numColunas === 1 ? 12 : 6} key={index}>
                            <VagaCard
                                funcao={vaga.funcao}
                                localizacao={vaga.localizacao}
                                salario={vaga.salario}
                                status={vaga.status}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ListaVagas;
