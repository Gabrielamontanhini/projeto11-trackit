import axios from "axios"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/logo-completa.svg"
import { ThreeDots } from 'react-loader-spinner'

export default function TelaCadastro({setUser}) {
    const Navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [cadastrar, setCadastrar]=useState("Cadastrar")
    const [naoClicavel, setNaoClicavel]=useState(false)


    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    let body = {
        "email": email,
        "name": name,
        "password": password,
        "image": image
    }

    function fazerCadastro(e) {
        e.preventDefault()
        setCadastrar("Cadastrando")
        setNaoClicavel(true)

        const cadastro = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        console.log(body)

        cadastro.then((res) => {
            console.log(res.data)
setUser(body)
            Navigate("/")
            setCadastrar("Cadastrar")
            setNaoClicavel(false)
        })
        cadastro.catch((erro) => {
            alert(erro.response.data.message)
            console.log(erro.response.data.message)
            setNaoClicavel(false)
        }
        )
    }


    return (
        <ContainerInicial>
            <img src={logo} />
            <form onSubmit={fazerCadastro}>
                <input 
                data-test="email-input" 
                type="email" 
                placeholder="email" 
                disabled={naoClicavel} 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                    pattern="^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$"
                    title="Precisa ser um email valido. Exemplo (nome@dominio.com)"
                required/>
                
                <input 
                data-test="password-input" 
                type="password" 
                placeholder="senha" 
                disabled={naoClicavel} 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required/>

                <input 
                data-test="user-name-input" 
                type="text" 
                placeholder="nome" 
                disabled={naoClicavel} 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required/>

                <input 
                data-test="user-image-input" 
                disabled={naoClicavel} 
                type="url" 
                placeholder="foto" 
                value={image} 
                onChange={e => setImage(e.target.value)}
                required/>

                <button 
                data-test="signup-btn" 
                type="submit"
                disabled={naoClicavel} >
                    <h4>
                        {cadastrar}
                    </h4>
                </button>

                <Link to="/" data-test="login-link">
                    <p>
                        Já tem uma conta? Faça login!
                    </p>
                </Link>
            </form>
        </ContainerInicial>
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