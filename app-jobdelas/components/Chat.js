import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import styles from "/styles/Chat.module.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setChatMessages([...chatMessages, message]);
      setMessage("");
    }
  };

  return (
    <div className={styles["chat-container"]}>
      {isOpen && (
        <>
          <div className={styles["chat-messages"]}>
            {chatMessages.map((msg, index) => (
              <div key={index} className={styles.message}>
                {msg}
              </div>
            ))}
          </div>
          <div className={styles["chat-input"]}>
            <TextField
              type="text"
              className={styles.caixa_msg}
              placeholder="Digite sua mensagem"
              value={message}
              onChange={handleMessageChange}
            />
            <Button
              className={styles.botao_enviar}
              variant="contained"
              onClick={sendMessage}
            >
              Enviar <SendIcon />
            </Button>
          </div>
        </>
      )}
      <div className={styles["chat-button"]} onClick={toggleChat}>
        <ChatIcon /> Chat
      </div>
    </div>
  );
};

export default Chat;
