function ProductosEconomicos({ productos }) {

    const economicos = productos.filter(
        (producto) => producto.precio < 200
    );

    return (
        <section>

            <h2>Productos económicos</h2>

            <div className="productos">

                {economicos.map((producto) => (

                    <article
                        className="producto"
                        key={producto.id}
                    >

                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                        />

                        <h3>
                            {producto.nombre}
                        </h3>

                        <p className="categoria">
                            {producto.categoria}
                        </p>

                        <p className="precio">
                            S/ {producto.precio.toFixed(2)}
                        </p>

                        <button>
                            Ver producto
                        </button>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default ProductosEconomicos;
