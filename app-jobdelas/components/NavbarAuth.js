import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import styles from "../styles/NavbarAuth.module.css";
import Logo from "./Logo";
export default function NavbarAuth({ linkRota, nomeRota }) {
  return (
    <AppBar position="static" className={styles.containerNav}>
      <Toolbar className={styles.estilo_nav}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "auto",
          }}
        >
          <Logo />
        </Box>

        <Link href="/auth/logar" className={styles.estilo_link} passHref>
          Login
          <HomeIcon className={styles.estilo_icon} />
        </Link>

        <Link href="/auth/cadastrar" className={styles.estilo_link} passHref>
          Conectar
          <AddCircleOutlineIcon className={styles.estilo_icon} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
