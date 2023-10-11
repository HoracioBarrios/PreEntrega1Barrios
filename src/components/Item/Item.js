import { Link } from 'react-router-dom'


const Item = ({id, name, img, price, stock}) => {
    return(
        <article className='card'>
            <header className='card-header'>
                <h2 className='card-header-title'>
                    {name}
                </h2>
            </header>
            <picture className='card-img'>
                <img src={img} alt={name}/>
            </picture>
            <section className='card-content'>
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p> 
            </section>
            <footer className='card-footer'>
                    <Link to = {`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;