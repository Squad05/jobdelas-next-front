import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Popover,
  Paper,
  Button,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import styles from "../styles/Feed.module.css";

export default function FormPostagem({ userName, userPhoto }) {
  const [emojiBoxOpen, setEmojiBoxOpen] = useState(null);
  const [postContent, setPostContent] = useState("");

  const handleEmojiSelect = (emoji) => {
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setEmojiBoxOpen(null);
  };

  const emojiList = [
    "😊",
    "😂",
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

  const handlePost = () => {
    console.log("Post enviado:", postContent);
    setPostContent("");
  };

  return (
    <Box className={styles.postBoxContainer}>
      <div className={styles.postBoxHeader}>
        <Avatar
          alt="Foto do usuário"
          src={userPhoto}
          className={styles.userPhoto}
        />
        <Typography className={styles.userName}>{userName}</Typography>
      </div>

      <TextField
        multiline
        rows={4}
        placeholder="O que você está pensando?"
        variant="outlined"
        fullWidth
        className={styles.contentInput}
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />

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
          onClick={handlePost}
        >
          Postar
        </Button>
      </div>
    </Box>
  );
}
