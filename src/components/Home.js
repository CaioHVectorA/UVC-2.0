import React from 'react'
import Header from './Header'
import imgArner from '../img/rrh_slide.png'
import imgMR from '../img/MR_Slide.png'
import space from '../img/espaço.jpg'
import imgCong from '../img/Cong_Slide.png'
import DivHists from './DivHists'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
import { useContext } from 'react'
import styled from 'styled-components'
import Hists from './Backend/Hists.json'
import { AllCharacters } from './Backend/BackendPersonagens'


console.log(AllCharacters)

const Division = function() {
  return (
    <div style={{backgroundColor: 'rgba(255,255,255,0.5)',width: '80%',height: '3.5px',margin: '12 auto',borderRadius: '25px'}}>

    </div>
  )
}

const Division2 = function() {
  return (
    <div style={{backgroundColor: 'rgba(255,255,255,0.5)',height: '3.5px',width: '80%',margin: '20px auto',borderRadius: '25px'}}></div>
  )
}

const Home = function() {
  const Button = styled.button`
      padding: 9px 16px;
      background-color: ${props => props.propscor[0]};
      max-width: fit-content;
      text-align: center;
      border-radius: 50px;
      font-size: 25px;
      box-shadow: inset 0px -4px 1px rgb(0 0 0 / 50%);
      
      text-decoration: none;
      color: white;
      border: none;
      &:hover {
        cursor: pointer;
        background-color: ${props => props.propscor[0]}
  
      }
  `

  const { cor,setCor } = useContext(UserContext)

  var mobile = window.outerWidth < 480


var [classezin,setClasse] = React.useState(null)
var terra = ['Terra','LOCAL','Contos que se passam na terra,e geralmente são mais cômicos e leves,algumas mais reais e até sentimentais.','imgs/' + 'cidade.jpg']
var solo = ['Solos','TIPO','Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.','imgs/' + 'solos.png']
var universal = ['Universal','LOCAL','Contos que se passam no espaço,sendo essencialmente mais profundos,científicos e complexos.','imgs/' + 'espaço.jpg']
var serie = ['Series','TIPO','Histórias longas,separada em episódios que contam histórias tramas de equipes ou personagens.','imgs/' + 'mrslide.png']
var slides = [terra,solo,universal,serie]
var [num,setNum] = React.useState(0)
function changeNumber() {
  if (num !== 3) {
  setNum(num += 1)
  setIndex(slides[num])
}
else {
  setNum(0)
  setIndex(slides[0])
}
}

function backNumber() {
if (num === 0) {
  setNum(3)
  setIndex(slides[3])
}
if (num === 3) {
  setNum(2)
  setIndex(slides[2])
}
if (num === 1) {
  setNum(0)
  setIndex(slides[0])
}
if (num === 2) {
  setNum(1)
  setIndex(slides[1])
}
}

function nextNumber() {
  if (num === 0) {
    setNum(1)
    setIndex(slides[1])
  }
  if (num === 1) {
    setNum(2)
    setIndex(slides[2])
  }
  if (num === 2) {
    setNum(3)
    setIndex(slides[3])
  }
  if (num === 3) {
    setNum(0)
    setIndex(slides[0])
  }
}


var [index,setIndex] = React.useState(slides[num]);
React.useEffect(function() {
  const intervalId = setInterval(function() {
    changeNumber()
  }, 13500);
  
  return function() {
    clearInterval(intervalId);
  };
}, [num]);


  return (
    <div>
        <Header />
    {!mobile && <div style={{width: '100%',height: 'calc(100vh - 82px)',maxWidth: '1800px',margin: '0 auto',position: 'relative'}}>
      <div style={{position: 'absolute',padding: '82px 45px',flexDirection: 'column-reverse',display: 'flex',gap:'12px',width: '100%',height: '100%',justifyContent: 'center',background: 'linear-gradient(49deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8841911764705882) 32%, rgba(0,0,0,0) 100%)',backdropFilter: 'blur(0.45px)'}}>
      <div style={{display:'flex',flexDirection: 'column-reverse',placeItems: 'center',gap:'10px',width:'30%' }}>
      <Button propscor={cor} style={{width: '80%',maxWidth: '100%',opacity: '0.8',transition: '400ms',borderRadius: '5px'}}>Filtrar</Button>
      <p style={{maxWidth: '390px',fontSize: '25px',textAlign: 'center'}}>{index[2]}</p>
      <p style={{fontSize: '24px',fontFamily: 'Roboto Slab'}}>{index[1]}</p>
      <h1 className='fontslide' style={{textAlign: 'start',fontSize:'69px',letterSpacing: '2.8px',color: '#fff',textShadow: `rgba(0,0,0,0) 3px 5px 2px`}}>{index[0]}</h1>
      </div>
      <div style={{width: '100%',justifyContent: 'start',display: 'flex',gap: '24px',height: '48px',width: '128px',alignSelf: 'center',justifySelf: 'center',position: 'relative',top: '88%'}}>
      <svg className='seta' onClick={backNumber} xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff" style={{transform: 'rotate(180deg)',backgroundColor: 'rgba(0,0,0,0.6)'}}><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
      <svg className='seta' onClick={nextNumber} xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff" style={{backgroundColor: 'rgba(0,0,0,0.6)'}}><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
      </div>
      </div>
      <img src={process.env.PUBLIC_URL + index[3]} style={{objectFit: 'cover',width: '100%',height: '100%'}}/>
    </div>}
      {mobile && <div style={{width: '100%',height: 'calc(100vh - 82px)'}}>
        <h1 style={{marginTop: '20px'}}>Escolha o tipo de história que mais combina com você!</h1>
        <Division2 />
      <div className='slider'>
        <div className='slide'>
               <img src={process.env.PUBLIC_URL + 'imgs/' + 'cidade.jpg'} style={{width: '200px',height: '200px',objectFit: 'cover',borderRadius: '15px'}}/>
        <p style={{textAlign: 'center',marginTop: '-12px'}}>Contos que se passam na terra,e geralmente são mais cômicos e leves,algumas mais reais e até sentimentais.</p> 
        </div>
        <div className='slide'>
        <img src={process.env.PUBLIC_URL + 'imgs/' + 'espaço.jpg'} style={{width: '200px',height: '200px',objectFit: 'cover',borderRadius: '15px'}}/>
          <p style={{textAlign: 'center',marginTop: '-12px'}}>Contos que se passam no espaço,sendo essencialmente mais profundos,científicos e complexos.</p>
        </div>
        <div className='slide'>
        <img src={process.env.PUBLIC_URL + 'imgs/' + 'solos.png'} style={{width: '200px',height: '200px',objectFit: 'cover',borderRadius: '15px'}}/>
        <p style={{textAlign: 'center',marginTop: '-12px'}}>Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.</p>
        </div>
        <div className='slide'>
        <img src={process.env.PUBLIC_URL + 'imgs/' + 'mrslide.png'} style={{width: '200px',height: '200px',objectFit: 'cover',borderRadius: '15px'}}/>
        <p style={{textAlign: 'center',marginTop: '-12px'}}>Histórias longas,separada em episódios que contam histórias tramas de equipes ou personagens.</p>
        </div>
      </div>
      </div>
      }
       
        <DivHists />
        </div>
  )
}

export default Home