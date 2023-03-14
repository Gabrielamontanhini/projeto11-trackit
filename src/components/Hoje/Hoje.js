import { useState } from "react";
import styled from "styled-components";
import Cabesalho from "../Cabesalho";
import check from "../../assets/check.svg"
import ProgressoDeHoje from "./ProgressoDeHoje";

export default function Hoje(){
const [concluidos, setConcluidos] = useState(0)

function fazerEste(){
    alert("ta fazeno")
    setConcluidos(1)
}

const habitos = [{habito: "Lavar a louça"}, {habito: "Caminhar"}, {habito: "Fazer carinho nos gatos da rua"}]

    return (
        <>
        <ContainerHoje>
        <Cabesalho/>
        <Dia>
        <h2>Terça, 14/03</h2>
        <ProgressoDeHoje feito={concluidos}/>
        </Dia>
        {habitos.map((h)=>
            <Habito onClick={fazerEste}>
               <div> 
                <p>{h.habito}</p>
             <Semana>
            <div>D</div> <div>S</div> <div>T</div> <div>Q</div> <div>Q</div> <div>S</div> <div>S</div>
            </Semana>
            </div>
            <CaixaCheck><img src={check}/></CaixaCheck>
            </Habito>)}
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
max-width: 400px;
height: 667px;
margin: auto;
margin-top: 40px;
border: 1px solid grey;
`
const Dia = styled.div`
height: 90px;
width: 95%;
margin-left: 5%;;
display: flex;
flex-direction: column;
h2{
    font-weight: 400;
font-size: 22.976px;
color: #126BA5;
margin-top: 28px;
}
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