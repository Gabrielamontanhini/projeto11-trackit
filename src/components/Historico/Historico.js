import styled from "styled-components";
import Cabesalho from "../Cabesalho";
import Rodape from "../Rodape";

export default function Historico(){
    return (
        <>
        <ContainerHoje>
        <Cabesalho/>
<CorpoHistorico>
    <h1>Histórico</h1>
    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
</CorpoHistorico>

        <Rodape/>
        </ContainerHoje>
        </>
    )
}

const ContainerHoje = styled.div`
background-color: #E5E5E5;
max-width: 400px;
height: 667px;
margin: auto;
margin-top: 40px;
border: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const CorpoHistorico = styled.div`
width: 90%;
display: flex;
flex-direction: column;
height: 80%;
margin-left: 20px;
margin-top: 28px;
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