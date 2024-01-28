import axios from "axios";

class AulasService {
  async listarAulasPorCursoId(cursoId) {
    try {
      const response = await axios.get(
        `https://jbcompanyapi.onrender.com/aulas/curso/${cursoId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar aulas para o curso ${cursoId}:`, error);
      throw error;
    }
  }

  async pegarAulaPorId(aulaId) {
    try {
      const response = await axios.get(
        `https://jbcompanyapi.onrender.com/aulas/${aulaId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar aula por ID ${aulaId}:`, error);
      throw error;
    }
  }
}

export default new AulasService();
