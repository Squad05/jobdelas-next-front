import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import styles from "../styles/NavbarAuth.module.css";

export default function NavbarAuth({ linkRota, nomeRota }) {
  return (
    <AppBar position="static" className={styles.containerNav}>
      <Toolbar className={styles.estilo_nav}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JOBDELAS
        </Typography>

        <Link href="/" className={styles.estilo_link} passHref>
          Home
          <HomeIcon className={styles.estilo_icon} />
        </Link>

        <Link href="/cadastrar" className={styles.estilo_link} passHref>
          Conectar
          <AddCircleOutlineIcon className={styles.estilo_icon} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
