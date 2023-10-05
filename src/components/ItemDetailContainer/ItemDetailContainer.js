import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const[product, setProduct] = useState(null)

    useEffect(()=>{
        getProductsById('1')
            .then(reponse => {
                setProduct(reponse)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [])


return (
    <div>
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer;