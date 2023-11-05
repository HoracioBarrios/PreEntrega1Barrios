import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
        const [quantityAdded, setQuantityAdded] = useState(0);
        const { addItem } = useContext(CartContext)
        
        const handleOnAdd = (quantity)=>{
            setQuantityAdded(quantity);

            const item = {
                id, name, price
            }
            addItem(item, quantity)
        }

    return (
        <article className="card">
            <header className="card-header">
                <h2 className="card-title">
                    {name} - {id}
                </h2>
            </header>
            <picture className="card-img">
                <img src={img} alt={name}/>
            </picture>
            <section className="card-body">
                <p className="card-text">
                    Categoria: {category}
                </p>
                <p className="card-text">
                    Descripción: {description}
                </p>
                <p className="card-text">
                    Precio: ${price}
                </p>
            </section>
            <footer className="card-footer">
                {
                    quantityAdded > 0 ?(
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
        

        
    )
}

export default ItemDetail;