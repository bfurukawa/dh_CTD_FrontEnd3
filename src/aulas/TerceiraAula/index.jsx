import './style.scss'

export function TerceiraAula(){


    const components = [
        {name: 'Card 1', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/az2AWnq_460swp.webp'},
        {name: 'Card 2', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/aoKp7g0_700bwp.webp'},
        {name: 'Card 3', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/avQnMpX_700bwp.webp'},
        {name: 'Card 4', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/a1PXy5Y_460swp.webp'},
        {name: 'Card 5', description: 'teste', image: 'https://img-9gag-fun.9cache.com/photo/aGEDX9X_460swp.webp'}

    ]

    return (
        <>
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                    { components.map(
                        (item) =>
                            <li>
                                <img src={item.image} alt="" />
                                <h1>{ item.name }</h1>
                                <p>{ item.description }</p>
                            </li>   
                        )
                     }
                    
            </ul>
        </>
    )
}