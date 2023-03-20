import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Cabesalho from "../Cabesalho";
import check from "../../assets/check.svg"
import ProgressoDeHoje from "./ProgressoDeHoje";
import Rodape from "../Rodape";
import { HabitosContext } from "../../contexts/HabitosContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import SEMANA from "../../semana";
import axios from "axios";

export default function Hoje({ token }) {

    const { habitosTotais } = useContext(HabitosContext);
    const [concluidos, setConcluidos] = useState([])
    const [dia, setDia] = useState("")
    const [numero, setNumero] = useState(0)
    const [mes, setMes] = useState(0)
    const [habitosDeHoje, setHabitosDeHoje] = useState([])
    const config = { headers: { Authorization: `Bearer ${token}` } }
const [razao, setRazao]=useState(0)


   

    function fazerEste(id, done) {
    let feito = done

    const concluir = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
    {},
    config)

    concluir.then((res)=>{
        console.log(res.data)
    })
    concluir.catch((err)=>{
        console.log(err.response.data.message)
    })

    let a = habitosDeHoje.length
    let arrayDeFeitos = habitosDeHoje.filter(h => h.done !== false)
    setConcluidos(arrayDeFeitos)
let result = ((arrayDeFeitos.length/a)*100).toFixed(0)
setRazao(result)
    }


    useEffect(() => {
        const busca = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        busca.then((res) => {
            console.log(res)
            setHabitosDeHoje(res.data)
        })
        busca.catch((err) => {
            console.log(err.response.data.message)
        })
        let a = dayjs().day()
        if (a = 1) {
            setDia("Segunda-feira")
        } else if (a = 0) {
            setDia("Domingo")
        } else if (a = 2) {
            setDia("Terça-feira")
        } else if (a = 3) {
            setDia("Quarta-feira")
        } else if (a = 4) {
            setDia("Quinta-feira")
        } else if (a = 5) {
            setDia("Sexta-feira")
        } else if (a = 6) {
            setDia("Sábado")
        }
        let b = dayjs().month()
        setMes(b + 1)
        let c = dayjs().date()
        setNumero(c)
    }, [])





    return (
        <>
            <ContainerHoje>
                <Cabesalho data-test="header" />
                <Dia>
                    <h2 data-test="today">
                        {dia}, {numero}/{mes}
                    </h2>
                    <ProgressoDeHoje
                        data-test="today-counter"
                        progresso={razao}
                    />
                </Dia>
                <ContainerHabitos>
                    {habitosDeHoje.map((h) =>
                        <Habito
                            data-test="today-habit-container"
                            onClick={() => fazerEste(h.id, h.done)}
                        >
                            <div>
                                <h1 data-test="today-habit-name">
                                    {h.name} de id: {h.id}
                                </h1>
                                <h3>Sequência atual: {h.currentSequence}</h3>
                                <h3>Seu recorde: {h.highestSequence}</h3>
                            </div>
                            <CaixaCheck
                                data-test="today-habit-check-btn"
                                feito={h.done}
                            >
                                <img src={check} />
                            </CaixaCheck>
                        </Habito>)}
                </ContainerHabitos>
                <Rodape data-test="menu" />
            </ContainerHoje>
        </>
    )
}


const CaixaCheck = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 13px;
margin-right: 13px;
margin-bottom: 10px;
min-width: 69px;
min-height: 69px;
background:${props => {
        if (props.feito === false) {
            return "#EBEBEB"
        } else {
            return "#8FC549"
        }
    }} ;
border: 1px solid #E7E7E7;
border-radius: 5px;
`

const ContainerHoje = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #E5E5E5;
width: 100%;
max-width: 400px;
height: 80vh;
margin: auto;
margin-top: 70px;
border: 1px solid grey;
font-family: 'Lexend Deca';
font-style: normal;
`
const Dia = styled.div`
height: 90px;
width: 95%;
margin-left: 5%;
margin-bottom: 10px;
display: flex;
flex-direction: column;
h2{
    font-weight: 400;
font-size: 22.976px;
color: #126BA5;
margin-top: 28px;
margin-bottom: 8px;
}
`

const ContainerHabitos = styled.div`
overflow-y: scroll;
height: 90%;
`



const Habito = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 10px;
h1{
    font-size: 19px;
    margin-left: 15px;
    margin-bottom: 8px;
    margin-top: 15px;
    color: #666666;
    }
h3{
    font-size: 13px;
    margin-left: 15px;
    color: #666666;
}
`
const Semana = styled.div`
display: flex;
width: 65%;
justify-self: flex-start;
margin-left: 18px;
`



/*  const habito = id;
        if (concluidos.includes(habito)) {
            let novoArray = concluidos.filter(n => n !== habito)
            setConcluidos(novoArray)
        } else if (!concluidos.includes(habito)) {
            const concluir = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito}/check`, {},  config)
            concluir.then((res) => {
                console.log(res.data)
            })
            concluir.catch((err) => {
                alert(err.response.data.message)
            })
            setConcluidos([...concluidos, habito])
        }*/