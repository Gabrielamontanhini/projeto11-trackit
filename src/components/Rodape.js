import { Link } from "react-router-dom"
import styled from "styled-components"
import elipse from "../assets/elipse.svg"

export default function Rodape(){
    return (
        <>
        <RodapeEstilizado>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <Bolinha>
                    <img src={elipse}/>
                    <h1>
                        Hoje
                    </h1>
                </Bolinha>
            </Link>
            <Link to="/historico">
                <p>
                    Histórico
                </p>
            </Link>
        </RodapeEstilizado>
        </>
    )
}

const RodapeEstilizado = styled.div`
position: fixed;
bottom: 0px;
right: 0px;
width: 100%;
height: 70px;
background-color: #FFFFFF;
display: flex;
justify-self: flex-end;
align-self: flex-end;
align-items: center;
justify-content: space-evenly;
p{
    color: #52B6FF;
    font-weight: 400;
font-size: 17.976px;
}
`

const Bolinha = styled.div`
z-index: 1;
margin-bottom: 50px;
width: 91px;
height: 91px;
border-radius: 45px;
background: #52B6FF;
position: relative;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 69px;
    height: 79px;
    position: absolute;
right: 6px;
bottom: 4px;
}
h1{
    color: #FFFFFF;
    font-weight: 400;
font-size: 17.976px;
}
`
