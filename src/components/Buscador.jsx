function Buscador({ busqueda, setBusqueda, categoria, setCategoria, precioMaximo, setPrecioMaximo }) {
    return (
        <div className="contenedor-buscador">
            <h3 className="titulo-buscador">Filtrar Productos</h3>
            
            <div className="grupo-filtro-principal">
                <div className="caja-input">
                    <span className="icono-buscar"></span>
                    <input
                        id="busqueda"
                        type="text"
                        value={busqueda}
                        onChange={(evento) => setBusqueda(evento.target.value)}
                        placeholder="Buscar por nombre (ej. Laptop, Mouse)..."
                        className="input-busqueda"
                    />
                    {busqueda && (
                        <button className="boton-limpiar" onClick={() => setBusqueda("")} title="Limpiar búsqueda">
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <div className="grupo-selects">
                <div className="filtro-item">
                    <label htmlFor="categoria">Categoría</label>
                    <div className="caja-select">
                        <select id="categoria" value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
                            <option value="Todas">Todas las categorías</option>
                            <option value="Tecnología">Tecnología</option>
                            <option value="Accesorios">Accesorios</option>
                            <option value="Audio">Audio</option>
                        </select>
                    </div>
                </div>

                <div className="filtro-item">
                    <label htmlFor="precioMaximo">Precio Máximo</label>
                    <div className="caja-select">
                        <select id="precioMaximo" value={precioMaximo} onChange={(evento) => setPrecioMaximo(evento.target.value)}>
                            <option value="Todos">Todos los precios</option>
                            <option value="200">Menos de S/ 200</option>
                            <option value="500">Menos de S/ 500</option>
                            <option value="1000">Menos de S/ 1000</option>
                            <option value="3000">Menos de S/ 3000</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buscador;