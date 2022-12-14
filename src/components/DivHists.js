import React from 'react'
import { Link } from 'react-router-dom'
import AllContos from './Backend/Contos'
import UserContext from './UserContext'
// ver se o link consegue salvar o context antes de mandar pra a pag
const Div = (nome,local,tipo,desc,img,ref) => {
    const imglink =  `url(${process.env.PUBLIC_URL + img})`
    const { setRef } = React.useContext(UserContext)
    return (
            <Link key={nome} to={'/Conto'} onClick={() => {setRef(ref)}}>
              <div style={{width: '300px',height: '300px',padding: '24px',background: '#d9d9d9'}}><div style={{width: '100%',height: '100%',backgroundImage:imglink,backgroundPosition:'center',backgroundSize:'100%'}}></div></div>
            <div style={{height: '245px',background: '#131313',width: '300px',padding: '20px 0px',display: 'grid',justifyContent: 'center',marginBottom: '100px'}}>
             <div style={{display: 'flex',minWidth: '300px',justifyContent: 'space-between'}}>
             <p style={{color: '#e7e7e7',fontFamily: 'Arial',margin: '8px 20px',fontSize: '22px',color: local==='TERRA' ? 'greenyellow' : 'yellow'}}>{local}</p>
             <p style={{color: '#e7e7e7',fontFamily: 'Arial',margin: '8px 20px',fontSize: '22px'}}>{tipo}</p>
             </div>
             <h2 style={{color: '#e7e7e7',fontFamily: 'Roboto Slab',fontSize: '28px',fontWeight: 'normal',margin: '0 auto',bottom: '80px',height: 'max-content'}}>{nome}</h2>
             <p style={{color: '#e7e7e7',margin: '0 20px',textAlign: 'center',fontSize: '18px',fontWeight: '430'}}>{desc}</p> 
        
            </div>
            </Link>
        )
    }
    
    const DivHists = () => {
    var mobile = window.outerWidth < 480
  return (
        <div style={{marginTop: '156px',display: 'grid',gridTemplateColumns: 'repeat(auto-fit,300px)',gap: mobile ? '24px' : '130px',marginLeft: '4%',marginRight: '4%',justifyContent: 'center'}}>
        {AllContos.map(({nome,local,tipo,desc,img,ref}) => (
            Div(nome,local,tipo,desc,img,ref)
        )
        )}
    </div>
  )
}

export default DivHists