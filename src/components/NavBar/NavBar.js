import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='navbar m-3'>
            <h3 className='column subtitle is-3'>
            WILDVEST
            </h3>
            <div className='buttons column is-6'>
                <button className='button'>Nosotros</button>
                <button className='button'>Productos</button>
                <button className='button'>Comprar</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;