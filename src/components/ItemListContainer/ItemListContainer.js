import {useState, useEffect } from "react";
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListcontainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then(reponse => {
                setProducts(reponse)
            })
            .catch(error => {
                console.error(error)
            });
    }, []

    )   
    
    return (  
        <div>
            <h1 className="title is-1">
                {greeting}
            </h1>
        </div>

    );
}
export default ItemListcontainer;