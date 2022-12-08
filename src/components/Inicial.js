import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import fundo from '../img/espaço.jpg'

const Inicial = () => {
  var mobile = window.outerWidth < 480

  return (
    <div style={{margin: '0 auto',maxWidth: '1800px'}}>
      <Header />
    {!mobile && <div className='center' style={{gap: '22vh',padding: '0px 36px'}}> 
    <img src={fundo} style={{width: '100%',position:'absolute',top: '82px',left: '0px',mixBlendMode: 'darken',zIndex: '-100',height:'calc(100vh - 82px)'}}/>
    <h1 style={{top: '32px',position: 'relative'}}>Bem vindo ao UVC</h1>
    {/* nao ta centralizando o treco ai */}

    <h4 style={{textAlign: 'center',fontSize: '2.8rem'}}>Diversos contos <span style={{color:'#F8BC22'}}>fantásticos</span> disponibilizados gratuitamente!</h4>
    <div style={{display: 'flex',flexDirection: 'column',placeItems: 'center',gap: '2px'}}>
    <h4 style={{fontSize: '3.2rem'}}>Adentre ao Universo Agora.</h4>
    <Link to="Home" className='button' style={{fontSize: '3rem',textAlign: 'center'}}><nobr>Comece a ler Agora!</nobr></Link>
    </div>
    </div>}
    {mobile && <div className='center' style={{padding: '16px 36px',gap: 'calc(50px + 3vh)'}}>
    <img src={fundo} style={{width: '100%',position:'absolute',top: '82px',left: '0px',mixBlendMode: 'darken',zIndex: '-100',height:'calc(100vh - 82px)'}}/>
      <h1 style={{marginTop: '36px'}}>Bem vindo ao UVC</h1>
      <p style={{fontSize: '3.2rem',textAlign: 'center'}}>Diversas histórias <span style={{color: '#F8BC22'}}>Fantásticas</span> disponibilizadas gratuitamente!</p>
      <div style={{display: 'flex',placeItems: 'center',gap:'2px',flexDirection: 'column',position: 'relative',top: '4.8vh',marginTop: window.outerHeight > 800 ? 'calc(80px + 3vh)' : null}}>
        <p style={{fontSize: 'calc(17vw - 4rem)'}}>Adentre ao Universo!</p>
        <Link to="Home" className='button' style={{fontSize: '3rem',textAlign: 'center'}}><nobr>Comece a ler Agora!</nobr></Link>
      </div>
      </div>}
  </div>
  )
}

export default Inicial