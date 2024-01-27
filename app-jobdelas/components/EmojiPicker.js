import React, { useState } from "react";
import styles from "../styles/CriarPostagemCard.module.css";

const emojis = [
  "😊",
  "👍",
  "❤️",
  "😂",
  "🎉",
  "🌟",
  "🚀",
  "😎",
  "💖",
  "☹️",
  "😭",
  "😨",
];

const EmojiPicker = ({ onSelectEmoji }) => {
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleEmojiClick = (emoji) => {
    onSelectEmoji(emoji);
    setEmojiPickerVisible(false);
  };

  return (
    <div className={styles.div_emojis}>
      <button
        className={styles.emoji_botao}
        onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
      >
        😊
      </button>
      {emojiPickerVisible && (
        <div className={styles.container_emojis}>
          {emojis.map((emoji, index) => (
            <span
              key={index}
              style={{ cursor: "pointer", marginRight: "8px" }}
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
