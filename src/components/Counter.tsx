import { useState } from 'react';


export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementar = ( numero: number = 1 ):void => {
        setCounter( counter + numero);
    }


    return (
        <>
            <h3>Counter:</h3>
            <span>Valor: { counter } </span>
            <br/>
            <button
                onClick={ () => incrementar() } 
                className="btn btn-outline-primary mt-2">
                +1
            </button>

            <button
                onClick={ () => incrementar(2) } 
                className="btn btn-outline-primary mt-2">
                +2
            </button>

            <button
                onClick={ () => setCounter(0) } 
                className="btn btn-outline-danger mt-2">
                Reset
            </button>
        </>
    )
}
