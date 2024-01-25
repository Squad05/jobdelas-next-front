import React from "react";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import styles from "../styles/NavbarSocial.module.css";
import Link from "next/link";
import Logo from "./Logo";
import { Box, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function NavbarSocial() {
  return (
    <div className={styles.navbarSocialContainer}>
      <div className={styles.userNavbar}>
        <Logo />

        <div className={styles.userInfo}>
          <p className={styles.userName}>Seu Nome</p>

          <Avatar
            alt="Foto do usuário"
            src="/foto-usuario.jpg"
            className={styles.userPhoto}
          />
        </div>
      </div>

      <div className={styles.navBarInferior}>
        <div className={styles.navSocialLinks}>
          <Link href="/social/chat" className={styles.estilo_link}>
            <ChatIcon className={styles.icon} /> <Typography>Chat</Typography>
          </Link>
          <Link href="/social/cursos" className={styles.estilo_link}>
            <BookIcon className={styles.icon} /> <Typography>Cursos</Typography>
          </Link>
          <Link href="/social/vagas" className={styles.estilo_link}>
            <WorkIcon className={styles.icon} /> <Typography>Vagas</Typography>
          </Link>
          <Link href="/social/config" className={styles.estilo_link}>
            <SettingsIcon className={styles.icon} />
            <Typography>Configurações</Typography>
          </Link>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Pesquisar..." />
          <Search className={styles.searchIcon} />
        </div>
      </div>
    </div>
  );
}
