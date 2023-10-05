import NavBar from './components/NavBar/NavBar';
import ItemListcontainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {


    return(
        <div className='App'>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListcontainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListcontainer/>}/>
                <Route path='/item/:itemId'element={<ItemListcontainer/>}/>
                <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
