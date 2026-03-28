import { useState } from "react";
import styles from "./Alunos.module.css";
import db from "../db.json";

function Alunos() {
  const [alunos] = useState(db.alunos);
  const [busca, setBusca] = useState("");

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <h1>Lista de Alunos</h1>

      <input
        type="text"
        placeholder="Buscar aluno"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className={styles.busca}
      />

      {alunosFiltrados.length === 0 ? (
        <p className={styles.vazio}>Nenhum aluno encontrado.</p>
      ) : (
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {alunosFiltrados.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.curso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Alunos;
