import React from 'react'
import Header from '../Header'
import styled from 'styled-components'
import UserContext from '../UserContext'
import { useContext } from 'react'
import useGetCreateStorage from '../../Hooks/useGetCreateStorage'
const TemaCor = () => {
document.title = 'Personalizar cor'

    const { cor,setCor } = useContext(UserContext)
    const BoxCor = styled.div`
    padding: 14px 24px;
    color: white;
    border: 1.2px solid ${props => props.corum};
    font-family: 'Gabriela';
    font-size: 24px;
    text-align: center;
    transition: 200ms;
    border-radius: 12px;
    &:hover {
        background-color: ${props => props.cordois};
        border: 1px solid ${props => props.cortres};
        cursor: pointer;
    }
    `
    const Fundos = {
        UVC: ['#B140A6','#912987','#da4ecc','UVC'],
        Ciecon: ['#237c99','#149ecc','#5accf2','Ciecon'],
        RRH: ['#a60711','#7d0b12','#e6000e','RRH'],
        MR: ['#702b00', '#4d1d00','#853c10','Menino R.'],
        Lich: ['#6e125e','#5c054d','#911f7e','Lich']
      }

      const array = [Fundos.UVC,Fundos.Ciecon,Fundos.RRH,Fundos.MR,Fundos.Lich]
      console.log(array)

      const Grid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit,188px);
      gap: 36px;
      justify-content: center;
      margin-top: 32px;
      `
      const [gcor,setgCor] = useGetCreateStorage('cor',JSON.stringify(cor))
  return (
    <div>
        <Header />
        <div style={{marginTop: '32px'}}>
              <h1>Cores disponíveis:</h1>
        <div>
        <Grid>
        {array.map((cor,index) => <div key={cor[0]}>
                <BoxCor onClick={() => {setCor(cor) ; const string = JSON.stringify(cor) ;setgCor(JSON.stringify(cor)) }} corum={cor[0]} cordois={cor[1]} cortres={cor[2]}>{cor[3]}</BoxCor>
            </div>
        )}
        </Grid>
        </div>      
        </div>

    </div>
    
  )
}

export default TemaCor