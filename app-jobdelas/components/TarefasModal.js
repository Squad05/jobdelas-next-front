import React from "react";
import styles from "../styles/ListaTarefas.module.css";

const ListaTarefas = () => {
  const tarefasFixas = [
    { id: 1, titulo: "Tarefa 1", concluida: false },
    { id: 2, titulo: "Tarefa 2", concluida: true },
    { id: 3, titulo: "Tarefa 3", concluida: false },
    { id: 4, titulo: "Tarefa 4", concluida: true },
    { id: 5, titulo: "Tarefa 5", concluida: false },
  ];

  const handleAdicionarTarefa = () => {
    console.log("Botão Adicionar Tarefa clicado");
  };

  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <div className={styles.listaTarefas}>
        {tarefasFixas.map((tarefa) => (
          <div key={tarefa.id} className={styles.tarefa}>
            <div className={styles.titulo}>{tarefa.titulo}</div>
            <button onClick={() => console.log(`Concluir Tarefa ${tarefa.id}`)}>
              {tarefa.concluida ? "Desconcluir" : "Concluir"}
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleAdicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
};

export default ListaTarefas;
