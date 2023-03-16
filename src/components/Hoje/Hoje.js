import { useState } from "react";
import styled from "styled-components";
import Cabesalho from "../Cabesalho";
import check from "../../assets/check.svg"
import ProgressoDeHoje from "./ProgressoDeHoje";
import Rodape from "../Rodape";

export default function Hoje() {
    const [concluidos, setConcluidos] = useState(0)

    function fazerEste() {
        setConcluidos(1)
    }

    const habitos = [{ habito: "Lavar a louça" }]/* {habito:"Almoçar"},{habito:"Almoçar"},{habito:"Almoçar"},{habito: "Caminhar"}, {habito: "Fazer carinho nos gatos da rua"}]*/

    return (
        <>
            <ContainerHoje>
                <Cabesalho data-test="header" />
                <Dia>
                    <h2 data-test="today">Terça, 14/03</h2>
                    <ProgressoDeHoje data-test="today-counter" feito={concluidos} />
                </Dia>
                <ContainerHabitos>
                    {habitos.map((h) =>
                        <Habito data-test="today-habit-container"  onClick={fazerEste}>
                            <div>
                                <p>{h.habito}</p>
                                <Semana>
                                    <div>D</div> <div>S</div> <div>T</div> <div>Q</div> <div>Q</div> <div>S</div> <div>S</div>
                                </Semana>
                            </div>
                            <CaixaCheck><img src={check} /></CaixaCheck>
                        </Habito>)}
                </ContainerHabitos>
                <Rodape data-test="menu" />
            </ContainerHoje>
        </>
    )
}


const CaixaCheck = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 13px;
margin-right: 13px;
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
`

const ContainerHoje = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #E5E5E5;
min-width: 100vw;
max-width: 500px;
height: 100vh;
margin: auto;
margin-top: 70px;
border: 1px solid grey;
font-family: 'Lexend Deca';
font-style: normal;
`
const Dia = styled.div`
height: 90px;
width: 95%;
margin-left: 5%;
margin-bottom: 10px;
display: flex;
flex-direction: column;
h2{
    font-weight: 400;
font-size: 22.976px;
color: #126BA5;
margin-top: 28px;
margin-bottom: 8px;
}
`

const ContainerHabitos = styled.div`
overflow-y: scroll;
height: 90%;
`



const Habito = styled.div`
display: flex;
flex-direction: row;
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 10px;
p{
    margin-left: 15px;
    margin-bottom: 8px;
    margin-top: 15px;
    color: #666666;
    }
`
const Semana = styled.div`

display: flex;
width: 65%;
justify-self: flex-start;
margin-left: 18px;
div{
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 4px;
}
`