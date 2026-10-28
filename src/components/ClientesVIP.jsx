function ClientesVIP({ clientes }) {

    const vip = clientes.filter((cliente) => cliente.compras >= 10);

    return (
        <section id="clientes-vip">
            <h2>Clientes VIP</h2>
            <div className="productos">
                {vip.map((cliente) => (
                    <article className="producto" key={cliente.id}>
                        <h3>👑 {cliente.nombre}</h3>
                        <p className="precio">¡{cliente.compras} compras!</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ClientesVIP;