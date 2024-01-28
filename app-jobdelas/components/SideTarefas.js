import React, { useState, useEffect } from "react";
import TarefasService from "../services/TarefasService";
import styles from "../styles/SideTarefas.module.css";
import UserService from "@/services/UserService";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; // Importe o ícone desejado

const SideTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [usuariaId, setUsuariaId] = useState(null);

  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const token = localStorage.getItem("token");

        const detalhesUsuaria = await UserService.detalhesUsuaria(token);
        setUsuariaId(detalhesUsuaria.id);

        const tarefasUsuaria = await TarefasService.listarTarefasPorUsuaria(
          detalhesUsuaria.id
        );

        console.log(tarefasUsuaria);

        setTarefas(tarefasUsuaria);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    };

    carregarTarefas();
  }, []);

  const handleConcluirTarefa = (tarefaId) => {
    console.log(`Concluir Tarefa ${tarefaId}`);
    // Adicione lógica para atualizar o estado da tarefa como concluída ou não
  };

  const handleAdicionarTarefa = () => {
    console.log("Botão Adicionar Tarefa clicado");
  };

  return (
    <div className={`${styles.lateral_home} ${styles.sideTarefas}`}>
      <div className={`${styles.listaTitle} ${styles.sideHeader}`}>
        Lista de Tarefas
      </div>
      <div className={styles.listaTarefas}>
        {tarefas.map((tarefa) => (
          <div key={tarefa.id} className={styles.tarefa}>
            <div className={styles.titulo}>{tarefa.titulo}</div>
            <div className={styles.botoesTarefa}>
              <button
                className={styles.concluirTarefa}
                onClick={() => handleConcluirTarefa(tarefa.id)}
              >
                <CheckCircleOutlineIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className={styles.btnAdicionarTarefa}
        onClick={handleAdicionarTarefa}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
};

export default SideTarefas;
