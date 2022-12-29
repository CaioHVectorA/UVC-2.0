import React from 'react'
import Header from './Header'
import { AllCharactersTerra,AllCharactersUniv, AllCharactersFull } from './Backend/BackendPersonagens'
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
background-color: #121212;
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
const FundoMob = styled.div`
width: 100%;
min-height: 130%;
overflow-y: auto;
display: block;
max-height: 1000px;
background: linear-gradient(90.21deg, #000000 0.17%, rgba(0, 0, 0, 0.96) 0.18%, rgba(0, 0, 0, 0.45) 99.82%);
`
const Poderes = styled.ul`
font-size: 32px;
position: relative;
right: 16px;
height: 150px;
overflow-y: auto;
font-family: 'Roboto Slab';
&::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
    border-radius: 20px;
}

&::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar-thumb
{
	background-color: #000000;
    border-radius: 20px;
}
`
const PoderesMobile = styled.ul`
font-size: 32px;
position: relative;
right: 16px;
font-family: 'Roboto Slab';
&::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
    border-radius: 20px;
}

&::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar-thumb
{
	background-color: #000000;
    border-radius: 20px;
}
`
const ButtonLoc = styled.button`
font-family: 'Lakers';
color: white;
background-color: ${props => props.cor[1]};
padding: 10px 20px;
border: 1px solid #e7e7e7;
font-size: 20px;
transition: 200ms;
&:hover {
    background-color: ${props => props.cor[2]};
    cursor: pointer;
}
`


