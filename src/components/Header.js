const Header = () => {
    return (
        <header style={{display: 'flex',justifyContent:'space-between',width:'100%',padding:'0px',backgroundColor:'rgb(203 69 149)',marginBottom: '200px',paddingTop: '10px',paddingBottom: '10px'}}>
            <h1 style={{margin: '1% 0px 0px 3%',fontFamily: 'Arial',fontWeight: '750'}}>UVC</h1>
            <ul style={{marginRight: '3%',display: 'flex',gap: '16px'}}>
               <a href="#" style={{textDecoration: 'none'}}><li style={{fontSize: '24px',color: 'white'}}>Todos os Contos</li> </a>
               <a href="#" style={{textDecoration: 'none'}}><li style={{fontSize: '24px',color: 'white'}}>Series</li> </a>
               <a href="#" style={{textDecoration: 'none'}}><li style={{fontSize: '24px',color: 'white'}}>Solos</li> </a>
               <a href="#" style={{textDecoration: 'none'}}><li style={{fontSize: '24px',color: 'white'}}>Saiba Mais</li> </a>
            </ul>
        </header>
    )
}

export default Header