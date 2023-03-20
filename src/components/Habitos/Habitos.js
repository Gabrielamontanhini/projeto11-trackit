import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HabitosContext } from "../../contexts/HabitosContext";
import Cabesalho from "../Cabesalho";
import Rodape from "../Rodape";
import CorpoHabitos from "./CorpoHabitos";
import SEMANA from "../../semana";



export default function Habitos({ token }) {
    const { habitosTotais, setHabitosTotais } = useContext(HabitosContext)

    const [display, setDisplay] = useState("none")
    const [habitoNome, setHabitoNome] = useState("")
    const [diasHabito, setDiasHabito] = useState([])
    const [naoClicavel, setNaoClicavel]=useState(false)


    
    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        promise.then((res) => {
            setHabitosTotais(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [habitosTotais])

    function adicionarDia(i) {
        const dia = i
        if (!diasHabito.includes(dia)){
            setDiasHabito([...diasHabito, dia])
            console.log([...diasHabito, dia])
        } else if (diasHabito.includes(dia)){
          let novaArray = diasHabito.filter(d=> d !== dia) 
            console.log(novaArray)
            setDiasHabito(novaArray)
        }
        
        
    }


    function novoHabito() {
        setDisplay("flex")
    }

    function cancelarNovoHabito() {
        setDisplay("none")
        setDiasHabito([])
        setHabitoNome("")
    }

    function habitar(e) {
        e.preventDefault()
        setNaoClicavel(true)
        const config = { headers: { Authorization: `Bearer ${token}` } }
        let body = {
            "name": habitoNome,
            "days": diasHabito
        }
        setHabitosTotais([...habitosTotais, body])
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)

        promise.then((res) => {
            console.log("deu certo")
            console.log(res.data)
            setNaoClicavel(false)
        })
        promise.catch((err) => console.log(err.response.data))
        setHabitoNome("")
        setDiasHabito([])
        setDisplay("none")
        setNaoClicavel(false)
    }

    return (
        <>
            <ContainerHabitos>
                <Cabesalho data-test="header" />
                <AdicionarHabito>
                    <p>
                        Meus Hábitos
                    </p>
                    <div data-test="habit-create-btn" onClick={novoHabito}>
                        <h3>
                            +
                        </h3>
                    </div>
                </AdicionarHabito>
                <form onSubmit={habitar}>
                    <ConfigHabito
                        data-test="habit-create-container"
                        display={display}
                    >
                        <input
                            data-test="habit-name-input"
                            type="text"
                            disabled={naoClicavel}
                            placeholder=" Nome do hábito"
                            value={habitoNome}
                            onChange={e => setHabitoNome(e.target.value)}
                        />
                        <Semana>

                            {SEMANA.map((d, i) => <Day
                                data-test="habit-day"
                                key={d.i}
                                disabled={naoClicavel}
                                i={i}
                                dia={d.dia}
                                function={() => adicionarDia(i)}
                                estado={diasHabito.includes(i) ? "pego" : "nn"}
                                onClick={() => adicionarDia(i)}>
                                <h1>{d.dia}</h1>
                            </Day>)}
                        </Semana>
                        <Comandos>
                            <p data-test="habit-create-cancel-btn"
                            disabled={naoClicavel}
                            onClick={cancelarNovoHabito}>
                                Cancelar
                            </p>
                            <button 
                            data-test="habit-create-save-btn" 
                            disabled={naoClicavel}
                            type="submit" >
                                <h4> Salvar</h4>
                            </button>
                        </Comandos>
                    </ConfigHabito>
                </form>



                <CorpoHabitos habitosTotais={habitosTotais} token={token} setHabitosTotais={setHabitosTotais} />





                <Rodape data-test="menu" />
            </ContainerHabitos>
        </>
    )
}


const ContainerHabitos = styled.div`
background-color: #E5E5E5;
max-width: 400px;
height: 667px;
margin: auto;
margin-top: 40px;
border: 1px solid grey;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lexend Deca';
font-style: normal;
`

const AdicionarHabito = styled.div`
margin-top: 45px;
margin-bottom: 28px;
width: 90%;
height: 45px;
display: flex;
justify-content: space-between;
align-items: center;
p{
    font-weight: 400;
font-size: 22.976px;
color: #126BA5;
}
div{
    width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display: flex;
align-items: center;
justify-content: center;
}
h3{
    color: #FFFFFF;
    font-weight: 400;
}
`

const ConfigHabito = styled.div`
display: ${props => {
        if (props.display === "none") {
            return "none"
        } else {
            return "flex"
        }
    }};
width: 335px;
height: 230px;
flex-direction: column;
justify-content: space-evenly;
background-color: #FFFFFF;
border-radius: 5px;
margin-bottom: 29px;
input{
    background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
    width: 303px;
    height: 45px;
    margin-top: 18px;
    margin-left: 18px;
    margin-right: 18px;
    margin-bottom: 8px;
    ::placeholder{
        font-weight: 400;
font-size: 19.976px;
line-height: 25px;
margin-left: 15px;
color: #DBDBDB;
    }
}
`

const Comandos = styled.div`
display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 45%;
    button{
        background: #52B6FF;
border-radius: 4.63636px;
border: none;
width: 84px;
height: 35px;
margin-right: 16px;
color: #FFFFFF;
font-weight: 400;
    }
    p{
        font-weight: 400;
font-size: 15.976px;
color: #52B6FF;
margin-right: 23px;
    }
    h4{
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
    }
`

const Semana = styled.div`
display: flex;
width: 65%;
justify-self: flex-start;
margin-left: 18px;
`


const Day = styled.div` 
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 4px;
color: #DBDBDB;
background-color: ${props => {
        if (props.estado === "pego") {
            return "#CFCFCF"
        } else if (props.estado === "nn") {
            return "white"
        }
    }};
& h1{
    font-weight: 600;
    color: ${props => {
        if (props.estado === "pego") {
            return "white"
        } else if (props.estado === "nn") {
            return "#DBDBDB"
        }
    }};
}
`