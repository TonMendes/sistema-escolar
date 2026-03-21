import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAlunos from "./pages/CadastrarAlunos";
import Alunos from "./pages/Alunos";
import Biblioteca from "./pages/Biblioteca";
import Dashboard from "./pages/Dashboard";
import CadastrarLivros from "./pages/CadastrarLivros";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : "light"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastarAlunos" element={<CadastrarAlunos />} />
            <Route path="/Alunos" element={<Alunos />} />
            <Route path="/Biblioteca" element={<Biblioteca />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/cadastrarLivros" element={<CadastrarLivros />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
