//import './CartItem.css';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const CartItem = ({ products }) => {
    const { removeProducts} = useContext(CartContext)
    
    return (
        <div>
            <picture>

                <img src={products.img} alt={products.name}/>

            </picture>
            <div>
                <h2>
                    {products.name}
                </h2>
                <p>
                    Cantidad: {products.quantity}
                </p>
                <p>
                    Subtotal: {products.quantity * products.price}
                </p>
                <button onClick={() => removeProducts(products.id)}>Eliminar</button>
                
            </div>
        </div>

    )
};

export default CartItem;