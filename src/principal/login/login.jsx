import './login.css';

export default function login() {
    return (




<section className="contenedorCentral">
       {/*  <!-- Ingresar --> */}
        <div id="iniciar-sesion">
            <h1>Iniciar Sesión</h1>
            {/* <!--Asterisco y span para hacer obligatorio el campo--> */}
            <div className="contenedor-input">
                <label>
                    Identity <span className="req">*</span>
                </label>
                <input type="text" required />
            </div>
            <div className="main-buttons">
                <div>
                 <button> Ingresar </button>
                </div>
                <div>
                    <button>  Cancelar </button>
                </div>
            </div>
        
        </div>

    </section>

    );
    }