import React from "react"
import UVC from "./UVC transparente.png"
import menu from './img/menu.svg'
const Header = () => {
var mobile = window.outerWidth < 480
    const [Menu,setMenu] = React.useState(false)
    const [Fechou,setFechou] = React.useState(false)
    const lista = React.useRef()
    function HandleClick() {
        if (Fechou) {
           lista.current.className = "sliderright"
           setTimeout(() => {
               setFechou(false)
               setMenu(!Menu)
           }, 360);
        }
        if (!Menu) {
            setTimeout(() => {
             setMenu(!Menu)
           setFechou(true)
              }, 360)
    }
    }
    return (
        <header style={{display: 'flex',justifyContent:'space-between',width:'100%',padding:'0px',backgroundColor:'#B140A6',alignItems: 'center',maxHeight: '82px',paddingRight: mobile ? '24px' : '0px'}}>
            <a href="#"><img className="uvcimg" src={UVC} style={{width: '128px',height: '128px',transform: 'scale(1.4)',position: 'relative',left: mobile ? '46px' : '68px',top:'14px',transition: '330ms'}} /></a>
            {!mobile && <ul style={{marginRight: '3%',display: 'flex',gap: '22px'}}>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Series</li> </a>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Solos</li> </a>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Personagens</li> </a>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Saiba Mais</li> </a>
            </ul>}
            {mobile && <img src={menu} onClick={HandleClick} style={{width: '53px'}}/>}
            {Menu && <ul ref={lista} className="sliderleft" style={{display: mobile ? 'flex' : 'none',gap: '22px',flexDirection: 'column',position:'absolute',right:'0px',top: '70px',background: '#6e2367',width: '0%',height: 'calc(100% - 80px)',overflow: 'hidden'}}>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela',padding: '1rem 0',textAlign: 'end',margin: '0 1rem',borderBottom: '2px solid rgba(0,0,0,0.1)'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Series</li> </a>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela',padding: '1rem 0',textAlign: 'end',margin: '0 1rem',borderBottom: '2px solid rgba(0,0,0,0.1)'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Solos</li> </a>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela',padding: '1rem 0',textAlign: 'end',margin: '0 1rem',borderBottom: '2px solid rgba(0,0,0,0.1)'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Personagens</li> </a>
               <a href="#" className="scale" style={{textDecoration: 'none',fontFamily: 'Gabriela',padding: '1rem 0',textAlign: 'end',margin: '0 1rem',borderBottom: '2px solid rgba(0,0,0,0.1)'}}><li style={{fontSize: '32px',color: 'white',fontFamily: 'Gabriela'}}>Saiba Mais</li> </a>
            </ul>}
        </header>
    )
}

export default Header