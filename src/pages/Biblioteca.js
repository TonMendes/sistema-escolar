import { useState } from "react";
import styles from "./Biblioteca.module.css";
import db from "../db.json";

function Biblioteca() {
  const [livros] = useState(db.livros);

  return (
    <div className={styles.container}>
      <h1>Lista de Livros</h1>

      {livros.length === 0 ? (
        <p>Nenhum livro encontrado</p>
      ) : (
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Biblioteca;
