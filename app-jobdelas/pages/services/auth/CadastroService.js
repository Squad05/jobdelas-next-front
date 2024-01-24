import axios from "axios";

const cadastrar = async (nome, email, senha) => {
  try {
    const dados = {
      nome,
      email,
      senha,
      cargo: "USER",
    };

    console.log(dados);
    const response = await axios.post(
      "http://localhost:8080/auth/cadastrar",
      dados
    );
  } catch (erro) {
    if (erro.response.status === 409) {
      throw new Error(
        "Usuário com este email já existe. Por favor, escolha outro email."
      );
    }
    throw new Error("Erro ao enviar requisição: " + erro.message);
  }
};

export { cadastrar };