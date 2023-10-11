import {useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    console.log("La categoria que llego aca es:", categoryId)

    useEffect(()=>{

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            });
    }, [categoryId])   
    
    return (  
        <div>
            <h1 className="title is-1">
                {greeting}
            </h1>
            <ItemList products={products}/>
        </div>

    );
}
export default ItemListcontainer;