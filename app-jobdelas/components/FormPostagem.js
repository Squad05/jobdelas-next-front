import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  FormControl,
  Popover,
  Paper,
  Button,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import styles from "../styles/Feed.module.css";
import PostagensService from "@/services/PostagensService";

export default function FormPostagem({ userName, userPhoto }) {
  const [emojiBoxOpen, setEmojiBoxOpen] = useState(null);
  const [postContent, setPostContent] = useState("");
  const [conteudo, setConteudo] = useState("");

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postagem = {
      conteudo,
    };

    try {
      const response = await PostagensService.cadastrarPostagens(postagem, token);
      router.push('/social/feed');
    } catch (erro) {
      console.error("Erro ao eviar a requisição:", erro.message);
    }

  }
  const handleEmojiSelect = (emoji) => {
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setEmojiBoxOpen(null);
  };

  const emojiList = [
    "😊",
    "😂",
    "😭",
    "❤️",
    "👍",
    "🎉",
    "🌟",
    "🚀",
    "💡",
    "🌈",
    "🎨",
    "🍕",
    "🍦",
    "🎸",
    "⚽",
    "📚",
    "🌸",
    "🍍",
    "🏆",
    "🎤",
    "🚲",
  ];

  const openEmojiBox = (event) => {
    setEmojiBoxOpen(event.currentTarget);
  };

  const closeEmojiBox = () => {
    setEmojiBoxOpen(null);
  };



  return (
    <Box className={styles.postBoxContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.postBoxHeader}>
          <Avatar
            alt="Foto do usuário"
            src={userPhoto}
            className={styles.userPhoto}
          />
          <Typography className={styles.userName}>{userName}</Typography>
        </div>

        <FormControl className={styles.postBoxContainer}>
          <TextField
            multiline
            rows={4}
            placeholder="O que você está pensando?"
            variant="outlined"
            fullWidth
            className={styles.contentInput}
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            required
          />
        </FormControl>

        <div className={styles.postBoxFooter}>
          <IconButton onClick={openEmojiBox}>
            <EmojiEmotionsIcon className={styles.emojiIcon} />
          </IconButton>

          <Popover
            open={Boolean(emojiBoxOpen)}
            anchorEl={emojiBoxOpen}
            onClose={closeEmojiBox}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Paper style={{ padding: "10px", display: "flex", flexWrap: "wrap" }}>
              {emojiList.map((emoji, index) => (
                <span
                  key={index}
                  onClick={() => handleEmojiSelect(emoji)}
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {emoji}
                </span>
              ))}
            </Paper>
          </Popover>

          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            type="submit"

          >
            Postar
          </Button>
        </div>
      </form>
    </Box>
  );
}
