import axios from "axios";

class PostagemService {

  async cadastrarPostagens(postagem, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "http://localhost:8080/postagens",
        postagem,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao postar nova vaga:", error);
      throw error;
    }
  }

  async listarTodasPostagens() {
    try {
      const response = await axios.get(
        "http://localhost:8080/postagens"
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
      throw error;
    }
  }

  async listarPostagemPorCatagoria(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `http://localhost:8080/postagens/${id}`,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas do usuário:", error);
      throw error;
    }
  }

}

export default new PostagemService();