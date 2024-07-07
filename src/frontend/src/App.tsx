//import { useState } from 'react'
import './App.css'
import { useInternetIdentity } from "ic-use-internet-identity";

function Inicio() {

  const { login, identity } = useInternetIdentity();

  const openStore = () => {
    const newTabUrl = './src/principal/tienda/tienda.html'; // Reemplaza con la URL de tu componente
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

          <button onClick={login} >JUGAR</button>

          <button onClick={openStore}>TIENDA</button>
         
          {identity && <p>Logged in as {identity.getPrincipal().toText()}</p>}

        </div>

        <div>
      
       
    </div>

          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </section>

      <footer>
        <div className='footer01'>
          <h6 className="piedepag">Copyright (c) 2024 LuckyDucky Team MIT License </h6>
        </div>
        
      </footer>
    </>
     
  )
}
       
export default Inicio;
