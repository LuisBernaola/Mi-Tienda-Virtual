function Buscador({ busqueda, setBusqueda, categoria, setCategoria, precioMaximo, setPrecioMaximo }) {
    return (
        <div className="contenedor-buscador">
            <div className="grupo-filtro">
                <input
                    type="text"
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                    placeholder="Buscar producto..."
                    className="input-busqueda"
                />
                {busqueda && (
                    <button className="boton-limpiar" onClick={() => setBusqueda("")}>
                        Limpiar
                    </button>
                )}
            </div>

            <div className="grupo-selects">
                <div className="filtro-item">
                    <label>Categoría: </label>
                    <select value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
                        <option value="Todas">Todas las categorías</option>
                        <option value="Tecnología">Tecnología</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Audio">Audio</option>
                    </select>
                </div>

                <div className="filtro-item">
                    <label>Precio máximo: </label>
                    <select value={precioMaximo} onChange={(evento) => setPrecioMaximo(evento.target.value)}>
                        <option value="Todos">Todos los precios</option>
                        <option value="150">Hasta S/ 150</option>
                        <option value="1000">Hasta S/ 1000</option>
                        <option value="3000">Hasta S/ 3000</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Buscador;