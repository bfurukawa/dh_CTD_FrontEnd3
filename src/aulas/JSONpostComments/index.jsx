import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Style.scss'

export function JSONpostsComments(){

    const apiURL = "https://jsonplaceholder.typicode.com"

    const {id} = useParams()

    const [post, setPost] = useState('')
    const [comentarios, setComentarios] = useState('')

    function montarPost(){
        fetch(`${apiURL}/posts/${id}`).
            then(response => {
                //console.log(response)
                    //console.log(response)
                    response.json().then(
                        
                        data => {
                            console.log(data)
                            setPost( <div id={data.id} className="cardPost">
                                    <p>UserId : {data.userId}</p>
                                    <h3>{data.title}</h3>
                                    <p>{String(data.body)}</p>
                                </div>)                         
                        }
                        )
                })
    }

    function montarComentarios(){
        fetch(`${apiURL}/posts/${id}/comments`).
        then(response => {
            //console.log(response)
                //console.log(response)
                response.json().then(
                    
                    data => {
                        console.log(data)
                        setComentarios( 
                            data.map(
                                (itemLsitaComentarios) =>{
                                    return (
                                        <div id={itemLsitaComentarios.id} className="cardComment">
                                            <p>{itemLsitaComentarios.name}</p>
                                            <p className='JSONcomment'>{String(itemLsitaComentarios.body)}</p>
                                            <p>{itemLsitaComentarios.email}</p>
                                        </div>    
                                    )
                                }
                            )
                        )
                                                    
                    }
                    )
            })
    }

    function montarPostComentarios(){
        montarPost()
        montarComentarios()
    }


    useEffect(()=>{ montarPostComentarios() },[])


    return (
        <>
        {post}
        {comentarios}
        </>
    )
}