const Division = () => {
    return (
        <div style={{display: 'block',height: '2px',width: '90%',backgroundColor: 'rgba(255,255,255,0.2)',margin: '32px auto',borderRadius: '25px'}}></div>
    )
}
const Personagens = () => {
    // console.log(AllCharacters)
var mobile = window.outerWidth < 600;
const { cor,setCor} = useContext(UserContext)
const [personRef,setPersonRef] = React.useState(false)
const [AllCharacters,setAllCharac] = React.useState([AllCharactersTerra,'Terra'])
const personagemGlob = localStorage.getItem('personagemGlob')
const [deixoudeserinicial,setDeixou] = React.useState(false)
React.useEffect(() => {
    // console.log(personagemGlob != 'null')
    if (personagemGlob != 'null') {
        setDeixou(true)
        AllCharactersFull.forEach(char => {
            if (char.nome === personagemGlob) {
                setPersonRef(char)
            }
            // console.log(personagemGlob,char.nome)
        });
    } else {
        console.log(deixoudeserinicial)
        setDeixou(false)
        setPersonRef(false)
    }
    // console.log(deixoudeserinicial,personagemGlob)
},[])
    function setPersonagem(objdopersonagem) {
        setDeixou(true)
        setPersonRef(objdopersonagem)
    }
    // console.log(personagemGlob,deixoudeserinicial,personRef)
  return (
    <div style={{maxWidth: '1800px',margin: '0 auto'}}>
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
    <p style={{fontSize: '23px',width: 'fit-content',margin: '0 auto',marginTop: '32px'}}>Clique nas caixas dos personagens para ver suas informações.</p>
       </div> }
       {deixoudeserinicial && personRef && <div style={{height: '500px',width: '100%',position: 'relative'}}>
        <Fundo className='open' style={{position: 'absolute',zIndex: '1'}}>
            <h1 style={{marginTop: '20px'}}>{personRef.nome}</h1>   
            <h3 style={{fontFamily: 'Roboto Slab',color: 'rgba(255,255,255,0.8)',fontSize: '20px'}}>{personRef.equipe}</h3>
            <div style={{display: 'grid',gridTemplateColumns: '1fr 4px 1fr',width: '100%',marginTop:'64px'}}>
            <div style={{padding: '20px 50px'}}>
                <h2 style={{fontFamily: 'Roboto Slab',marginBottom: '10px',fontWeight: 'normal',marginTop: '-13px'}}>Resumo</h2>
                <p style={{fontSize: '22px',textAlign: 'center'}}>{personRef.desc}</p>
                </div>
            <span style={{width: '4px',height: '300px',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius: '25px'}}></span>
            <div style={{padding: '12px 32px',display: 'flex',flexDirection: 'column',gap: '32px',position: 'relative',bottom: '16px'}}>
                <Poderes>Capacidades de {personRef.nome}:
                    {personRef.poderes.map(poder => (
                    <li style={{textAlign: 'center',fontSize: '20px',listStyle: 'square',maxWidth: 'fit-content',position: 'relative',left: '32px',top: '8px'}}>{poder}</li>
                ))}</Poderes>
                <Poderes>{personRef.nome} aparece em:
                    {personRef.Refs.map(hist => (
                    <li style={{textAlign: 'center',fontSize: '20px',listStyle: 'square',maxWidth: 'fit-content',position: 'relative',left: '32px',top: '8px'}}>{hist}</li>
                ))}</Poderes>
                
            </div>
            </div>
        </Fundo>
            <div className='open' style={{position: 'relative',backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + personRef.Img})`,height: '100%',width: '100%',backgroundSize: '100%',zIndex: '-2',backgroundSize: '20%',backgroundRepeat: 'repeat'}}>
            </div>
        </div>}
    <Division />
    <div style={{display: 'flex',margin: '0 auto',width: 'fit-content'}}>
        <ButtonLoc onClick={() => {setAllCharac([AllCharactersTerra,'Terra'])}} cor={AllCharacters[1] == 'Terra' ? cor : ['black','black','#161616']} style={{borderRadius: '25px 0px 0px 25px'}}>TERRA</ButtonLoc>
        <ButtonLoc onClick={() => {setAllCharac([AllCharactersUniv,'Univ'])}} cor={AllCharacters[1] == "Univ" ? cor : ['black','black','#161616']} style={{borderLeft: 'none',borderRadius: '0px 25px 25px 0px'}}>UNIVERSAL</ButtonLoc>
        </div>
            <Grid>
                {AllCharacters[0].map(Character => (
  <Box onClick={() => {setPersonagem(Character)}} cor={cor} key={Character.nome} style={{width: '200px',borderRadius: '25px',border: `1px solid ${cor[0]}`,textAlign: 'center',padding: '20px 0px',fontSize: '20px',fontFamily: 'Lakers'}}>
    {Character.nome}
  </Box>
))}
            </Grid>
    </div>}
    {/* SHDAKJDHJSKHKJSAHDKJHKAHKDAHKDJAHSKDAHKDSAKDSAHKDSAHDSAKJDHAKSDHKASJDHSAKJDHSAKJDHSAKDJHASDKASHDKASHDKASJDHSKJHDKASJHDKASJD */}
    {mobile && 
        <div>
        {!deixoudeserinicial && <div>
            <br />
        <h1 style={{fontSize: '32px',marginTop: '10px'}}>Bem vindo a tela de personagens!</h1>
        <p style={{fontFamily: 'Roboto Slab',fontSize: '25px',margin: '0 auto',width: '280px',textAlign: 'center',marginTop: '32px'}}>Saiba mais sobre seu personagem favorito!</p>
    <div style={{display: 'flex',margin: '0 auto',marginTop: '32px',width: '350px',backgroundColor: 'rgba(234, 141, 2, 0.08)',border: '1px solid #EA8D02',gap: '18px',padding: '16px 22px',borderRadius: '20px'}}>
    <i className="fa-solid fa-triangle-exclamation" style={{color: '#EA8D02',fontSize: '23px'}}></i>
    <p style={{fontSize: '16px',color: '#EA8D02'}}>Cuidado! Aqui você vai se deparar com spoilers sobre alguns personagens!</p>
    </div>
    <p style={{fontSize: '23px',width: 'fit-content',textAlign: 'center',margin: '0 auto',marginTop: '32px'}}>Clique nas caixas dos personagens para ver suas informações.</p>
       </div> }
       {deixoudeserinicial && personRef && <div style={{height: 'calc(100vh - 82px)',width: '100%',position: 'relative',overflowY: 'scroll'}}>
        <FundoMob className='open' style={{position: 'absolute',zIndex: '1'}}>
            <h1 style={{marginTop: '20px'}}>{personRef.nome}</h1>   
            <h3 style={{fontFamily: 'Roboto Slab',color: 'rgba(255,255,255,0.8)',fontSize: '20px'}}>{personRef.equipe}</h3>
            <div style={{display: 'grid',gridTemplateRows: '300px 300px',width: '100%',marginTop:'8px',gap: '32px',height: 'calc(100vh - 82px)',overflowY: 'auto',maxHeight: '1000px'}}>
            <div style={{display:'grid',placeItems: 'center'}}>
                <h2 style={{fontFamily: 'Roboto Slab',marginBottom: '2px',fontWeight: 'normal',marginTop: '3px'}}>Resumo</h2>
                <p style={{fontSize: '220%',textAlign: 'center',margin:'0 auto',maxWidth:'335px'}}>{personRef.desc}</p>
                </div>
            {/* <span style={{width: '4px',height: '300px',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius: '25px'}}></span> */}
            <div style={{padding: '12px 32px',display: 'flex',flexDirection: 'column',gap: '20px',position: 'relative',bottom: '16px'}}>
                <PoderesMobile>Capacidades de {personRef.nome}:
                    {personRef.poderes.map(poder => (
                    <li style={{textAlign: 'start',fontSize: '70%',listStyle: 'square',maxWidth: '320px',position: 'relative',left: '32px',top: '8px'}}>{poder}</li>
                ))}</PoderesMobile>
                <PoderesMobile>{personRef.nome} aparece em:
                    {personRef.Refs.map(hist => (
                    <li style={{textAlign: 'start',fontSize: '70%',listStyle: 'square',maxWidth: 'fit-content',position: 'relative',left: '32px',top: '8px'}}>{hist}</li>
                ))}</PoderesMobile>
                
            </div>
            </div>
        </FundoMob>
            {mobile && <div className='openmob' style={{position: 'relative',backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + personRef.Img})`,height: '120vh',width: '100%',backgroundSize: '100%',zIndex: '-2',backgroundSize: '20%',backgroundRepeat: 'repeat'}}>
            </div>}
            {!mobile && <div className='open' style={{position: 'relative',backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + personRef.Img})`,height: '100%',width: '100%',backgroundSize: '100%',zIndex: '-2',backgroundSize: '20%',backgroundRepeat: 'repeat'}}>
            </div>}
        </div>}
    <Division />
    <div style={{display: 'flex',margin: '0 auto',width: 'fit-content'}}>
        <ButtonLoc onClick={() => {setAllCharac([AllCharactersTerra,'Terra'])}} cor={AllCharacters[1] == 'Terra' ? cor : ['black','black','#161616']} style={{borderRadius: '25px 0px 0px 25px'}}>TERRA</ButtonLoc>
        <ButtonLoc onClick={() => {setAllCharac([AllCharactersUniv,'Univ'])}} cor={AllCharacters[1] == "Univ" ? cor : ['black','black','#161616']} style={{borderLeft: 'none',borderRadius: '0px 25px 25px 0px'}}>UNIVERSAL</ButtonLoc>
        </div>
            <Grid>
                {AllCharacters[0].map(Character => (
  <Box onClick={() => {setPersonagem(Character)}} cor={cor} key={Character.nome} style={{width: '200px',borderRadius: '25px',border: `1px solid ${cor[0]}`,textAlign: 'center',padding: '20px 0px',fontSize: '20px',fontFamily: 'Lakers'}}>
    {Character.nome}
  </Box>
))}
            </Grid>
    </div>}
    </div>
  )
}

export default Personagens