import './casa.css';

export default function casa() {
    return (
        <><div className="iconos">

            <button className="regre">
                <a href="/start/indi.tsx">REGRESAR</a>
            </button>

            <a href="/indexfolder/index.html">
                <img className="constru" src="/image/Construccion.png" alt="" />
            </a>

            <a href="/indexfolder/index.html">
                <img className="comi" src="/image/Comida.png" alt="" />
            </a>

            <a href="/indexfolder/index.html">
                <img className="ropi" src="/image/Accesorios.png" alt="" />
            </a>

        </div>
        <div className="container">
                <img src="/image/AlienZeta.png" alt="Mi imagen" />
                </div></>

    );
}