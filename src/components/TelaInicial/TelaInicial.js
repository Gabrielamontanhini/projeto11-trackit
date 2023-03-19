import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-completa.svg"



export default function TelaInicial({setToken}) {
const navigate = useNavigate()
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")



const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"


function fazerLogin(e){
e.preventDefault()
let body = {
    "email": email,
    "password": password
    }

const login = axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
    body)

login.then((res)=>{
    console.log(res.data)
    setToken(res.data.token)
    navigate("/hoje")
})

login.catch((erro)=> {
    console.log(erro.response.data.message)
})
}

        return (
            <>
                <ContainerInicial>
                    <img src={logo} />
                    <form onSubmit={fazerLogin}>
                        <input 
                        data-test="email-input"
                        type="email"
                        placeholder="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required
                        pattern="^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$"
                        title="Precisa ser um email valido. Exemplo (nome@dominio.com)"
                        />
                        <input
                        data-test="password-input" 
                        type="password" 
                        placeholder="senha" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required/>
                            <button data-test="login-btn" type="submit">
                                <h4>
                                    Entrar
                                </h4>
                            </button> 
                        <Link to="/cadastro" data-test="signup-link">
                            <p>
                                Não tem uma conta? Cadastre-se!
                            </p>
                        </Link>
                    </form>
                </ContainerInicial>
            </>
        )
    }



const ContainerInicial = styled.div`
min-height: 100vh;
max-height: 1000px;
max-width: 900px;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
img{
    width: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
input{
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
}
button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
border-radius: 4.63636px;
}
p{
    color: #52B6FF;
    text-decoration-line: underline;
    margin-top: 25px;
}
h4{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
}
`