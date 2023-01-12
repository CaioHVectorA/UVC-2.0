import React from 'react'
import UserContext from './UserContext'
import Hists from './Backend/Hists.json'
import Header from './Header'
import svgs from './Svgs'
import styled from 'styled-components'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import useGetCreateStorage from '../Hooks/useGetCreateStorage'
const TagButton = styled.li`
padding: 6px 16px;
background-color: ${(props) => props.cor[0]};
font-size: 18px;
border-radius: 20px;
font-family: Roboto Slab;
margin-top: 12px;
&:hover {
    background-color: ${(props) => props.cor[2]};
    cursor: pointer;
}
`
const DropBox = styled.button`
padding: 20px 32px;
display: flex;
justify-content: space-between;
border: none;
font-size: 24px;
font-family: Roboto Slab;
color: white;
background-color: ${(props) => props.cor[0]};
border-bottom: 1px solid rgba(0,0,0,0.2);
width: 600px;
&:last-child {
    border-bottom: none;
}
&:hover {
    background-color: ${(props) => props.cor[2]};
    cursor: pointer
}
@media (max-width: 768px) {
width: 320px;
}
`

const ButtonLer = styled.button`
padding: 6px 12px;
background-color: ${(props) => props.cor[1]};
font-size: 20px;
font-family: Roboto Slab;
border-radius: 5px;
white-space: nowrap;
border: 1px solid rgba(0,0,0,0.8);
&:hover {
    background-color: ${(props) => props.cor[2]};
    cursor: pointer
}
color: white;
`
// Clicou na hist -> Setou dados via myContext -> capturou dados com o context ->  metamorfou pro front-end -> 
const Division = (props) => {
    return (
        <div style={{width: props.size,height: '2.6px',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius: '25px',margin: '20px auto',maxWidth: '1500px'}}></div>
    )
}

const Mais = () => {
    return (
        <div style={{position: 'relative',top: '7px'}}>
            <div style={{width: '4px',height: '23px',borderRadius: '25px',backgroundColor: '#e7e7e7',position: 'absolute'}}></div>
            <div style={{width: '4px',height: '23px',borderRadius: '25px',backgroundColor: '#e7e7e7',position: 'absolute',transform: 'rotate(90deg)'}}></div>
        </div>
    )
}

