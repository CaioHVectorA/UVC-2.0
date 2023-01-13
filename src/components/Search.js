import React from 'react'
import UserContext from './UserContext'
import { useContext } from 'react'
import Header from './Header'
import { AllCharactersFull } from './Backend/BackendPersonagens'
import AllContos from './Backend/Contos'
import { Link } from 'react-router-dom'
import useGetCreateStorage from '../Hooks/useGetCreateStorage'
const Search = () => {
    const {cor,setCor,search,setSearch,ref,setRef} = useContext(UserContext)
    var [results,setResults] = React.useState(0)
    React.useEffect(() => {
        if (!search) {
            setSearch('Nada')
        }
    },[search])
 const stylebutton = {
    background: cor[0],
boxShadow: '0px 4px 4px #000000',
borderRadius: '25px',
width: 'fit-content',
padding: '10px',
fontSize: '20px',
color: 'white',
margin: '0 auto',
 }
 function Aumentar() {
    setResults(results += 1)
 }
//  let Contos,characters;
 var [personagemGlob,setPersonagemGlob] = useGetCreateStorage('personagemGlob',null)
 var [Contos,setContos] = React.useState(null)
 var [characters,setCharacters] = React.useState(null)
 React.useEffect(() => {
    let count = 0;
    console.log(results)
    setContos(AllContos.map(conto => {
        if (conto.nome.toUpperCase() === search.toUpperCase() || conto.tipo.toUpperCase() === search.toUpperCase() || conto.nome.toUpperCase().startsWith(search.toUpperCase()) || conto.tipo.toUpperCase().startsWith(search.toUpperCase() )) {
        count++
          return <li key={conto.nome}>
          <div style={{height: '210px',width: '760px',backgroundColor: '#080808',border: '1px solid #000',padding: '16px 30px',borderRadius: '25px',display: 'flex',flexDirection: 'column',gap: '10px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                <div style={{display: 'flex',width: '100%',justifyContent: 'space-between'}}>
                    <p style={{fontFamily: 'Roboto Slab',fontSize: '20px',textTransform: 'capitalize',color: 'rgba(255,255,255,0.5)'}}>Conto</p>
                    <p style={{fontFamily: 'Roboto Slab',fontSize: '20px',textTransform: 'capitalize',color: 'rgba(255,255,255,0.5)'}}>{conto.tipo}</p>
                </div>
                <h1 style={{fontFamily: 'Lakers',fontSize: '40px',fontWeight: 'normal',textAlign: 'start'}}>{conto.nome}</h1>
                <p style={{fontFamily: 'Roboto Slab',fontSize: '20px',color: 'rgba(255,255,255,1)',textOverflow: 'ellipsis',whiteSpace: 'nowrap',overflow: 'hidden'}}>{conto.desc}</p>
                <Link to={'/Conto'} onClick={() => {setRef(conto.ref)}} style={stylebutton}>Acesse Agora!</Link>
            </div>
            </li>
        }
        return null;
    }))
    setCharacters(AllCharactersFull.map(character => {
        if (character.nome.toUpperCase() === search.toUpperCase() || character.equipe.toUpperCase() === search.toUpperCase() || character.nome.toUpperCase().startsWith(search.toUpperCase())) {
        count++
         return<li key={character.nome}>
          <div style={{height: '210px',width: '760px',backgroundColor: '#080808',border: '1px solid #000',padding: '16px 30px',borderRadius: '25px',display: 'flex',flexDirection: 'column',gap: '10px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
              <div style={{display: 'flex',width: '100%',justifyContent: 'space-between'}}>
                  <p style={{fontFamily: 'Roboto Slab',fontSize: '20px',textTransform: 'capitalize',color: 'rgba(255,255,255,0.5)'}}>Personagem</p>
                  <p style={{fontFamily: 'Roboto Slab',fontSize: '20px',textTransform: 'capitalize',color: 'rgba(255,255,255,0.5)'}}>{character.equipe}</p>
              </div>
              <h1 style={{fontFamily: 'Lakers',fontSize: '40px',fontWeight: 'normal',textAlign: 'start'}}>{character.nome}</h1>
              <p style={{fontFamily: 'Roboto Slab',fontSize: '20px',color: 'rgba(255,255,255,1)',textOverflow: 'ellipsis',whiteSpace: 'nowrap',overflow: 'hidden'}}>{character.desc}</p>
              <Link to={'/Personagens'} onClick={() => {localStorage.setItem('personagemGlob',character.nome)}} style={stylebutton}>Acesse Agora!</Link>
          </div>
          </li>
          
        }
        return null;
      }));
      setResults(count)
    },[search])
  return (
    <div>
        <Header />
        <h1 style={{marginTop: '40px'}}>Você pesquisou por: {search}</h1>
        {search === 'Nada' && <p style={{textAlign: 'center',marginTop: '20px',fontSize: '24px'}}>Adicione palavras chave melhores e nomes existentes para melhorar seus resultados.</p>}
        {search !== 'Nada' && <h2 style={{position: 'relative',marginTop: '16px',right: '256px'}}>{results} Resultados</h2>}
        <div style={{display: 'flex',placeItems: 'center',flexDirection: 'column',gap: '56px'}}>
        {Contos && characters && <ul style={{display: 'flex',placeItems: 'center',flexDirection: 'column',gap: '56px'}}>{Contos}</ul>}
        {Contos && characters && <ul style={{display: 'flex',placeItems: 'center',flexDirection: 'column',gap: '56px'}}>{characters}</ul>}
        </div>
    </div>
  )
}

export default Search