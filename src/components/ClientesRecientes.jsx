function ClientesRecientes({ clientes }) {
    const recientes = clientes.filter(cliente => cliente.fechaRegistro >= "2026-09-01");

    return (
        <section className="seccion-clientes-recientes" id="clientes-recientes">
            <div className="clientes-contenedor">
                <div className="encabezado-seccion">
                    <span className="icono-seccion">🆕</span>
                    <h2>Clientes Recientes</h2>
                </div>

                <div className="clientes-grid">
                    {recientes.map((cliente) => (
                        <article className="cliente-card" key={cliente.id}>
                            <div className="avatar-cliente avatar-reciente">
                                <span>{cliente.nombre.charAt(0)}</span>
                            </div>
                            <div className="info-cliente">
                                <h3>{cliente.nombre}</h3>
                                <p className="compras-badge">
                                    📅 Registrado el: <strong>{cliente.fechaRegistro}</strong>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientesRecientes;