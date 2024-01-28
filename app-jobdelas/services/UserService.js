import axios from "axios";

class UserService {
  async detalhesUsuaria() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token não encontrado no localStorage.");
      }
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        "https://jobdelas-khy0.onrender.com/auth/detalhes",
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar detalhes do Usuário", error);
      throw error;
    }
  }

  async editarUsuaria(token, valores) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        "https://jobdelas-khy0.onrender.com/auth/editar",
        valores,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar detalhes do Usuário", error);
      throw error;
    }
  }

  async editarFotoUsuaria(foto) {
    const token = localStorage.getItem("token");

    console.log(token);
    try {
      const formData = new FormData();
      formData.append("foto", foto);

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.patch(
        "https://jobdelas-khy0.onrender.com/auth/editar-foto",
        formData,
        { headers }
      );

      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar a foto do Usuário", error);
      throw error;
    }
  }
}

export default new UserService();