const DropDown = (props) => {
  var mobile = window.outerWidth < 480
    const { ref,setRef,cor,setCor,Hist,setHist,read,setRead } = React.useContext(UserContext)  
const [display,setDisplay] = React.useState('none')
const [Histo, setHisto] = useGetCreateStorage('Hist','')
const Nav = useNavigate()   
let data = props.cap
let eps = data.Episodios
let epsArray = Object.entries(eps)
// console.log(epsArray)
function HandleClick(ep) {
    setRead([props.refe,ep[1].Nome,props.tipo,props.eps])
    setHist(ref + '/' + ep[1].Ref)
    setHisto(ref + '/' + ep[1].Ref)
    Nav('/PageHist')
}
    return (
        <div>   
        <DropBox onClick={() => {if (display === 'none') {setDisplay('flex')} else {setDisplay('none')}}} cor={cor}>
            <p style={{fontFamily: 'Roboto Slab',fontSize: !mobile ? '26px' : '18px',whiteSpace: 'nowrap'}}>{data.Nome}</p>
            <Mais />
        </DropBox>
        {/* colocar algum limitador de width da parte dos eps */}
            <div className='slidedown' style={{display: display,backgroundColor: '#161616',padding: '6px 12px',flexDirection: 'column',gap: '12px',maxWidth: mobile ? '320px' : '1800px'}}>
                {epsArray.map((ep, index) => (
                    <div key={index} style={{display: 'flex',width: '100%',justifyContent: 'space-between'}}>
                    <p style={{fontFamily: 'Roboto Slab',fontSize: !mobile ? '26px' : '18px'}} key={index}>{ep[1].Numero}. {ep[1].Nome}</p>
                    <ButtonLer onClick={() => {HandleClick(ep)}} cor={cor}>Ler agora</ButtonLer>
                    </div>
                ))}
            </div>
        </div>
)
}
const Conto = () => {
  var mobile = window.outerWidth < 480
    const { ref,setRef,cor,setCor } = React.useContext(UserContext)    
    const [heartsvg,setSvg] = React.useState(svgs.heart) 
    let refAtual;
    var NumEps;
    var nomehist;
    Hists.AllHists.forEach(hist => {
        if (hist.Ref === ref) {
            refAtual = hist
            let TempName = refAtual.Nome 
            let parts = TempName.split(',');
            nomehist = parts[0]
            NumEps = hist.eps
        }
    });
  return (
    <div>
        <Header />
{!refAtual && <h1>Carregando...</h1>}
{refAtual && nomehist && !mobile && <div>
 <div style={{display: 'grid',gridTemplateColumns: '4.5fr 8.5fr',width: '100%',paddingTop: '32px',gap: '12px',maxWidth: '1500px',margin: '0 auto'}}>
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',paddingLeft: '132px',gap: '8px'}}>
        <div style={{width: '360px',height: '360px',padding: '24px',background: '#d9d9d9',borderRadius: '12px'}}><img src={process.env.PUBLIC_URL + 'img/' + refAtual.imgref} style={{width: '100%',height: '100%',objectFit: 'cover',borderRadius: '5px'}}/></div>
        <svg onClick={() => {setSvg(svgs.fullheart)}} fill={'white'} width='48px' height='48px'><path d={heartsvg} ></path></svg>
    </div>
    <div>
        <h1>{refAtual.Nome}</h1>
        <div style={{marginLeft: '176px'}}>
        <p style={{fontSize: '22px',textAlign: 'center',maxWidth: '480px',fontFamily: 'Roboto Slab',marginTop: '8px'}}>{refAtual.Desc}</p>
        <ul style={{display: 'flex',gap: '12px',justifyContent: 'center',maxWidth: '480px'}}>
        {refAtual.tags.map((tag, index) => (
            <TagButton cor={cor} key={index}>{tag}</TagButton>
        )) }
        </ul>
        {!mobile && <div style={{width: '500px',height: '2.6px',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius: '25px',margin:'20px 0px'}}></div>}
        <p style={{fontSize: '22px'}}>Status: <span style={{color: refAtual.status === 'Em progresso' ? '#66E42B' : 'white',fontFamily: 'Roboto Slab'}}>{refAtual.status}</span></p>
        <p style={{fontSize: '22px',marginTop: '8px'}}>Escrito por: {refAtual.escrito}</p>
        </div>
    </div>
    </div>
    <Division size='90%' />
    {refAtual.Tipo === 'SERIE' && <div style={{display: 'grid',justifyContent: 'center'}}>
        <h1 style={{marginBottom: "32px"}}>Capítulos:</h1>
        {refAtual.Capitulos.map((cap, index) => (
            <DropDown cap={cap} refe={nomehist} tipo={refAtual.Tipo} eps={NumEps}/>
        ))}
        </div>} 
    </div>}
{refAtual && nomehist && mobile && <div>
 <div style={{display: 'flex',flexDirection: 'column',width: '100%',paddingTop: '32px',gap: '12px',maxWidth: '1500px',margin: '0 auto'}}>
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',gap: '8px'}}>
        <h2 style={{fontSize: '30px',whiteSpace: 'nowrap'}}>{refAtual.Nome}</h2>
        <div style={{width: '260px',height: '260px',padding: '24px',background: '#d9d9d9',borderRadius: '12px'}}><img src={process.env.PUBLIC_URL + 'img/' + refAtual.imgref} style={{width: '100%',height: '100%',objectFit: 'cover',borderRadius: '5px'}}/></div>
        <svg onClick={() => {setSvg(svgs.fullheart)}} fill={'white'} width='48px' height='48px'><path d={heartsvg} ></path></svg>
    </div>
    <div>
        <div style={{marginLeft: '0px'}}>
        <p style={{fontSize: '22px',textAlign: 'center',maxWidth: '480px',fontFamily: 'Roboto Slab',marginTop: '8px'}}>{refAtual.Desc}</p>
        <ul style={{display: 'flex',gap: '12px',justifyContent: 'center',maxWidth: '480px'}}>
        {refAtual.tags.map((tag, index) => (
            <TagButton cor={cor} key={index}>{tag}</TagButton>
        )) }
        </ul>
        <div style={{width: '80%',height: '2.6px',backgroundColor: 'rgba(255,255,255,0.2)',borderRadius: '25px',margin: '20px 0px'}}></div>
        <p style={{fontSize: '22px'}}>Status: <span style={{color: refAtual.status === 'Em progresso' ? '#66E42B' : 'white',fontFamily: 'Roboto Slab'}}>{refAtual.status}</span></p>
        <p style={{fontSize: '22px',marginTop: '8px'}}>Escrito por: {refAtual.escrito}</p>
        </div>
    </div>
    </div>
    <Division size='90%' />
    {refAtual.Tipo === 'SERIE' && <div style={{display: 'grid',justifyContent: 'center'}}>
        <h1 style={{marginBottom: "32px"}}>Capítulos:</h1>
        {refAtual.Capitulos.map((cap, index) => (
            <DropDown cap={cap} refe={nomehist} tipo={refAtual.Tipo} eps={NumEps}/>
        ))}
        </div>} 
    </div>}
    </div>
  )
}

export default Conto