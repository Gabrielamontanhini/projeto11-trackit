import React from "react";
import Habitos from "./components/Habitos/Habitos";
import Historico from "./components/Historico/Historico";
import Hoje from "./components/Hoje/Hoje";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCadastro from "./components/TelaInicial/TelaCadastro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
