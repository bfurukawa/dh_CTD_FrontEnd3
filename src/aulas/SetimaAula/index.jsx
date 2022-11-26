import { useState } from 'react';
import './style.scss'

export function SetimaAula(){

    const [contador, setContador] = useState(0)


    function Incrementa() {
        setContador(contador+1);
    }

        return(
            <main className='setima-aula-components'>

                <h1>Contador</h1>

                <button onClick={Incrementa}>Adicionar</button>
                <span>Número : {contador}</span>

            </main>
        )
}