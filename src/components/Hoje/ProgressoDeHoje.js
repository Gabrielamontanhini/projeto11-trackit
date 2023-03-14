import styled from "styled-components"

export default function ProgressoDeHoje(props){
    if (props.feito === 0){
        return (
            <>
            <AindaNada>Nenhum hábito concluído ainda</AindaNada>
            </>
        )
    } else {
        return (
            <Parabens>Parabéns você fez algo!</Parabens>
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
