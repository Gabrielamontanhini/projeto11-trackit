import styled from "styled-components";
import Cabesalho from "../Cabesalho";
import Rodape from "../Rodape";

export default function Historico(){
    return (
        <>
        <ContainerHoje>
        <Cabesalho data-test="header"/>
<CorpoHistorico>
    <h1>Histórico</h1>
    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
</CorpoHistorico>

        <Rodape data-test="menu"/>
        </ContainerHoje>
        </>
    )
}

const ContainerHoje = styled.div`
background-color: #E5E5E5;
max-width: 400px;
height: 80vh;
margin: auto;
margin-top: 70px;
display: flex;
flex-direction: column;
justify-content: space-between;
font-family: 'Lexend Deca';
font-style: normal;
`

const CorpoHistorico = styled.div`
width: 90%;
display: flex;
flex-direction: column;
height: 80%;
margin-left: 20px;
margin-top: 58px;
h1{
    font-weight: 400;
font-size: 22.976px;
color: #126BA5;
}
p{
    margin-top: 17px;
    font-weight: 400;
font-size: 17.976px;
color: #666666;
}
`