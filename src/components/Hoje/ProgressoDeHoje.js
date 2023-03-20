import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { HabitosContext } from "../../contexts/HabitosContext";
import Habitos from "../Habitos/Habitos";

export default function ProgressoDeHoje(props){

    const { habitosTotais } = useContext(HabitosContext);



const [porcentagem, setPorcentagem]=useState()



useEffect(()=>{
    setPorcentagem(props.progresso)
}, [props.progresso])



    if (props.progresso === 0 || porcentagem === NaN){
        return (
            <>
            <AindaNada data-test="today-counter">Nenhum hábito concluído ainda</AindaNada>
            </>
        )
    } else {
        return (
            <Parabens data-test="today-counter">{porcentagem}% de hábitos concluidos hoje!</Parabens>
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
