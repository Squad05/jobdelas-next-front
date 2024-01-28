import axios from "axios";

class CandidaturaService {
  async cadastrarCandidaturaVaga(candidatura) {
    try {
      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/candidaturas",
        candidatura
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar nova candidatura:", error);
      throw error;
    }
  }

  async cadastrarCandidaturaCurso(candidatura) {
    try {
      const response = await axios.post(
        "https://jbcompanyapi.onrender.com/candidaturas-cursos",
        candidatura
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar nova candidatura:", error);
      throw error;
    }
  }
}

export default new CandidaturaService();
