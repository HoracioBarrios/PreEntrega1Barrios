const Item = ({id, name, img, prime, stock}) => {
    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <footer>
                    <button className="button"> ver detalle </button>
                </footer>
            </section>
        </article>
    )
}