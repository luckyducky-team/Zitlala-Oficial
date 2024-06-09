import './persona.css';

export default function persona() {
    return (

<section className="central-container">
        <div id="elegir personaje">
            <h1>Elige tu personaje</h1>
            <div className="buttons-container">
                <div className="character-button">
                <button> <img src="/image/Aka`Humano3 (2).png" alt="Personaje 1, humano con gafas" /> </button>
                </div>
                <div className="character-button">
                <button> <img src="/image/humanopenacho.png" alt="Personaje 2, humano con penacho"/> </button>
                </div>
                <div className="character-button">
                 <button> <img src="/image/AlienZeta (2).png" alt="Personaje 3, alien"/> </button>
                </div>
                <div className="character-button">
                <button> <img src="/image/humana.png" alt="Personaje 4, humana"/> </button>
                </div>
                <div className="character-button">
                <button> <img src="/image/robot.png" alt="Personaje 5, robot"/> </button>
                </div>
            </div>
        
        </div>

    </section>
    
    
        );
        }