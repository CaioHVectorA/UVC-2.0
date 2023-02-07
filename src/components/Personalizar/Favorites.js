import React from 'react'
import useGetCreateStorage from '../../Hooks/useGetCreateStorage'
import Hists from '../Backend/Hists.json'
import UserContext from '../UserContext'
import styled from 'styled-components'
import Header from '../Header'
import { Link } from 'react-router-dom'
const Division = () => {
  return <div style={{backgroundColor: 'rgba(255,255,255,0.2)',width: '80%',height: '3px',borderRadius: '25px',margin: '12px auto'}}></div>
}
const Favorites = () => {
    const [Fav,setFav] = useGetCreateStorage('UVC_FAV','[]')
    const { cor,setRef } = React.useContext(UserContext)
  const LinkBar = styled.li`
color: white;
font-family: 'Roboto Slab';
width: calc(80% - 0px);
/* background-color: ${cor[0]} ; */
font-size: 32px;
padding: 12px 40px;
position: relative;
margin: 0 auto;
text-align: center;
&:hover {
  border-radius: 0px;
  border-bottom: 2px solid #121212;
background-color: ${cor[1]};
}
  `
    let TempFav = JSON.parse(Fav)
    let FavFinal = [];
    TempFav.forEach((FavItem) => {
      Hists.AllHists.forEach((Hist) => {
        if (Hist.Ref === FavItem) {
          FavFinal.push(Hist)
        }
      })
      console.log(FavFinal)
    })
  return (
    <div>
      <Header />
      <h1 style={{marginTop: '44px',marginBottom: '20px'}}>Seus favoritos</h1>
      <Division />
      <ul style={{display: 'flex',flexDirection: 'column',width: '100%',gap: '32px'}}>
    {FavFinal.length === TempFav.length && FavFinal.map((item,index) => (
      <div style={{display: 'flex',flexDirection: 'column',width: '100%'}}>
        <div style={{width: '216px',height: '216px',padding: '20px',background: '#d9d9d9',margin: '12px auto',borderRadius: '12px '}}><img src={process.env.PUBLIC_URL + '../img/' + item.imgref} style={{width: '100%',height: '100%'}} /></div>
        <Link to={'/Conto'}><LinkBar onClick={() => {setRef(item.Ref)}} key={index}>{item.Nome}</LinkBar></Link>
        <Division />
        </div>
        ))}
        </ul>
    </div>
  )
}

export default Favorites