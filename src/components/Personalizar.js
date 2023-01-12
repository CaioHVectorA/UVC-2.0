import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import UserContext from './UserContext'



const Personalizar = () => {
  const { cor,setCor } = useContext(UserContext)
  console.log(cor[0])
const LinkBar = styled.div`
width: 100%;
background-color: ${cor[0]};
color: #e7e7e7;
font-family: 'Ropa Sans';
font-size: 38px;
text-align: end;
padding: 8px 48px;
transition: 120ms;
&:hover {
    background-color: ${cor[1]};
}
`
document.title = 'Personalizar'

  return (
    <div style={{backgroundColor: '#080808'}}>
        <Header />
        <div style={{marginTop: '32px'}}>
                <h1 style={{maxWidth: '1000px',margin: '48px auto'}}>Melhore sua experiência personalizando o site da forma que preferir!</h1>
        <Link to="TemaCor"><LinkBar style={{borderBottom: '1.6px solid black'}}>Mudar cor de tema</LinkBar></Link>
        <Link to=""><LinkBar>Favoritos</LinkBar></Link>    
        </div>

    </div>
  )
}

export default Personalizar