import Header from "./components/Header"
import Footer from "./components/Footer"
import useGetCreateStorage from "./Hooks/useGetCreateStorage";
import React from "react";
import Inicial from "./components/Inicial";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import UserContext from "./components/UserContext";
import Personalizar from "./components/Personalizar";
import TemaCor from "./components/Personalizar/TemaCor";
import Personagens from "./components/Personagens";
import Search from "./components/Search";
import Conto from "./components/Conto";
import PageHist from "./components/PageHist";
import Favorites from "./components/Personalizar/Favorites";
const App = () => {
  const fundos = {
    UVC: ['#B140A6','#912987','#da4ecc'],
    Ciecon: ['#237c99','#149ecc','#5accf2'],
    RRH: ['#a60711','#7d0b12','#e6000e'],
    MR: ['#702b00', '#4d1d00','#853c10'],
    Lich: ['#6e125e','#5c054d','#911f7e']
  }
  let teste = localStorage.getItem('cor')
  const [cor,setCor] = React.useState(fundos.UVC);
  const [search,setSearch] = React.useState('')
  const [ref,setRef] = React.useState('')
  const [Hist,setHist] = React.useState('')
  const [read,setRead] = React.useState('')
  const [filter,setFilter] = React.useState('')
  // const [personagemGlob,setPersonagemGlob] = React.useState(null)
  React.useEffect(() => {
    if (teste) {
      setCor(JSON.parse(teste))
    }
  }, [])
  window.onerror = function() {
   console.log('teste')
  }
return (
  <BrowserRouter>
  <UserContext.Provider value={{ cor,setCor,search,setSearch,ref,setRef,Hist,setHist,read,setRead,filter,setFilter}}>
  <Routes>
    <Route path="/" element={<Inicial />} />
    <Route path="Personalizar" element={<Personalizar />} />
    <Route path="/Personalizar/TemaCor" element={<TemaCor />} />
    <Route path="Home" element={<Home />} />
    <Route path="/Personalizar/Favorites" element={<Favorites />} />
    <Route path="Personagens" element={<Personagens />} />
    <Route path="Search" element={<Search />} />
    <Route path="Conto" element={<Conto />} />
    <Route path="PageHist" element={<PageHist />} />
  </Routes>
  </UserContext.Provider>
</BrowserRouter>
)
}

export default App;
