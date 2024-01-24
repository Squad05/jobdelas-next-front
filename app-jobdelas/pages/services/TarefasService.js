import axios from "axios";

class TarefasService {

  async cadastrarTarefa(tarefa, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "http://localhost:8080/tarefas",
        tarefa,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao postar nova vaga:", error);
      throw error;
    }
  }

  async listarTarefas() {
    try {
      const response = await axios.get(
        "http://localhost:8080/tarefas"
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
      throw error;
    }
  }

  async listarTarefasPorUsuaria(id, token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `http://localhost:8080/tarefas/${id}`,
        { headers }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar vagas do usuário:", error);
      throw error;
    }
  }

}

export default new TarefasService();