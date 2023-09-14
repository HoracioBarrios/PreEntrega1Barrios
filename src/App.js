import NavBar from './components/NavBar/NavBar';
import ItemListcontainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";

function App() {


    return(
        <div className='App'>
            <NavBar/>
            <ItemListcontainer greeting={"Bienvenido"}/>
        </div>
    )
}

export default App;
