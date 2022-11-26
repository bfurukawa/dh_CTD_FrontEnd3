import { useState, useEffect } from 'react'
import './style.scss'

export function DecimaTerceiraAula(){

    const [timerPedido, setTimerPedido] = useState(false)

    useEffect(()=>{setTimeout(()=>{
        console.log('O componente foi atualziado')
        setTimerPedido(true)
    }, 2000)},[])
    
    function cancelarPedido(){
        alert('Seu pedido foi cancelado.')
        setTimerPedido(false)
    }

    return(
        <>
            <h1>Cancelar Pedido:{timerPedido ? ' Hamburguer' : ''}</h1>
            <button onClick={()=>cancelarPedido()}>Cancelar Pedido</button>
        </>
    )


}