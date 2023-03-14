import React from "react";
import Habitos from "./components/Habitos/Habitos";
import Historico from "./components/Historico/Historico";
import Hoje from "./components/Hoje/Hoje";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
