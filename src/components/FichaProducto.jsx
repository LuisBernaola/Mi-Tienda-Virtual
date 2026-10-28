import { useState } from "react";

function FichaProducto({ producto, onCerrar }) {
    const [mostrarDesc, setMostrarDesc] = useState(false);
    const [mostrarCaract, setMostrarCaract] = useState(false);

    return (
        <div className="fondo-ficha" onClick={onCerrar}>
            <div className="ficha-producto" onClick={(evento) => evento.stopPropagation()}>
                <button className="cerrar" onClick={onCerrar}> × </button>
                <div className="imagen-ficha">
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="informacion-ficha">
                    <h2>{producto.nombre}</h2>
                    <p className="precio-ficha">
                        S/ {producto.precio.toFixed(2)}
                    </p>
                    <p>{producto.categoria}</p>
                    <p>
                        {producto.stock > 0
                            ? `Disponible: ${producto.stock} unidades`
                            : "Producto agotado"}
                    </p>

                    <button onClick={() => setMostrarDesc(!mostrarDesc)}>
                        {mostrarDesc ? "Ocultar descripción" : "Ver descripción"}
                    </button>
                    {mostrarDesc && (
                        <p>{producto.descripcion}</p>
                    )}

                    <button onClick={() => setMostrarCaract(!mostrarCaract)}>
                        {mostrarCaract ? "Ocultar características" : "Ver características"}
                    </button>
                    {mostrarCaract && (
                        <ul>
                            {producto.caracteristicas.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FichaProducto;