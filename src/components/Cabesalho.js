import styled from "styled-components"

export default function Cabesalho(){
    return (
        <>
        <CabesalhoTrackit>
            <h1>TrackIt</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyvUeQtXQe-IWRCnL7O6lY6a7P-GhxYEJbQ&usqp=CAU"/>
        </CabesalhoTrackit>
        </>
    )
}

const CabesalhoTrackit = styled.div`
width: 100%;
height: 70px;
background-color:  #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
h1{
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