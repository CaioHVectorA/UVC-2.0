import React from 'react'
import { Link } from 'react-router-dom'

    const Div = (nome,local,tipo,desc,img) => {
        const imglink =  `url(${process.env.PUBLIC_URL + 'img/' + img})`
    //    const nome = n
    //    const local = Args[1].toUpperCase()
    //     const tipo = Args[2].toUpperCase()
    //     const desc = Args[3]
    //     const img = Args[4]
        return (
            <Link key={nome} to={'/'}>
              <div style={{width: '300px',height: '300px',backgroundImage:imglink,backgroundPosition:'center',backgroundSize:'102%'}}></div>
            <div style={{height: '245px',background: '#131313',width: '300px',padding: '20px 0px',display: 'grid',justifyContent: 'center',marginBottom: '100px'}}>
             <div style={{display: 'flex',minWidth: '300px',justifyContent: 'space-between', marginRight: '-0px'}}>
             <p style={{color: '#e7e7e7',fontFamily: 'Arial',margin: '8px 20px',fontSize: '22px',color: local==='TERRA' ? 'greenyellow' : 'yellow'}}>{local}</p>
             <p style={{color: '#e7e7e7',fontFamily: 'Arial',margin: '8px 20px',fontSize: '22px'}}>{tipo}</p>
             </div>
             <h2 style={{color: '#e7e7e7',fontFamily: 'Roboto Slab',margin: '0 auto',bottom: '80px',height: 'max-content'}}>{nome}</h2>
             <p style={{color: '#e7e7e7',margin: '0 20px',textAlign: 'center',fontSize: '18px',fontWeight: '430'}}>{desc}</p> 
        
            </div>
            </Link>
        )
    }

const DivHists = () => {
    var mobile = window.outerWidth < 480
    function Hist(...Args) {
        this.nome = Args[0]
        this.local = Args[1].toUpperCase()
        this.tipo = Args[2].toUpperCase()
        this.desc = Args[3]
        this.img = '../img/' + Args[4]
    }
    
    const Kerry = new Hist(
        'Kerry',
        'terra',
        'solo',
        'O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.',
        'Kerry.png'
    )

    const AllHists = [Kerry]
  return (
        <div style={{marginTop: '156px',display: 'grid',gridTemplateColumns: 'repeat(auto-fit,300px)',gap: mobile ? '24px' : '130px',marginLeft: '4%',marginRight: '4%',justifyContent: 'center'}}>
        {AllHists.map(({nome,local,tipo,desc,img}) => (
            Div(nome,local,tipo,desc,img)
        )
        )}
    </div>
  )
}

export default DivHists