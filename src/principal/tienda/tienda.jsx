
export default function tienda () {
     return (
         <>
         <header>
             <div className="title">
                 <h1>Tienda</h1>
             </div>
             <nav>
                 <ul className="nav-right-section">
                     <li>
                         <a href="">
                             tonali <img src="/image/tonali(sol).png" alt="moneda tonali"/>
                             </a>
                     </li>
                     <li>
                         <a href="">
                             metstli <img src="/image/coin_metstli.png" alt="Moneda metstli"/>
                             </a>
                     </li>
                 </ul>

             </nav>
         </header><section className="main-section">+

                 <div className="containerAccesorio">
                     <img src="/image/colaDragon.png" alt="cola de dragon accesorio"/>
                         <h1>Cola de dragón</h1>
                         <button className="Item"> Comprar </button>
                     </div>

                 <div className="containerAccesorio">

                     <img src="/image/Colmillos.png" alt="colmillos de vampiro accesorio"/>
                         <h1>Colmillos de vampiro</h1>
                         <button className="Item"> Comprar </button>
                     </div>

                 <div className="containerAccesorio">
                     <img src="/image/orejasElfo.png" alt="Orejas de elfo accesorio"/>
                         <h1>Orejas de elfo</h1>
                         <button className="Item"> Comprar </button>
                     </div>

                 <div className="containerAccesorio">
                     <img src="/image/cuernoUnicornio.png" alt="Cuerno de unicornio accesorio"/>
                         <h1>Cuerno de unicornio</h1>
                         <button className="Item"> Comprar </button>
                     </div>

                 <div className="containerAccesorio">
                     <img src="/image/AntenasAlien.png" alt="Antena de insecto accesorio"/>
                         <h1>Antena de insecto</h1>
                         <button className="Item"> Comprar </button>
                     </div>

             </section></>

);
}


/* document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento estático "padre" más cercano a los botones
    const mainSection = document.querySelector('.main-section');

    // Añadir event listener al elemento estático "padre" si existe
    if (mainSection) {
        mainSection.addEventListener('click', (event) => {
            // Comprobar si el elemento clickeado es un botón
            if (event.target && (event.target as HTMLElement).tagName === 'BUTTON') {
                // Obtener el texto del elemento "hermano" anterior, el cual contiene el título
                const previousSibling = (event.target as HTMLElement).parentElement.previousElementSibling;
                const itemName = previousSibling && previousSibling.querySelector('h1')?.innerText;
                alert(`Has comprado ${itemName}`);
            }
        });
    }
}); */
