function ClientesRecientes({ clientes }) {
    
    const recientes = clientes.filter(cliente => cliente.fechaRegistro >= "2026-09-01");

    return (
        <section id="clientes-recientes">
            <h2>Clientes recientes</h2>
            <div className="productos">
                {recientes.map((cliente) => (
                    <article className="producto" key={cliente.id}>
                        <h3>👤 {cliente.nombre}</h3>
                        <p className="categoria">Registrado el: {cliente.fechaRegistro}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ClientesRecientes;