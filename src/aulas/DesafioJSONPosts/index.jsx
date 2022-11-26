import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.scss'

export function DesafioJSONPosts(){

    const [listaPosts, setListaPosts] = useState([])
    const [displayCards, setDisplayCards] = useState('')

    const requestConfig = {
        method: 'GET',
    }

    const apiURL = "https://jsonplaceholder.typicode.com"

    function buscarTodosPosts(){
        //fetch(`${apiURL}/Todos`, requestConfig).then(response => {
            //console.log(`${apiURL}/posts`)
            fetch(`${apiURL}/posts`).then(response => {
                //console.log(response)
                    console.log(response)
                    response.json().then(
                        data => {
                            setListaPosts(data)
                            console.log(data)
                        }
                        )
                })
        
    }

    function montrarCards(){
        //setDisplayCards('')
        setDisplayCards(listaPosts.map((itemLista)=>{
            return <Link to={`../JSONPostComments/${itemLista.id}`}>
                    <div id={itemLista.id} className="cardPost">
                        <p>UserId : {itemLista.userId}</p>
                        <h3>{itemLista.title}</h3>
                        <p>{String(itemLista.body)}</p>
                    </div>
                </Link>
                    
        }))
    }

    useEffect(()=>{buscarTodosPosts()},[])
    useEffect(()=>montrarCards(),[listaPosts])
    useEffect(()=>console.log(displayCards),[displayCards])

    return (
        <> 
            {displayCards}
        </>
    )
}