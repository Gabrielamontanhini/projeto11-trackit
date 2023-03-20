import { useContext, useState } from "react";
import styled from "styled-components";
import Cabesalho from "../Cabesalho";
import check from "../../assets/check.svg"
import ProgressoDeHoje from "./ProgressoDeHoje";
import Rodape from "../Rodape";
import { HabitosContext } from "../../contexts/HabitosContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import SEMANA from "../../semana";

export default function Hoje() {
    const [concluidos, setConcluidos] = useState([])
const { habitosTotais } = useContext(HabitosContext);

    function fazerEste(este) {
        if (concluidos.includes(este)){
            setConcluidos([...concluidos])
        } else if (!concluidos.includes(este)){
        setConcluidos([...concluidos, este])}
    }



    return (
        <>
            <ContainerHoje>
                <Cabesalho data-test="header" />
                <Dia>
                    <h2 data-test="today">{/*dayjs.utc().local().format()*/}</h2>
                    <ProgressoDeHoje 
                    data-test="today-counter" 
                    feito={concluidos} 
                    />
                </Dia>
                <ContainerHabitos>
                    {habitosTotais.map((h) =>
                        <Habito 
                        data-test="today-habit-container"  
                        onClick={()=>fazerEste(h.name)}
                        >
                            <div>
                                <p data-test="today-habit-name">
                                    {h.name}
                                </p>
                                <Semana>
                                {SEMANA.map((d, i) => <Diaa key={d.i} estado={h.days.includes(i) ? "pego" : "nn"}><h1>{d.dia}</h1></Diaa>)}
                                </Semana>
                            </div>
                            <CaixaCheck 
                            data-test="today-habit-check-btn"
                            estado={concluidos.includes(h.name) ? "feito" : "ainda"}
                            ><img src={check} />
                            </CaixaCheck>
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
background:${props=>{
if (props.estado === "ainda"){
    return "#EBEBEB"
} else {
    return "#8FC549"
} }} ;
border: 1px solid #E7E7E7;
border-radius: 5px;
`

const ContainerHoje = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #E5E5E5;
width: 100%;
max-width: 400px;
height: 80vh;
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

`
const Diaa = styled.div` 
 width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 4px;
background-color: ${props => {
        if (props.estado === "pego") {
            return "#CFCFCF"
        } else {
            return "white"
        }
    }};
& h1{
    font-weight: 600;
    color: ${props => {
        if (props.estado === "pego") {
            return "white"
        } else if (props.estado === "nn") {
            return "#DBDBDB"
        }
    }};
}
`