import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Message, PeopleAlt, Person } from "@mui/icons-material";
import LogoutService from "@/services/auth/LogoutService";
import { useRouter } from "next/router";

const SidebarPostagem = () => {
    const router = useRouter();

    const [values, setValues] = useState({
        primeiroNome: "João",
        segundoNome: "Silva",
        status: "Ocupado",
        seguidores: 1000,
        seguindo: 500,
    });

    const handleLogout = () => {
        LogoutService.logout();
        router.push("/");
    };

    return (
        <div >
            <Box display="flex" flexDirection="column" alignItems="center">
                <div >
                    <img
                        src="https://th.bing.com/th/id/OIP.mz1gErwlzvhlkWyDgr1tqQAAAA?w=248&h=217&c=7&r=0&o=5&pid=1.7"
                        alt="Foto de Perfil"

                    />
                    <Typography >
                        {values.primeiroNome} {values.segundoNome}
                    </Typography>
                    <Typography >
                        {values.status}
                    </Typography>
                </div>

                <div >
                    <div >
                        <PeopleAlt />
                        <Typography mt={1}>
                            {values.seguidores} Seguidores
                        </Typography>
                    </div>
                    <Divider />
                    <div >
                        <Person />
                        <Typography mt={1}>
                            {values.seguindo} Seguindo
                        </Typography>
                    </div>
                    <Divider />
                </div>

            </Box>
        </div>
    );
};

export default SidebarPostagem;
