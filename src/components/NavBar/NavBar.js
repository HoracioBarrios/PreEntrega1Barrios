import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link to="/">
                <h3> WILDVEST</h3>
                </Link>
                
                <div className='navbar-menu'>
                    <div className='columns'>
                        <div className='column'>
                            <NavLink to={`/category/Laptops`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Laptops</NavLink>
                        </div>
                        <div className='column'>
                            <NavLink to={`/category/Smartphones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Smartphones</NavLink>
                        </div>
                        <div className='column'>
                            <NavLink to={`/category/Televisores`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Televisores</NavLink>
                        </div>
                    </div>
                </div>

            <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;