import car from './assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (  
        <div className='icon-content'>
            <img src={car} alt='carrito' className='cart-icon'/>
            0
        </div>
    );
}

export default CartWidget;