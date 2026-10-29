function ClientesFrecuentes({ clientes }) {
    const frecuentes = clientes.filter((cliente) => cliente.compras >= 5);

    return (
        <section className="seccion-clientes-frecuentes" id="clientes-frecuentes">
            <div className="clientes-contenedor">
                <div className="encabezado-seccion">
                    <span className="icono-seccion">⭐</span>
                    <h2>Clientes Frecuentes</h2>
                </div>

                <div className="clientes-grid">
                    {frecuentes.map((cliente) => (
                        <article className="cliente-card" key={cliente.id}>
                            <div className="avatar-cliente">
                                <span>{cliente.nombre.charAt(0)}</span>
                            </div>
                            <div className="info-cliente">
                                <h3>{cliente.nombre}</h3>
                                <p className="compras-badge">
                                    🛒 <strong>{cliente.compras}</strong> compras realizadas
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientesFrecuentes;