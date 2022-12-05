import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import fundo from '../img/espaço.jpg'

const Inicial = () => {
  return (
    <div>
      <Header />
    <div className='center'> 
    <img src={fundo} style={{width: '100%',position:'absolute',top: '82px',left: '0px',mixBlendMode: 'darken',zIndex: '-100',height:'calc(100vh - 82)'}}/>
    <h1>Bem vindo ao UVC</h1>
    <h4>Diversos contos <span style={{color:'#F8BC22'}}>fantásticos</span> disponibilizados gratuitamente!</h4>
    <h4>Adentre ao Universo Agora.</h4>
    <Link to="Home" className='button' style={{fontSize: '32px',position: 'relative',bottom: '32px'}}>Comece a ler Agora!</Link>
    </div>
  </div>
  )
}

export default Inicial