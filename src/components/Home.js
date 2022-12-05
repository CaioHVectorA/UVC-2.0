import React from 'react'
import Header from './Header'
import imgArner from '../img/rrh_slide.png'
import imgMR from '../img/MR_Slide.png'
import space from '../img/espaço.jpg'
import imgCong from '../img/Cong_Slide.png'
const Division = () => {
  return (
    <div style={{backgroundColor: 'rgba(255,255,255,0.5)',width: '80%',height: '3.5px',margin: '12 auto',borderRadius: '25px'}}>

    </div>
  )
}

const Home = () => {
  var mobile = window.outerWidth < 480
  return (
    <div>
        <Header />
        <div style={{width: '100%',height: '86.8vh'}}>
        <div style={{width: '100%',height: '100%',background: `url(${space})`,backgroundSize: '100%',zIndex: '5',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
          <div style={{position:'absolute',width: '100%',height:'86.8vh',backgroundColor: 'rgba(0,0,0,0.6)',zIndex: '1'}}></div>
          <h1 style={{marginTop: '24px',zIndex: '100',fontSize: '48px'}}>Escolha a história que mais combina com você!</h1>
          <br />
          <Division />
          <h3 style={{zIndex:'100',fontFamily: 'Roboto Slab',marginTop: '12px',fontWeight: 'normal'}}>Perdido? Use os filtros</h3>
          <div style={{display: 'grid',zIndex: '100',gridTemplateRows:'1fr 1fr',gridTemplateColumns: '1fr 1fr',width: '100%',padding: '36px 50px',gap: '50px'}}>
            <div style={{backgroundColor: '#202020',padding: '12px 12px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3>Solos</h3>
              <p style={{textAlign: 'center'}}>Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.</p>
            </div>
            <div style={{backgroundColor: '#202020',padding: '12px 12px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3>Solos</h3>
              <p style={{textAlign: 'center'}}>Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.</p>
            </div>
            <div style={{backgroundColor: '#202020',padding: '12px 12px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3>Solos</h3>
              <p style={{textAlign: 'center'}}>Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.</p>
            </div>
            <div style={{backgroundColor: '#202020',padding: '12px 12px',borderRadius: '25px',border: '3px solid #808080'}}>
              <h3>Solos</h3>
              <p style={{textAlign: 'center'}}>Histórias diretas,sem episódios que aprofundam personagens,sejam eles heróis ou vilões.</p>
            </div>
            {/* FAZ PRA MOBILE PELO AMOR DE DEUS */}
          </div>
    {/* decidir se vai ter carretel ou n */}
        {/* <div style={{margin: '0 auto',width: !mobile ? '868px' : '300px',height: !mobile ? '450px' : '300px',background: `url(${imgArner})`,position: 'relative',top: '9vh',borderRadius: '25px',backgroundPosition: 'center',backgroundSize: '120%',display: 'flex',flexDirection: 'column-reverse'}}> */}
        {/* <p style={{backgroundColor: 'rgba(0,0,0,0.8)',borderRadius:'0px 0px 25px 0px',position: 'relative',top: '15.8px',padding: '8px 18px'}}></p> */}        {/* </div> */}
        </div>
        </div>
        </div>
  )
}

export default Home