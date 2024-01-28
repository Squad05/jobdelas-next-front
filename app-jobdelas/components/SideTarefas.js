import React, { useState, useEffect } from "react";
import TarefasService from "../services/TarefasService";
import styles from "../styles/SideTarefas.module.css";
import UserService from "@/services/UserService";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const SideTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [usuariaId, setUsuariaId] = useState(null);
  const [descricaoVisivel, setDescricaoVisivel] = useState(null);
  const [formVisivel, setFormVisivel] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState({
    titulo: "",
    descricao: "",
    concluida: false,
  });
  const [erroFormulario, setErroFormulario] = useState("");

  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const token = localStorage.getItem("token");

        const detalhesUsuaria = await UserService.detalhesUsuaria(token);
        setUsuariaId(detalhesUsuaria.id);

        const tarefasUsuaria = await TarefasService.listarTarefasPorUsuaria(
          detalhesUsuaria.id
        );

        setTarefas(tarefasUsuaria);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    };

    carregarTarefas();
  }, []);

  const handleConcluirTarefa = (tarefaId) => {
    console.log(`Concluir Tarefa ${tarefaId}`);
  };

  const handleToggleDescricao = (tarefaId) => {
    setDescricaoVisivel(descricaoVisivel === tarefaId ? null : tarefaId);
  };

  const handleAdicionarTarefa = () => {
    setFormVisivel(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNovaTarefa((prevTarefa) => ({
      ...prevTarefa,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validar campos obrigatórios
    if (!novaTarefa.titulo || !novaTarefa.descricao) {
      setErroFormulario("Título e descrição são obrigatórios.");
      return;
    }

    try {
      const novaTarefaCadastrada = await TarefasService.cadastrarTarefa(
        novaTarefa
      );
      console.log("Nova Tarefa Cadastrada:", novaTarefaCadastrada);

      setTarefas((prevTarefas) => [...prevTarefas, novaTarefaCadastrada]);
      setNovaTarefa({ titulo: "", descricao: "", concluida: false });
      setFormVisivel(false);
      setErroFormulario(""); // Limpar mensagem de erro
    } catch (error) {
      console.error("Erro ao cadastrar nova tarefa:", error);
      setErroFormulario("Erro ao cadastrar nova tarefa.");
    }
  };

  return (
    <div className={`${styles.lateral_home} ${styles.sideTarefas}`}>
      <div className={`${styles.listaTitle} ${styles.sideHeader}`}>
        Lista de Tarefas
      </div>
      <div className={styles.listaTarefas}>
        {tarefas.map((tarefa) => (
          <div key={tarefa.id} className={styles.tarefa}>
            <div
              className={styles.tituloDescricao}
              onClick={() => handleToggleDescricao(tarefa.id)}
            >
              <p className={styles.titulo}>{tarefa.titulo}</p>
              <button
                className={styles.concluirTarefa}
                onClick={() => handleConcluirTarefa(tarefa.id)}
              >
                <CheckCircleOutlineIcon />
              </button>
            </div>
            {descricaoVisivel === tarefa.id && (
              <div className={styles.descricao}>
                <p>{tarefa.descricao}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {formVisivel ? (
        <form onSubmit={handleFormSubmit} className={styles.form_tarefa}>
          <label className={styles.label_form}>
            Título:
            <input
              type="text"
              name="titulo"
              className={styles.input_form}
              value={novaTarefa.titulo}
              onChange={handleFormChange}
              required // Campo obrigatório
            />
          </label>
          <label className={styles.label_form}>
            Descrição:
            <textarea
              name="descricao"
              className={styles.text_form}
              value={novaTarefa.descricao}
              onChange={handleFormChange}
              required
            />
          </label>
          {erroFormulario && (
            <p className={`${styles.erroFormulario} ${styles.customError}`}>
              {erroFormulario}
            </p>
          )}
          <button className={styles.btnAdicionarTarefa} type="submit">
            <AddCircleOutlineIcon /> Adicionar
          </button>
        </form>
      ) : (
        <button
          className={styles.btnAdicionarTarefa}
          onClick={handleAdicionarTarefa}
        >
          <AddCircleOutlineIcon /> Adicionar
        </button>
      )}
    </div>
  );
};

export default SideTarefas;
