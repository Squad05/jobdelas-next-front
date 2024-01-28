import axios from "axios";

class CursoService {
  async listarCursos() {
    try {
      const response = await axios.get(
        "https://jbcompanyapi.onrender.com/cursos"
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar cursos:", error);
      throw error;
    }
  }

  async pegarCursoPorId(id) {
    try {
      const response = await axios.get(
        `https://jbcompanyapi.onrender.com/cursos/${id}`
      );

      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar curso por ID:", error);
      throw error;
    }
  }
}

export default new CursoService();
