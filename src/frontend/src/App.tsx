//import { useState } from 'react'
import './App.css'

function Inicio() {

  const openNewTab = () => {
    const newTabUrl = "/whoami"; // Reemplaza con la URL de tu componente
    window.open(newTabUrl, '_blank');
  };

  const openStore = () => {
    const newTabUrl = './src/principal/tienda/tienda.html'; // Reemplaza con la URL de tu componente
    window.open(newTabUrl, '_blank');
  };

  const openJuego = () => {
    const newTabUrl = './src/principal/casa/casa.html'; // Reemplaza con la URL de tu componente
    window.open(newTabUrl, '_blank');
  };

  return (  
    <>
      <section>
    
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className="logo">
          <img src="src/priv/LogoEstrellas.png"/>
        </div>

        <div className="botones" style={{ cursor: 'pointer' }}>

          <button onClick={openNewTab}>JUGAR</button>

          <button onClick={openStore}>TIENDA</button>

          <button onClick={openJuego}>CASA</button>

        </div>

          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </section>

      <footer>
        <div className='footer01'>
          <h6 className="piedepag">Derechos reservados de copy right</h6>
        </div>
        
      </footer>
    </>
     
  )
}
       

export default Inicio ;
