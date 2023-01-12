import React, { useEffect } from 'react'
import Header from './Header'
import UserContext from './UserContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
var mobile = window.outerWidth < 600;

const ButtonLer = styled.button`
padding: 6px 12px;
background-color: ${(props) => props.cor[1]};
font-size: 20px;
font-family: Roboto Slab;
border-radius: 5px;
border: 1px solid rgba(0,0,0,0.8);
&:hover {
    background-color: ${(props) => props.cor[2]};
    cursor: pointer
}
color: white;
`
const ButtonCheck = styled.button`
padding: 6px 12px;
background-color: ${(props) => props.cor[1]};
font-size: 20px;
font-family: Roboto Slab;
border-radius: 5px;
border: 1px solid rgba(0,0,0,0.8);
&:hover {
    background-color: ${(props) => props.cor[2]};
    cursor: pointer
}
color:  ${(props) => props.corletra[2]};
`

const PageHist = () => {
    const { ref,setRef,cor,setCor,Hist,setHist,read,setRead } = React.useContext(UserContext)  
    const [Text,setText] = React.useState('')
    const [scrollw,setScroll] = React.useState('4800px')
    const [title,setTitle] = React.useState(read[1])
    var [Theme,setTheme] = React.useState('#e7e7e7')
    
  var Nav= useNavigate()
    var jafoi = false;
    function Button({text}) {
      // Declare um estado inicial para armazenar a cor do botão
      const [color, setColor] = React.useState('white');
      const [backgroudColor, setBackgroundColor] = React.useState('#080808');
        function handleClick() {
            if (text === 'Rolagem') {
              if (scrollw === '4800px') {
                setScroll('690px')
              } else {setScroll('4800px')}
            } else {
              if (Theme === '#e7e7e7') {
                let elements = document.querySelectorAll('.boxtexto [style^="color"]')
                elements.forEach(elemento => {
                  elemento.style.color = '#ffffff'
              })
                setTheme('#161616')
              } else {
                let elements = document.querySelectorAll('.boxtexto [style^="color"]')
                console.log(elements,document.querySelector('.boxtexto'))
                elements.forEach(elemento => {
                  elemento.style.color = '#000000'
              })
                setTheme('#e7e7e7')
              }
            }
        }
      
        return (
          <ButtonCheck corletra={[color,color,color,color]} cor={[backgroudColor,backgroudColor]}
            style={{ color, backgroundColor: backgroudColor}}
            onClick={handleClick}
          >
            {text}
          </ButtonCheck>
        );
      }
      function reqListener() {
        setText(this.responseText)
      }
        const req = new XMLHttpRequest();
      req.addEventListener("load", reqListener);
      req.open("GET",process.env.PUBLIC_URL + '/txt/' + Hist);
      req.send();
      function Next() {
        const [Pre,RefNum] = Hist.split('/')
        let [Num,txt] = RefNum.split('.')
        let TempNumber = parseInt(Num)
        console.log(read[3])
        if (TempNumber < read[3]) {
        
        let FinalNumber;
          let Number = TempNumber += 1
          console.log(Number)
          if (Number < 10) {FinalNumber = '0' + Number; console.log(FinalNumber)} else {FinalNumber = Number}
          setTitle(`Episódio ${FinalNumber}`)
          function reqListener() {
            console.log(this)
            setText(this.responseText)
          }
            const req = new XMLHttpRequest();
          req.addEventListener("load", reqListener);
          setHist(Pre + '/' + FinalNumber + '.' + txt)
          req.open("GET",process.env.PUBLIC_URL + '/txt/' + Hist);
          req.send();
        } else {
          alert('Não Há episódios posteriores.')
        }
      }
      function Prev() {
        const [Pre,RefNum] = Hist.split('/')
        let [Num,txt] = RefNum.split('.')
        let TempNumber = parseInt(Num)
        console.log(TempNumber > 0)
        if (TempNumber > 1) {
        let FinalNumber;
          let Number = TempNumber -= 1
          if (Number < 10) {FinalNumber = '0' + Number; console.log(FinalNumber)} else {FinalNumber = Number}
          setTitle(`Episódio ${FinalNumber}`)
          function reqListener() {
            setText(this.responseText)
          }
            const req = new XMLHttpRequest();
          req.addEventListener("load", reqListener);
          setHist(Pre + '/' + FinalNumber + '.' + txt)
          req.open("GET",process.env.PUBLIC_URL + '/txt/' + Hist);
          req.send();
      } else {
        alert('Não Há episódios anteriores.')
      }
    }

  return (
    <>
    <Header />
    <br /><br/><br/>
    <h2>Você está lendo: {read[0]},</h2>
    <br />
    <h1> "{title}"</h1>
    <br /><br/><br/>
    <div style={{width: '100%',display: 'flex',alignItems: 'center',flexDirection: 'column'}}>
      {!mobile && <div style={{width: '76%',borderRadius: '12px 12px 0px 0px',borderBottom: '3px rgba(255,0,0,0.3) solid',backgroundColor: '#080808',display: 'grid',gridTemplateColumns: !mobile ? '4fr 2fr 2fr 4fr' :  '1fr 1fr',gridTemplateRows: mobile ? '1fr 1fr' : '1fr',placeItems:'center',padding: '12px 0px'}}>
      {read[2] === 'SERIE' && <ButtonLer onClick={Prev}  cor={cor}>Anterior</ButtonLer>}
      <Button text={'Rolagem'}/>
      <Button text={'Inverso'}/>
      {read[2] === 'SERIE' && <ButtonLer  cor={cor} onClick={Next}>Próximo</ButtonLer>}

      </div>
      }
      {mobile && <div style={{width: '76%',borderRadius: '12px 12px 0px 0px',borderBottom: '3px rgba(255,0,0,0.3) solid',backgroundColor: '#080808',display: 'grid',gridTemplateColumns: !mobile ? '4fr 2fr 2fr 4fr' :  '1fr 1fr',gridTemplateRows: mobile ? '1fr 1fr' : '1fr',placeItems:'center',padding: '12px 0px',rowGap: '32px'}}>
      <Button text={'Rolagem'}/>
      <Button text={'Inverso'}/>
      {read[2] === 'SERIE' && <ButtonLer onClick={Prev}  cor={cor}>Anterior</ButtonLer>}
      {read[2] === 'SERIE' && <ButtonLer  cor={cor} onClick={Next}>Próximo</ButtonLer>}

      </div>
      }
    <div className='scroll' style={{width: '76%',padding: '32px 40px',backgroundColor: Theme,border: '#d8d8d8 3.2px solid',borderRadius: '0px 0px 12px 12px',maxHeight: scrollw,overflowY: 'auto',marginBottom: '48px'}}>
        <div className='boxtexto' dangerouslySetInnerHTML={{ __html: Text }}></div>
    </div>
    </div>
    
    <div style={{width: '100%',display: 'flex',justifyContent: 'center'}}><ButtonLer cor={cor} onClick={() => {window.scroll(0,0)}}>Voltar ao topo</ButtonLer></div>
    </>
  )
}

export default PageHist