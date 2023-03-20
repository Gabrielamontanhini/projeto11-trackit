import React, { useContext, useState } from "react";
import Habitos from "./components/Habitos/Habitos";
import Historico from "./components/Historico/Historico";
import Hoje from "./components/Hoje/Hoje";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCadastro from "./components/TelaInicial/TelaCadastro";
import { UserContext } from "./contexts/UserContext";
import { HabitosContext } from "./contexts/HabitosContext";



function App() {
  const [user, setUser] = useState([])

  const [habitosTotais, setHabitosTotais] = useState([])
  const [token, setToken] = useState("")

  return (
    <div>
      <UserContext.Provider value={{ user }}>
        <HabitosContext.Provider value={{ habitosTotais, setHabitosTotais }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TelaInicial setToken={setToken} />} />
              <Route path="/cadastro" element={<TelaCadastro setUser={setUser} />} />
              <Route path="/hoje" element={<Hoje token={token} />} />
              <Route path="/habitos" element={<Habitos token={token} />} />
              <Route path="/historico" element={<Historico />} />
            </Routes>
          </BrowserRouter>
        </HabitosContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
