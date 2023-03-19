import axios from "axios"
import styled from "styled-components"


import lixo from "../../assets/trash.svg"

export default function CorpoHabitos({habitosTotais, token, setHabitosTotais}){

    function deletar(id){
    const config = { headers: { Authorization: `Bearer ${token}` } }

        const promise= axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)

        promise.then((res)=> {
            console.log(`deletado o habito de id ${id}`)
            setHabitosTotais([...habitosTotais])
        })

        promise.catch((err)=> {
            console.log(err.response.data)
        })
    }


if (habitosTotais.length === 0){
    return (
        <> <ContainerHabitos>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
       
        </ContainerHabitos> </>
    )} else {
        return (
            <>
            <ContainerHabitos>
            {habitosTotais.map((h)=>
            <Habito key={h.id} data-test="habit-container" ><p data-test="habit-name">{h.name} id: {h.id}</p>
            <Semana>
            <div data-test="habit-day" >S</div>
            <div data-test="habit-day" >T</div>
            <div data-test="habit-day" >D</div>
            <div data-test="habit-day" >Q</div>
            <div data-test="habit-day" >Q</div>
            <div data-test="habit-day" >S</div>
            <div data-test="habit-day" >S</div>
            </Semana>
            <img src={lixo} data-test="habit-delete-btn" onClick={()=>deletar(h.id)}/>
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