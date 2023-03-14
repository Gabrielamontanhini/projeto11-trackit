import { useState } from "react";
import styled from "styled-components";
import Cabesalho from "./Cabesalho";
import CorpoHabitos from "./CorpoHabitos";

export default function Habitos(){
const [habitos, setHabitos] = useState(false)


function habitar(){
    setHabitos(true)
}

    return(
        <>
        <ContainerHabitos>
        <Cabesalho/>
        <AdicionarHabito><p>Meus Hábitos</p> <div onClick={habitar}>+</div></AdicionarHabito>
        <CorpoHabitos habito={habitos}/>
        </ContainerHabitos>
        </>
    )
}


const ContainerHabitos = styled.div`
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