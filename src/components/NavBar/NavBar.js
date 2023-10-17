import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className= "navbar navbar-expand-lg navbar-light bg-light" role='navigation' aria-label='main navigation'>
            <div className= "container-fluid">
                <Link to="/" className='navbar-brand'>
                    <h3 className='logo'>WILDVEST</h3>
                </Link>
                
                <div>
                    <div  className='navbar-nav'>
                        <div className='nav-item'>
                            <NavLink to={`/category/Laptops`} className='nav-link'>Laptops</NavLink>
                        </div>
                        <div className='nav-item'>
                            <NavLink to={`/category/Smartphones`} className='nav-link'>Smartphones</NavLink>
                        </div>
                        <div className='nav-item'>
                            <NavLink to={`/category/Televisores`} className='nav-link'>Televisores</NavLink>
                        </div>
                    </div>
                </div>

            <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
