import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos: number;
}

export const Timer = ( { milisegundos }: TimerArgs ) => {

    const [segundo, setSegundo] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    // malo
    // useEffect(() => {
    //    setInterval( () => setSegundo( segundo +1 ), 789 )
    // }, [ segundo ])

    useEffect(() => {
       ref.current && clearInterval( ref.current );
       ref.current = setInterval( () => setSegundo( s => s + 1), milisegundos  );
    }, [ milisegundos ])


    return (
        <div className="mt-1">
            
            <h4>Timer: <small> { segundo } </small></h4>

        </div>
    )
}
