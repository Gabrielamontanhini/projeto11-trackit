import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { HabitosContext } from "../../contexts/HabitosContext";
import Habitos from "../Habitos/Habitos";

export default function ProgressoDeHoje(props){

    const { habitosTotais } = useContext(HabitosContext);



const [razao, setRazao]=useState(0)



useEffect(()=>{
    let a = habitosTotais.length
    let b = props.feito.length
    let porcentagem = (b/a)*100
    setRazao(porcentagem)
    console.log({razao})
}, [props.feito])


function Dizai(){
let a = habitosTotais.length
let b = props.feito.length
let porcentagem = (b/a)*100
setRazao(porcentagem)
console.log({razao})
}
    if (props.feito.length === 0){
        return (
            <>
            <AindaNada>Nenhum hábito concluído ainda</AindaNada>
            </>
        )
    } else {
        return (
            <Parabens>{razao}% de hábitos concluidos hoje!</Parabens>
        )
    }
}

const AindaNada = styled.p`
font-weight: 400;
font-size: 17.976px;
color: #BABABA;
`


const Parabens = styled.p`
font-weight: 400;
font-size: 17.976px;
color: #8FC549;
`
