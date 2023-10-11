import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd})=>{
    const [quantity, setQuantity] = useState(initial)
        const increment = () => {
            if(quantity < stock) {
                setQuantity(quantity + 1)
            }
        }

        const decrement = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }

        return(
            <div>
                
                <div className='controles column is-half'>
                    <button className="boton-incremento" onClick={increment}>+</button>
                    <h4 className='subtitle m-4 is-center'>{quantity}</h4>
                    <button className="boton-decremento" onClick={decrement}>-</button>
                </div>
                
                <div className='colum is-half m-4'>
                <button className="boton-agregar" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
                </div>
                
            </div>
        )


}

export default ItemCount;