import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext"

export default function Cabesalho(){

const {user}=useContext(UserContext)

function mostra(){
    console.log({user}.user.image)
}

    return (
        <>
        <CabesalhoTrackit data-test="header">
            <h1>
                TrackIt
            </h1>
            <img onClick={mostra}
                src={{user}.user.image}
                />
        </CabesalhoTrackit>
        </>
    )
}

const CabesalhoTrackit = styled.div`
position: fixed;
top: 0px;
bottom:calc(100vh-140px);
width: 100%;
max-width: 400px;
height: 70px;
background-color:  #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;

h1{

    font-family: 'Playball';
font-style: normal;
    font-weight: 400;
font-size: 38.982px;
margin-left: 18px;
color: #FFFFFF;
}
img{
    width: 51px;
height: 51px;
border-radius: 98.5px;
margin-right: 18px;
}
`