function Producto({ productos, onVerProducto }) {
  return (
    <section className="productos" id="productos">
      <h2>Productos</h2>

      {productos.length === 0 ? (
        <p className="no-resultados">
          No se encontraron productos con los criterios seleccionados.
        </p>
      ) : (
        <div className="productos-grid">
          {productos.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p className="categoria">
                Categoría: {producto.categoria}
              </p>
              <p className="precio">
                S/ {producto.precio.toFixed(2)}
              </p>
              {producto.descuento && (
                <p className="descuento">
                  {producto.descuento}% de descuento
                </p>
              )}
              {producto.stock > 0 ? (
                <p className="disponible">
                  Disponible: {producto.stock} unidades
                </p>
              ) : (
                <p className="agotado">
                  Agotado
                </p>
              )}
              <button onClick={() => onVerProducto(producto)}>Ver producto</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Producto;