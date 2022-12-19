import React from 'react'
import Header from './Header'
import { AllCharacters } from './Backend/BackendPersonagens'
import styled from 'styled-components'
import UserContext from './UserContext'
import { useContext } from 'react'
const Sinal = styled.span`
&::before {
    font-family: 'FontAwesome';
    content: "\f071";
    background-color: '#EA8D02';     
}
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,200px);
gap: 72px;
margin: 32px 4%;
justify-content:center;
`

const Box = styled.div`
transition: 200ms;
&:hover {
    background-color: ${props => props.cor[1]};
    cursor: pointer;
}
`

const Fundo = styled.div`
width: 100%;
height: 100%;
display: block;
background: linear-gradient(90.21deg, #000000 0.17%, rgba(0, 0, 0, 0.96) 0.18%, rgba(0, 0, 0, 0.45) 99.82%);
`

const Division = () => {
    return (
        <div style={{display: 'block',height: '2px',width: '90%',backgroundColor: 'rgba(255,255,255,0.2)',margin: '32px auto',borderRadius: '25px'}}></div>
    )
}
const Personagens = () => {
    console.log(AllCharacters)
var mobile = window.outerWidth < 600;
const { cor,setCor } = useContext(UserContext)
const [personRef,setPersonRef] = React.useState(false)
    function setPersonagem(objdopersonagem) {
        setDeixou(true)
        setPersonRef(objdopersonagem)
    }

const [deixoudeserinicial,setDeixou] = React.useState(false)
  return (
    <div>
        <Header />
        {!mobile && 
        <div>
        {!deixoudeserinicial && <div>
            <br />
        <h1>Bem vindo a tela de personagens!</h1>
        <p style={{fontFamily: 'Roboto Slab',fontSize: '23px',margin: '0 auto',width: '620px',textAlign: 'center',marginTop: '32px'}}>Aqui você pode saber mais sobre os personagens,
    histórias que eles participam e seus poderes.</p>
    <div style={{display: 'flex',margin: '0 auto',marginTop: '32px',width: 'fit-content',backgroundColor: 'rgba(234, 141, 2, 0.08)',border: '1px solid #EA8D02',gap: '18px',padding: '20px 16px',borderRadius: '20px'}}>
    <i className="fa-solid fa-triangle-exclamation" style={{color: '#EA8D02',fontSize: '28px'}}></i>
    <p style={{fontSize: '20px',color: '#EA8D02'}}>Cuidado! Aqui você vai se deparar com spoilers sobre alguns personagens!</p>
    </div>
    <p style={{fontSize: '23px',width: 'fit-content',margin: '0 auto',marginTop: '32px'}}>Clique nas caixas dos personagens para ver suas informações</p>
       </div> }
       {deixoudeserinicial && personRef && <div style={{height: '500px',width: '100%',position: 'relative'}}>
        <Fundo className='open' style={{position: 'absolute',zIndex: '1'}}>
            <h1 style={{marginTop: '20px'}}>{personRef.nome}</h1>   
            <h3 style={{fontFamily: 'Roboto Slab',color: 'rgba(255,255,255,0.8)',fontSize: '20px'}}>{personRef.equipe}</h3>
            <div style={{display: 'grid',gridTemplatesColumns: '1fr 1fr'}}></div>
        </Fundo>
            <div className='open' style={{position: 'relative',backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + personRef.Img})`,height: '100%',width: '100%',backgroundSize: '100%',zIndex: '-2',backgroundSize: '20%',backgroundRepeat: 'repeat'}}>
            </div>
        </div>}
    <Division />
            <Grid>
                {AllCharacters.map(Character => (
  <Box onClick={() => {setPersonagem(Character)}} cor={cor} key={Character.id} style={{width: '200px',borderRadius: '25px',border: `1px solid ${cor[0]}`,textAlign: 'center',padding: '20px 0px',fontSize: '20px',fontFamily: 'Lakers'}}>
    {Character.nome}
  </Box>
))}
            </Grid>
    </div>}
    </div>
  )
}

export default Personagens