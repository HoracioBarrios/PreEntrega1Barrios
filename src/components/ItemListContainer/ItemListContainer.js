import {useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";



const ItemListcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    //log para verificar la recepcion de category
    console.log("La categoria que llego aca es:", categoryId)

    useEffect(() =>{
        const collectionRef = collection(db, 'products');

        const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef;

        getDocs(q)
        .then((response)=>{

            setProducts(
                response.docs.map((doc)=>{
                    return {...doc.data(), id: doc.id}
                })
            )
        })
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