import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { HabitosContext } from "../../contexts/HabitosContext";
import Habitos from "../Habitos/Habitos";

export default function ProgressoDeHoje(props){

    const { habitosTotais } = useContext(HabitosContext);



const [porcentagem, setPorcentagem]=useState()

function mostraErro(){
    console.log(props)
    console.log(porcentagem)
}

useEffect(()=>{
    setPorcentagem(props.progresso)
}, [props.progresso])



    if (props.progresso === "0"){
        return (
            <>
            <AindaNada data-test="today-counter">Nenhum hábito concluído ainda</AindaNada>
            </>
        )
    } else  if (props.progresso === "NaN"){
        return (
            <>
            <AindaNada data-test="today-counter">Nenhum hábito concluído ainda</AindaNada>
            </>
        )
    } else{
        return (
            <Parabens data-test="today-counter" onClick={mostraErro}>{porcentagem}% de hábitos concluidos hoje!  </Parabens>
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
