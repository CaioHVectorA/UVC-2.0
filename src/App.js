import Header from "./components/Header"
import Footer from "./components/Footer"

const Div = (nome,local,tipo,desc,img) => {
  const imglink = 'url('+img+')'
  console.log(imglink)
  return (
    <div>
      <div style={{width: '300px',height: '300px',backgroundImage:imglink,backgroundPosition:'center',backgroundSize:'102%'}}></div>
    <div style={{height: '245px',background: '#131313',width: '300px',padding: '20px 0px',display: 'grid',justifyContent: 'center',marginBottom: '100px'}}>
     <div style={{display: 'flex',minWidth: '300px',justifyContent: 'space-between', marginRight: '-0px'}}>
     <p style={{color: '#e7e7e7',fontFamily: 'Arial',margin: '8px 20px',color: local==='TERRA' ? 'greenyellow' : 'yellow'}}>{local}</p>
     <p style={{color: '#e7e7e7',fontFamily: 'Arial',margin: '8px 20px'}}>{tipo}</p>
     </div>
     <h2 style={{color: '#e7e7e7',fontFamily: 'Slab',margin: '0 auto',bottom: '80px',height: 'max-content'}}>{nome}</h2>
     <p style={{color: '#e7e7e7',margin: '0 20px',textAlign: 'center',fontSize: '18px',fontWeight: '430'}}>{desc}</p> 

    </div>
        
    </div>
)
}

const GridCaixas = () => {
  return (
    <div style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fit,300px)'}}></div>
  )
}


const App = () => {
  function hist(nome,tipo,local,descricao,img) {
    this.nome = nome;
    this.tipo = tipo.toUpperCase();
    this.local = local.toUpperCase();
    this.descricao = descricao;
    this.img = '/imgs/' + img
}

const MR = new hist(
    'Menino Resiliente',
    'Serie',
    'Terra',
    'Conheça a trama de Larry,o menino que ganhou um poder espontaneamente que mudaria completamente sua vida.',
    'MR.png'
    )
    
    const Ciec = new hist('Ciecon','SOLO','Universal','Entenda a Origem de Ciecon,que ganhou um poder sobrenatural e decide que irá entregar sua vida para salvar o universo.','Ciecon.jpg')
    const Kerry = new hist('Kerry','SOLO','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
    const Guard = new hist('Guardiões','serie','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
    const Guard2 = new hist('Guardiões','serie','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
    const Guard3 = new hist('Guardiões','serie','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
    const Guard4 = new hist('Guardiões','serie','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
    const Guard5 = new hist('Guardiões','serie','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
    const Guard6 = new hist('Guardiões','serie','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
    const Guard7 = new hist('Guardiões','serie','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
    const AllHists = [MR,Ciec,Kerry,Guard,Guard2,Guard3,Guard4,Guard5,Guard6,Guard7]


        return (
          <div>
            <Header />
          <section style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fit,300px)',gap: '130px',marginLeft: '4%',marginRight: '4%'}}>
            {AllHists.map(({nome,local,tipo,descricao,img}) => (
              Div(nome,local,tipo,descricao,img)
            ))}
          </section>
          <Footer />

          </div>
)}

export default App;
