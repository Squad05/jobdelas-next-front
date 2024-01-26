import axios from "axios";

class PostagemService {

  async cadastrarPostagens(postagem, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "https://jobdelas-khy0.onrender.com/postagem",
        postagem,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao postar nova postagem:", error);
      throw error;
    }
  }

  async listarTodasPostagens(token) {
    try {
     
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        "https://jobdelas-khy0.onrender.com/postagem", { headers}
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar postagens:", error);
      throw error;
    }
  }

}

export default new PostagemService();