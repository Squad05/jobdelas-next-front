import axios from "axios";

class ChatService {
  async getChatMessages() {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        "https://jobdelas-khy0.onrender.com/chat",
        { headers }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar mensagens do chat:", error);
      throw error;
    }
  }

  async enviarMensagem(mensagem) {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "https://jobdelas-khy0.onrender.com/chat/enviar",
        { mensagem },
        { headers }
      );

      console.log("Mensagem enviada com sucesso");

      return response.data;
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      throw error;
    }
  }
}

export default new ChatService();
