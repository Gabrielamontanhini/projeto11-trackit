export default function CorpoHabitos(props){


if (props.habito === false){
    return (
        <>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </>
    )} else {
        return (
            <>
            <p>Colocaste um hábito</p>
            </>
        )
    }
}