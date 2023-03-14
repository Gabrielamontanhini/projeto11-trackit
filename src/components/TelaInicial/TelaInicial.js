import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-completa.svg"




export default function TelaInicial(){

    const [cadastro, setCadastro] = useState(true)
    

    function cadastrar(){
        setCadastro(false)
        if (cadastro === false){
            setCadastro(true)
        }
    }

if (cadastro === false){
    return (
        <>
        <ContainerInicial>
        <img src={logo}/>
        <form>
        <input type="email" placeholder="email" ></input>
        <input type="password" placeholder="senha"></input>
        <input type="text" placeholder="nome"></input>
        <input type="url" placeholder="foto"></input>
<button>Entrar</button>  
<p onClick={cadastrar}>Já tem uma conta? Faça login!</p>      
        </form>
        </ContainerInicial>
        </>
    )
} else {
    return (
        <>
        <ContainerInicial>
        <img src={logo}/>
        <form>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>

   <Link to="/hoje"> <button>Entrar</button>  </Link>
<p onClick={cadastrar}>Não tem uma conta? Cadastre-se!</p>      
        </form>
        </ContainerInicial>
        </>
    )
}
}


const ContainerInicial = styled.div`
max-width: 400px;
height: 667px;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
margin-top: 40px;
border: 1px solid grey;
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
`