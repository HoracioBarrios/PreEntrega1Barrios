import NavBar from './components/NavBar/NavBar';
import ItemListcontainer from './components/ItemListContainer/ItemListContainer';
//import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
//***********************IMPORTAR CHECKOUT*******************************************

//import { db } from './service/firebase/firebaseConfig';
//import { collection, getDocs } from 'firebase/firestore';


function App() {
    return(
        <div className='App'>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListcontainer greeting={'Todos los productos'}/>}/>
                        <Route path='/category/:categoryId' element={<ItemListcontainer greeting={'Productos por categoria'}/>}/>
                        <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;
