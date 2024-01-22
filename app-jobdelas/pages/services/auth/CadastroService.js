import axios from "axios";

const cadastrar = async (nome, sobrenome, email, senha) => {
  try {
    const dados = {
      nome,
      sobrenome,
      email,
      senha,
      cargo: "USER",
    };

    console.log(dados);
    const response = await axios.post(
      "https://jbcompanyapi.onrender.com/auth/cadastrar",
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