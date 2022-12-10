import React from 'react'
import Header from './Header'
import imgArner from '../img/rrh_slide.png'
import imgMR from '../img/MR_Slide.png'
import space from '../img/espaço.jpg'
import imgCong from '../img/Cong_Slide.png'
import AllHists from './txt/Allhists'
import DivHists from './DivHists'
import { Link } from 'react-router-dom'
const Division = () => {
  return (
    <div style={{backgroundColor: 'rgba(255,255,255,0.5)',width: '80%',height: '3.5px',margin: '12 auto',borderRadius: '25px'}}>

    </div>
  )
}

const Home = () => {
  var mobile = window.outerWidth < 480


var [classezin,setClasse] = React.useState(null)
var terra = ['Terra','LOCAL','Contos que se passam na terra,e geralmente são mais cômicos e leves,algumas mais reais e até sentimentais.','imgs/' + 'cidade.jpg','#007C14','#002706']
var solo = ['Solos','TIPO','Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.','imgs/' + 'solos.png','#DBDF00','#505200']
var universal = ['Universal','LOCAL','Contos que se passam no espaço,sendo essencialmente mais profundos,científicos e complexos.','imgs/' + 'espaço.jpg','#0073DE','#002F5A']
var serie = ['Series','TIPO','Histórias longas,separada em episódios que contam histórias tramas de equipes ou personagens.','imgs/' + 'mrslide.png','#D62828','#610000']
var slides = [terra,solo,universal,serie]
var [num,setNum] = React.useState(0)
function changeNumber() {
  if (num !== 3) {
  setNum(num += 1)
  console.log(num)
  setIndex(slides[num])
}
else {
  setNum(0)
  setIndex(slides[0])
}
}


var [index,setIndex] = React.useState(slides[num]);
React.useEffect(() => {
  const intervalId = setInterval(() => {
    changeNumber()
  }, 3500);
  
  return () => {
    clearInterval(intervalId);
  };
}, [num]);


  return (
    <div>
        <Header />
    {!mobile && <div style={{width: '100%',height: 'calc(100vh - 82px)',maxWidth: '1800px',margin: '0 auto',position: 'relative'}}>
      <div style={{position: 'absolute',padding: '82px 45px',flexDirection: 'column-reverse',display: 'flex',gap:'12px',width: '100%',height: '100%',background: 'linear-gradient(49deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8841911764705882) 32%, rgba(0,0,0,0) 100%)',backdropFilter: 'blur(0.45px)'}}>
      <div style={{display:'flex',flexDirection: 'column-reverse',placeItems: 'center',gap:'10px',width:'30%' }}>
      <button className='button' style={{width: '80%',maxWidth: '100%',opacity: '0.8',transition: '400ms',borderRadius: '5px'}}>Filtrar</button>
      <p style={{maxWidth: '390px',fontSize: '25px',textAlign: 'center'}}>{index[2]}</p>
      <p style={{fontSize: '24px',fontFamily: 'Roboto Slab'}}>{index[1]}</p>
      <h1 style={{textAlign: 'start',fontSize:'70px',color: index[4],textShadow: `${index[5]} 3px 5px 2px`}}>{index[0]}</h1>
      </div>
      </div>
      <img src={process.env.PUBLIC_URL + index[3]} style={{objectFit: 'cover',width: '100%',height: '100%'}}/>
    </div>}
       
        <DivHists />
        </div>
  )
}

export default Home