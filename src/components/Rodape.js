import { Link } from "react-router-dom"
import styled from "styled-components"
import elipse from "../assets/elipse.svg"
import dayjs from "dayjs"
import { useContext } from "react"
import { HabitosContext } from "../contexts/HabitosContext"
import { ProgressBar } from "react-loader-spinner"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function Rodape(props) {


    const { habitosTotais } = useContext(HabitosContext);
    function teste() {
        console.log(habitosTotais)
    }

    return (
        <>
            <RodapeEstilizado data-test="menu">
                <Link to="/habitos" data-test="habit-link" >
                    <p>Hábitos</p>
                </Link>
                <Link to="/hoje" data-test="today-link">
                    <Bolinha onClick={teste}>
                        <CircularProgressbar
                            value={props.porcentagem}
                            text={`Hoje`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#ffffff",
                                pathColor: "#ffffff",
                                trailColor: "transparent",
                            })}
                        />
                    </Bolinha>
                </Link>
                <Link to="/historico" data-test="history-link" >
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
top: calc(100%-70px);
width: 100%;
max-width: 400px;
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
