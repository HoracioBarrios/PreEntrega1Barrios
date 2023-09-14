import car from './assets/carrito.png'

const CartWidget = () => {
    return (  
        <div>
            <img src={car} alt='carrito' className='icon'/>
            0
        </div>
    );
}

export default CartWidget;