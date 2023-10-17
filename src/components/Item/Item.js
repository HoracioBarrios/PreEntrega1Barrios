import { Link } from 'react-router-dom';
//import './Item.css';

const Item = ({id, name, img, price, stock}) => {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                <article className='card center'>
            <header className='card-header'>
                <h2 className='card-title'>
                    {name}
                </h2>
            </header>
            <picture >
                <img className='card-img-top' src={img} alt={name}/>
            </picture>
            <section className='card-content'>
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p> 
            </section>
            <footer className='card-footer'>
                    <Link to = {`/item/${id}`}  className='btn btn-light'>Ver detalle</Link>
            </footer>
        </article>
                </div>
            
            </div>
            

        </div>
        
    )
}

export default Item;