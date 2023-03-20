import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components";


export default function Entrar({entrar}){
    if (entrar === true){
        return (
            <Titulo>Entrar</Titulo>
        )
    } else {
        return (
            <ThreeDots
width="330px"
height="40px"
color="white"
/>
        )
    }
}

const Titulo = styled.h4` 
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`