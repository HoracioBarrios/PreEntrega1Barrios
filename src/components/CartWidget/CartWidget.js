import './CartWidget.css'
import cart from './assets/carrito.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (  
        
        <Link to='/cart' className='icon-content' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cart} alt='carrito' className='cart-icon'/>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget;