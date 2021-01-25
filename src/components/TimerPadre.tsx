import { useState } from 'react';
import { Timer } from './Timer';


export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

    
    return (
        <div className="mt-1">

            <span>Milisegundos: { milisegundos } </span>
            <br/>
            <button className="btn btn-outline-success mt-1"
                    onClick={ () => setMilisegundos(2000) }>
                Set: 2000 milisegundos
            </button>

            <button className="btn btn-outline-success mt-1"
                    onClick={ () => setMilisegundos(1000) }>
                Set: 1000 milisegundos
            </button>
            

            <Timer milisegundos={ milisegundos } />

        </div>
    )
}
