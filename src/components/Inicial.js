import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.js'
import fundo from '../img/espaço.jpg'
import UserContext from './UserContext'
import styled from 'styled-components'
const Inicial = () => {
  const { cor,setCor } = useContext(UserContext)
  document.title = 'UVC'
  const Button = styled.button`
      padding: 9px 16px;
      background-color: ${cor[0]};
      max-width: fit-content;
      text-align: center;
      border-radius: 50px;
      font-size: 25px;
      box-shadow: inset 0px -4px 1px rgb(0 0 0 / 50%);
      cursor: pointer;
      text-decoration: none;
      color: white;
      border: none;
  `;
  var mobile = window.outerWidth < 480
  return (
    <div style={{margin: '0 auto',maxWidth: '1800px'}}>
      <Header />
    {!mobile && <div className='center' style={{gap: '22vh',padding: '0px 36px'}}> 
    <img src={fundo} style={{width: '100%',position:'absolute',top: '82px',left: '0px',mixBlendMode: 'darken',zIndex: '-100',height:'calc(100vh - 82px)'}}/>
    <h1 style={{top: '64px',position: 'relative',fontSize: '80px'}}>Bem vindo ao UVC!</h1>
    {/* nao ta centralizando o treco ai */}

    <h4 style={{textAlign: 'center',fontSize: '2.8rem'}}>Diversos contos <span style={{color:'#F8BC22'}}>fantásticos</span> disponibilizados gratuitamente!</h4>
    <div style={{display: 'flex',flexDirection: 'column',placeItems: 'center',gap: '2px'}}>
    <h4 style={{fontSize: '3.2rem'}}>Adentre ao Universo Agora.</h4>
    <Link to="Home" className='button' style={{fontSize: '3rem',textAlign: 'center',background: cor[0]}}><nobr>Comece a ler Agora!</nobr></Link>
    </div>
    </div>}
    {mobile && <div className='center' style={{padding: '16px 36px',gap: window.outerHeight > 700 ? 'calc(50px + 3vh)' : '62px'}}>
    <img src={fundo} style={{width: '100%',position:'absolute',top: '82px',left: '0px',mixBlendMode: 'darken',zIndex: '-100',height:'calc(100vh - 82px)'}}/>
      <h1 style={{marginTop: '36px'}}>Bem vindo ao UVC</h1>
      <p style={{fontSize: '3.2rem',textAlign: 'center'}}>Diversas histórias <span style={{color: '#F8BC22'}}>Fantásticas</span> disponibilizadas gratuitamente!</p>
      <div style={{display: 'flex',placeItems: 'center',gap:'2px',flexDirection: 'column',position: 'relative',top: '4vh',marginTop: window.outerHeight > 800 ? 'calc(80px + 3vh)' : null}}>
        <p style={{fontSize: 'calc(17vw - 4rem)'}}>Adentre ao Universo!</p>
        <Link to="Home"><nobr style={{fontSize: '3rem',textAlign: 'center'}}><Button>Comece a ler Agora!</Button></nobr></Link>
      </div>
      </div>}
  </div>
  )
}

export default Inicial