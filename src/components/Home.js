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
  const div1 = React.useRef() ; const div2 = React.useRef() ; const div3 = React.useRef(); const div4 = React.useRef()
  const allDivs = [div1,div2,div3,div4]
  function addClass() {
  allDivs.forEach(div => {
   setClasse('hoverscale')
  });

}

function removeClass() {
  setTimeout(() => {    
    allDivs.forEach(div => {
      setClasse(null)
    });
  }, 80);
}
var [classezin,setClasse] = React.useState(null)

  return (
    <div>
        <Header />
        {/* <div style={{width: '100%',height: '86.8vh',minHeight: mobile ? '1200px' : null}}>
        <div style={{width: '100%',minHeight: '100%',background: `url(${space})`,backgroundSize: '100%',zIndex: '5',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
          <div style={{position:'absolute',width: '100%',height:'98%',backgroundColor: 'rgba(0,0,0,0.6)',zIndex: '1'}}></div>
          <h1 style={{marginTop: '24px',zIndex: '100',fontSize: '48px',padding: '12px 24px'}}>Escolha o tipo de Conto que mais combina com você!</h1>
          <br />
          <Division />
          <div style={{display: 'grid',zIndex: '100',gridTemplateRows: mobile ? '1fr 1fr 1fr 1fr' : '1fr 1fr',gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',placeItems: 'center',padding: '20px 36px 50px',gap: '40px'}}>
            <div ref={div1} onMouseOver={addClass} onMouseLeave={removeClass} className={classezin} style={{backgroundColor: '#202020',padding: '12px 12px',maxWidth: '400px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3 style={{marginBottom: '12px',borderBottom: '2px solid rgba(0,0,0,0.6)',color:'#F8BC22'}}>Solos</h3>
              <p style={{textAlign: 'center',fontSize:'22px',padding: '0px 24px'}}>Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.</p>
            </div>
            <div ref={div2} onMouseOver={addClass} onMouseLeave={removeClass} className={classezin} style={{backgroundColor: '#202020',padding: '12px 12px',maxWidth: '400px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3 style={{marginBottom: '12px',borderBottom: '2px solid rgba(0,0,0,0.6)',color: '#B21616'}}>Series</h3>
              <p style={{textAlign: 'center',fontSize:'22px',padding: '0px 24px'}}>Histórias longas,separada em episódios que contam histórias tramas de equipes ou personagens.</p>
            </div>
            <div ref={div3} onMouseOver={addClass} onMouseLeave={removeClass} className={classezin} style={{backgroundColor: '#202020',padding: '12px 12px',maxWidth: '400px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3 style={{marginBottom: '12px',borderBottom: '2px solid rgba(0,0,0,0.6)',color: '#008E06'}}>Terra</h3>
              <p style={{textAlign: 'center',fontSize:'22px',padding: '0px 24px'}}>Contos que se passam na terra,e geralmente são mais cômicos e leves,algumas mais reais e até sentimentais.</p>
            </div>
            <div ref={div4} onMouseOver={addClass} onMouseLeave={removeClass} className={classezin} style={{backgroundColor: '#202020',padding: '12px 12px',maxWidth: '400px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3 style={{marginBottom: '12px',borderBottom: '2px solid rgba(0,0,0,0.6)',color: '#0066FF'}}>Universal</h3>
              <p style={{textAlign: 'center',fontSize:'22px',padding: '0px 24px'}}>Contos que se passam no espaço,sendo essencialmente mais profundos,científicos e complexos.</p>
            </div>
          </div>

        </div>
        </div> */}
        {!mobile && <div style={{width: '80%',maxWidth: '1300px',gap:'32px',height: '70vh',margin: '0 auto',position: 'relative',top: '70px',display: 'grid',gridTemplateColumns: '6fr 2fr'}}>
          <div style={{borderRadius: '25px',position:'relative',backgroundImage: 'url('+process.env.PUBLIC_URL + 'imgs/' + 'cidade.jpg)'}}>
         <div style={{padding: '48px',flexDirection: 'column-reverse',position:'absolute',display: 'flex',width:'100%',height:'100%',background: 'linear-gradient(270deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%, #0B0B0B 100%)',left:'0px',borderRadius:'inherit'}}>
          <h2 style={{alignSelf:'start'}}>a</h2>
          <h2 style={{alignSelf:'start'}}>a</h2>

         </div>
          </div>
          <div style={{display: 'grid',gridTemplateRows: '1fr 1fr 1fr 1fr',alignItems: 'center'}}>
            <div style={{display: 'flex',gap: '12px',alignItems: 'center',maxWidth: 'fit-content',padding: '16px',borderRadius: '25px'}}>
              <img src={process.env.PUBLIC_URL + 'imgs/' + 'v_solos.png'} style={{width: '32px',borderRadius: '4px',height: '48px'}} />
              <h2 style={{fontFamily:'Roboto Slab',fontWeight: 'normal',fontSize: '16px'}}>Solos</h2>
            </div>
            <div style={{display: 'flex',gap: '12px',alignItems: 'center',maxWidth: 'fit-content',padding: '16px',borderRadius: '25px'}}>
            <img src={process.env.PUBLIC_URL + 'imgs/' + 'v_mrslide.png'} style={{width: '32px',borderRadius: '4px',height: '48px'}} />
              <h2 style={{fontFamily:'Roboto Slab',fontWeight: 'normal',fontSize: '16px'}}>Series</h2>
            </div>
            <div style={{display: 'flex',gap: '12px',alignItems: 'center',maxWidth: 'fit-content',padding: '16px',borderRadius: '25px'}}>
            <img src={process.env.PUBLIC_URL + 'imgs/' + 'v_cidade.jpg'} style={{width: '32px',borderRadius: '4px',height: '48px'}} />
              <h2 style={{fontFamily:'Roboto Slab',fontWeight: 'normal',fontSize: '16px'}}>Terra</h2>
            </div>
            <div style={{display: 'flex',gap: '12px',alignItems: 'center',maxWidth: 'fit-content',padding: '16px',borderRadius: '25px'}}>
            <img src={process.env.PUBLIC_URL + 'imgs/' + 'v_espaço.jpg'} style={{width: '32px',borderRadius: '4px',height: '48px'}} />
              <h2 style={{fontFamily:'Roboto Slab',fontWeight: 'normal',fontSize: '16px'}}>Universal</h2>
            </div>

          </div>
          </div>}
        <DivHists />
        </div>
  )
}

export default Home