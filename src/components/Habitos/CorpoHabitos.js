import styled from "styled-components"


import lixo from "../../assets/trash.svg"

export default function CorpoHabitos(props){

    const habitos = [{habito: "Lavar a louça"}, {habito: "Caminhar"}, {habito: "Fazer carinho nos gatos da rua"}]


if (props.habito === false){
    return (
        <> <ContainerHabitos>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
       
        </ContainerHabitos> </>
    )} else {
        return (
            <>
            <ContainerHabitos>
            {habitos.map((h)=>
            <Habito data-test="habit-container" ><p data-test="habit-name">{h.habito}</p>
             <Semana>
            <div data-test="habit-day" >S</div>
            <div data-test="habit-day" >T</div>
            <div data-test="habit-day" >D</div>
            <div data-test="habit-day" >Q</div>
            <div data-test="habit-day" >Q</div>
            <div data-test="habit-day" >S</div>
            <div data-test="habit-day" >S</div>
            </Semana>
            <img src={lixo} data-test="habit-delete-btn"/>
            </Habito>)}
            </ContainerHabitos>
            </>
        )
    }
}

const ContainerHabitos = styled.div`
overflow-y: scroll;
height: 100%;
p{
    color: #666666;
    margin-left: 15px;
}
`

const Habito = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
position: relative;
margin-top: 10px;
display: flex;
flex-direction: column;
img {
    position: absolute;
    right: 10px;
    top: 11px;
}
p{
    margin-left: 15px;
    margin-bottom: 8px;
    margin-top: 15px;
    color: #666666;
    }
`

const Semana = styled.div`

display: flex;
width: 65%;
justify-self: flex-start;
margin-left: 18px;
div{
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 4px;
}
`