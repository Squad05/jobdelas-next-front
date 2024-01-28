import axios from "axios";

class TarefasService {
  async cadastrarTarefa(tarefa) {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        "https://jobdelas-khy0.onrender.com/tarefas",
        tarefa,
        { headers }
      );

      console.log("Tarefa cadastrada com sucesso");

      return response.data;
    } catch (error) {
      console.error("Erro ao postar nova vaga:", error);
      throw error;
    }
  }

  async listarTarefas() {
    try {
      const response = await axios.get(
        "https://jobdelas-khy0.onrender.com/tarefas"
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
      throw error;
    }
  }

  async listarTarefasPorUsuaria(id) {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `https://jobdelas-khy0.onrender.com/tarefas/usuario/${id}`,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar tarefas do usuário:", error);
      throw error;
    }
  }
}

export default new TarefasService();
