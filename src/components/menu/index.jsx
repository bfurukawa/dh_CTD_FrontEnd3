import './style.scss'

export function Menu(props){

    return(
        <>
            {props.listaMenu.map((itemLista)=>{
                console.log(itemLista);
                <li><Link to='{itemLista}' >itemLista</Link></li>
            })}
        </>
    )


}