function ClientesVIP({ clientes }) {
    const vip = clientes.filter((cliente) => cliente.compras >= 10);

    return (
        <section className="seccion-clientes-vip" id="clientes-vip">
            <div className="clientes-contenedor contenedor-vip">
                <div className="encabezado-seccion">
                    <span className="icono-seccion">👑</span>
                    <h2>Clientes VIP</h2>
                </div>

                <div className="clientes-grid">
                    {vip.map((cliente) => (
                        <article className="cliente-card tarjeta-vip" key={cliente.id}>
                            <div className="avatar-cliente avatar-vip">
                                <span>{cliente.nombre.charAt(0)}</span>
                            </div>
                            <div className="info-cliente">
                                <h3>{cliente.nombre}</h3>
                                <p className="compras-badge badge-vip">
                                    🏆 <strong>{cliente.compras} compras</strong>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientesVIP;