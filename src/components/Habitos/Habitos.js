import { useState } from "react";
import styled from "styled-components";
import Cabesalho from "../Cabesalho";
import Rodape from "../Rodape";
import CorpoHabitos from "./CorpoHabitos";

export default function Habitos(){
const [habitos, setHabitos] = useState(false)

const [display, setDisplay]=useState(false)


function configHabito(){
setDisplay(true)
}

function habitar(){
    setHabitos(true)
    setDisplay(false)
}

    return(
        <>
        <ContainerHabitos>
        <Cabesalho/>
        <AdicionarHabito><p>Meus Hábitos</p> <div onClick={configHabito}>+</div></AdicionarHabito>
        <ConfigHabito display={display}>
            <input type="text" placeholder="nome do hábito"></input>
            <Semana>
            <div>D</div>
            <div>S</div>
            <div>T</div>
            <div>Q</div>
            <div>Q</div>
            <div>S</div>
            <div>S</div>
            </Semana>
            <Comandos>
                <p>Cancelar</p>
                <button onClick={habitar}>Salvar</button>
            </Comandos>
        </ConfigHabito>
        <CorpoHabitos habito={habitos}/>


<Rodape/>
        </ContainerHabitos>
        </>
    )
}


const ContainerHabitos = styled.div`
background-color: #E5E5E5;
max-width: 400px;
height: 667px;
margin: auto;
margin-top: 40px;
border: 1px solid grey;
display: flex;
flex-direction: column;
align-items: center;
`

const AdicionarHabito = styled.div`
margin-top: 25px;
width: 90%;
height: 45px;
display: flex;
justify-content: space-between;
align-items: center;
p{
    font-weight: 400;
font-size: 22.976px;
color: #126BA5;
}
div{
    width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display: flex;
align-items: center;
justify-content: center;
}
`

const ConfigHabito = styled.div`
display: ${props => {
    if (props.display === false){
    return "none"
} else {
    return "flex"
}}};
width: 340px;
height: 180px;
flex-direction: column;
justify-content: space-evenly;
background-color: #FFFFFF;
input{
    width: 303px;
    height: 45px;
    margin-top: 18px;
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 8px;
}
`

const Comandos = styled.div`
display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 45%;
    button{
        background: #52B6FF;
border-radius: 4.63636px;
width: 84px;
height: 35px;
margin-right: 16px;
    }
    p{
        font-weight: 400;
font-size: 15.976px;
color: #52B6FF;
margin-right: 23px;
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