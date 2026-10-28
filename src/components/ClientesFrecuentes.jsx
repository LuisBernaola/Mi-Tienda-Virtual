function ClientesFrecuentes({ clientes }) {

    const frecuentes = clientes.filter((cliente) => cliente.compras >= 5);

    return (
        <section id="clientes-frecuentes">
            <h2>Clientes frecuentes</h2>
            <div className="productos">
                {frecuentes.map((cliente) => (
                    <article className="producto" key={cliente.id}>
                        <h3>⭐ {cliente.nombre}</h3>
                        <p className="categoria">Total de compras: {cliente.compras}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ClientesFrecuentes;