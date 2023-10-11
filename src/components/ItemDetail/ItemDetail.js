import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className = "card">
            <header className="card-header">
                <h2 className="card-header-title">
                    {name}
                </h2>
            </header>
            <picture className="card-image">
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripsion: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer className="card-footer">
                <ItemCount initial={1} stock={stock} onAdd={ (quantity)=> {console.log("agrega", quantity)} }/>
            </footer>
        </article>
    )
}

export default ItemDetail;