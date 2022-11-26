import './style.scss'

export function QuintaAula(){

    const cards = [
        {name: 'Card 1', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/az2AWnq_460swp.webp'},
        {name: 'Card 2', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/aoKp7g0_700bwp.webp'},
        {name: 'Card 3', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/avQnMpX_700bwp.webp'},
        {name: 'Card 4', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/a1PXy5Y_460swp.webp'},
        {name: 'Card 5', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/aGEDX9X_460swp.webp'}

    ]
    return (

        <div className='quarta-aula-component'>
            {/* <h1 style={{color: "white"}}>Olá, eu sou a Quarta Aula</h1> */}
            <h1 className='main-title'> Componentes Identificados </h1>
            <ul className='component-card'>
            {cards.map((card) => (
                <li>
                    <img src={card.image} alt="" />
                    <h1>{card.name}</h1>
                    <p>{card.description}</p>
                </li>
            ))}
            </ul>
        </div>
        
    )


}