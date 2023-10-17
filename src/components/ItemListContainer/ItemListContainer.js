import {useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
//import './ItemListContainer.css'

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
        <div className="container">
            <div className="row">
                <div className="col-4">
                <ItemList products={products} />
                </div>
            </div>
        </div>

    );
}
export default ItemListcontainer;