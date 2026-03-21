import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaHome, FaUserGraduate, FaBook, FaSun, FaMoon } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className={styles.header}>
      <h1>
        Sistema Escolar <IoSchoolOutline />{" "}
      </h1>

      <nav>
        <Link to="/">
          <FaHome /> Home
        </Link>
        <Link to="/alunos">
          <FaUserGraduate /> Alunos
        </Link>
        <Link to="/biblioteca">
          <FaBook /> Biblioteca
        </Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
