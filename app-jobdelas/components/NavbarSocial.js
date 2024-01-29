import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import styles from "../styles/NavbarSocial.module.css";
import Link from "next/link";
import Logo from "./Logo";
import { Box, Typography } from "@mui/material";
import { Search, AccountCircle, HomeWork } from "@mui/icons-material";
import UserService from "@/services/UserService";
import LogoutService from "@/services/auth/LogoutService";

const NavbarSocial = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const userToken = localStorage.getItem("token");
        const detalhesUsuario = await UserService.detalhesUsuaria(userToken);
        setNomeUsuario(detalhesUsuario.nome);

        if (detalhesUsuario.foto == null) {
          setFotoUsuario("oi.png");
        } else {
          setFotoUsuario(detalhesUsuario.foto);
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do usuário:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div className={styles.navbarSocialContainer}>
      <div className={styles.userNavbar}>
        <Logo />

        <div className={styles.userInfo}>
          <p className={styles.userName}>{nomeUsuario}</p>

          <Avatar
            alt="Foto do usuário"
            src={fotoUsuario}
            className={styles.userPhoto}
          >
            {nomeUsuario.slice(0, 2).toUpperCase()}
          </Avatar>
        </div>
      </div>

      <div className={styles.navBarInferior}>
        <div className={styles.navSocialLinks}>
          <Link href="/social/feed" className={styles.estilo_link}>
            <HomeWork className={styles.icon} />
            <Typography>Inicio</Typography>
          </Link>
          <Link href="/social/cursos" className={styles.estilo_link}>
            <BookIcon className={styles.icon} /> <Typography>Cursos</Typography>
          </Link>
          <Link href="/social/vagas" className={styles.estilo_link}>
            <WorkIcon className={styles.icon} /> <Typography>Vagas</Typography>
          </Link>
          <Link href="/social/config" className={styles.estilo_link}>
            <AccountCircle className={styles.icon} />
            <Typography>Perfil</Typography>
          </Link>
          <Link href="/auth/logar" className={styles.estilo_link}>
            <ExitToAppIcon className={styles.icon} />
            <Typography onClick={LogoutService.logout}>Sair</Typography>
          </Link>
        </div>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Pesquisar..." />
          <Search className={styles.searchIcon} />
        </div>
      </div>
    </div>
  );
};

export default NavbarSocial;
