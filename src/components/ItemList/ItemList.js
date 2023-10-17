import Item from '../Item/Item';

const ItemList = ({products})=>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                {products.map(prod => <Item key={prod.id}{...prod}/>)}
                </div>
            </div>
            
        </div>
    )
}

export default ItemList;