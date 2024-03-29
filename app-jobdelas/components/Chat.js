import { useState, useEffect, useRef } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import ChatService from "@/services/ChatService";
import styles from "/styles/Chat.module.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ChatService.getChatMessages()
        .then((messages) => {
          setChatMessages(messages);
          scrollToBottom();
        })
        .catch((error) => console.error("Erro ao carregar mensagens:", error));
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      ChatService.enviarMensagem(message)
        .then((response) => {
          setChatMessages((prevMessages) => [...prevMessages, response]);
          setMessage("");
          scrollToBottom();
        })
        .catch((error) => console.error("Erro ao enviar mensagem:", error));
    }
  };

  const scrollToBottom = () => {
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  };

  return (
    <div className={styles["chat-container"]}>
      {isOpen && (
        <>
          <div ref={messagesContainerRef} className={styles["chat-messages"]}>
            {chatMessages.map((chat, index) => (
              <div key={index} className={styles.message}>
                <div className={styles.userInfo}>
                  {chat.usuario && chat.usuario.foto && (
                    <img
                      src={chat.usuario.foto}
                      alt="Foto do Usuário"
                      className={styles.userPhoto}
                    />
                  )}
                  <span>{chat.usuario && chat.usuario.nome}</span>
                </div>
                <span>{chat.mensagem}</span>
              </div>
            ))}
          </div>

          <div className={styles["chat-input"]}>
            <textarea
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
