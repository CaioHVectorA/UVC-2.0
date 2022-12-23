import React from "react"
import UVC from "./UVC transparente.png"
import menu from '../img/menu.svg'
import UserContext from "./UserContext"
import { useContext } from "react"
import styled from "styled-components"
import { Link, Navigate, useNavigate } from "react-router-dom"
const MenuItem = styled.li`
text-decoration: none;
font-family: 'Ropa Sans';
padding: 1rem 0;
text-align: end;
margin: 0 1rem;
border-bottom: 2px solid rgba(0,0,0,0.1);
font-size: 32px;
color: white;
`
const MenuConfig = styled.li`
text-decoration: none;
font-family: 'Ropa Sans';
font-size: 40px;
color: white;
&:after {
    font-family: 'FontAwesome';
   content: "\f107"; 
   font-weight: lighter;
   font-size: 14px;
   display: inline;
   margin: 0;
   position: relative;
   bottom: 4px;
   left: 3px;
}
`

const ListItemPerso = styled.a`

` 

const Search = styled.input`
border-radius: 25px 0px 0px 25px;
padding: 0 10px;
background-color: rgba(231, 231, 231, 0.8);
border: 0px solid rgba(0,0,0,0.2);
height: 100%;
&:active,&:focus-visible,&:focus {
    border: none;
    outline: none;  
    background-color: rgba(231, 231, 231, 1);
}
`

const Header = () => {
var mobile = window.outerWidth < 600;
    const [Menu,setMenu] = React.useState(false)
    const [Fechou,setFechou] = React.useState(false)
    const lista = React.useRef()
    function HandleClick() {
        if (Fechou) {
           lista.current.className = "sliderright"
           setTimeout(() => {
               setFechou(false)
               setMenu(!Menu)
           }, 360)
           document.body.style.overflow = 'auto'
        }
        if (!Menu) {
            setTimeout(() => {
             setMenu(!Menu)
           setFechou(true)
        }, 360)
        document.body.style.overflow = 'hidden'
    }
    }
    const [dropdown,setDropdown] = React.useState(false)
    const { cor,setCor,search,setSearch } = useContext(UserContext)
    /* aquela gambiarra */
    var taemcima
        function HandleLeave() {
            if (!taemcima) {
           setDropdown(false)
            } else {
                setTimeout(() => {
            taemcima = false
           setDropdown(false)
        },1200)  
            }
        }
    function HandleOver() {
        setDropdown(true)
        taemcima = true 
        setTimeout(() => {
            taemcima = false
        },680)
    }
    const [busca,setBusca] = React.useState(null)
    const navi = useNavigate();
    function HandleSearch(valor) {
    setSearch(valor)
    navi('/Search')
    }
    return (
        <header style={{display: 'flex',maxWidth: '1800px',margin: '0 auto',justifyContent:'space-between',width:'100%',padding:'0px',backgroundColor:cor[0],alignItems: 'center',maxHeight: '82px',paddingRight: mobile ? '24px' : '0px'}}>
            <Link to="/Home"><img className="uvcimg" src={UVC} style={{width: '128px',height: '128px',transform: 'scale(1.4)',position: 'relative',left: mobile ? '46px' : '68px',top:'14px',transition: '330ms'}} /></Link>
            {!mobile && <ul style={{marginRight: '3%',display: 'flex',gap: '22px'}}>
               <Link to="/Home" href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Ropa Sans'}}><li style={{fontSize: '40px',color: 'white',fontFamily: 'Ropa Sans'}}>Contos</li> </Link>
               <Link to="/Personagens" onClick={() => {localStorage.setItem('personagemGlob',null)}} className="scale" style={{textDecoration: 'none',fontFamily: 'Ropa Sans'}}><li style={{fontSize: '40px',color: 'white',fontFamily: 'Ropa Sans'}}>Personagens</li> </Link>
               <div>
               <Link to="/Personalizar" href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Ropa Sans',position: 'relative'}}><MenuConfig onMouseOver={HandleOver} onMouseLeave={HandleLeave}>Outros</MenuConfig></Link>
               {dropdown && <div onMouseLeave={HandleLeave} onMouseOver={HandleOver} style={{width: '200px',display:'flex',flexDirection: 'column',position: 'absolute',top: '80px',justifyContent: 'center',zIndex: 1,animation: 'growDown 300ms ease-in-out forwards'}}>
                <Link to="/Personalizar/TemaCor" style={{color: 'white',backgroundColor: cor[1]}} className='listItemPerso'>Cor de Tema</Link>
                <Link to={"Home"} style={{color: 'white',backgroundColor: cor[1]}} className='listItemPerso'>Favoritos</Link>
                </div>}
               </div>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Ropa Sans'}}><li style={{fontSize: '40px',color: 'white',fontFamily: 'Ropa Sans'}}>Saiba Mais</li> </a>
               <div style={{display:'flex',height: '41px'}}>
               <Search onChange={(e) => {setBusca(e.target.value)}} onKeyDown={(e) => {if (e.key === 'Enter') {HandleSearch(busca)}}} placeholder="Telecinese..."></Search>
               <div onClick={() => {HandleSearch(busca)}} style={{backgroundColor: '#d9d9d9',borderRadius: '0px 25px 25px 0px',height: '100%',cursor: 'pointer',border: 'none',display: 'grid',placeItems: 'center'}}>
               <svg style={{scale: '0.7',position: 'relative',bottom: '4px'}} xmlns="http://www.w3.org/2000/svg" fill="#161616" height="48" width="48"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>
               </div>
               </div>
            </ul>}
            {mobile && <img src={menu} onClick={HandleClick} style={{width: '53px'}}/>}
            {Menu && <ul ref={lista} className="sliderleft" style={{display: mobile ? 'flex' : 'none',gap: '22px',flexDirection: 'column',position:'absolute',right:'0px',top: '82px',background: cor[1],width: '0%',height: 'calc(100% - 70px)',overflow: 'hidden'}}>
              <Link to="/Home" style={{textAlign: 'end',marginTop: '12px'}}><MenuItem>Contos</MenuItem></Link>
              <Link to="/Personagens"  onClick={() => {localStorage.setItem('personagemGlob',null)}} style={{textAlign: 'end'}}><MenuItem>Personagens</MenuItem></Link>
              <Link to="/Personalizar" style={{textAlign: 'end'}}><MenuItem>Outros</MenuItem></Link>
              <Link to="" style={{textAlign: 'end'}}><MenuItem>Contato</MenuItem></Link>
              <Link to="" style={{textAlign: 'end'}}><MenuItem>Doação</MenuItem></Link>
              <Link to="" style={{textAlign: 'end'}}><MenuItem>Saiba Mais</MenuItem></Link>
            </ul>}
        </header>
    )
}

export default Header