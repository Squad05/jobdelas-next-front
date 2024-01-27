import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const FiltroCursos = ({ onFiltrar }) => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    const categorias = [
        'Tecnologia',
        'Negócios',
        'Design',
        'Marketing',
        'Produtividade',
        'Jogos',
        'Linguas'
    ];

    const handleClick = (categoria) => {
        setCategoriaSelecionada(categoria);
        onFiltrar(categoria);
    };

    return (
        <Grid sx={{ marginLeft: 4 }} container spacing={2} direction="column">
            <Grid item>
                <Button
                    variant={categoriaSelecionada === null ? 'contained' : 'outlined'}
                    onClick={() => handleClick(null)}
                >
                    Todos
                </Button>
            </Grid>
            {categorias.map((categoria) => (
                <Grid item key={categoria}>
                    <Button
                        variant={categoriaSelecionada === categoria ? 'contained' : 'outlined'}
                        onClick={() => handleClick(categoria)}
                    >
                        {categoria}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default FiltroCursos;
