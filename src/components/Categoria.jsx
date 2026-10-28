const categorias = [
  "Tecnología",
  "Accesorios",
  "Audio",
  "Computación"
];

function Categoria() {
  return (
    <section className="categorias" id="categorias">
      <h2>Categorías</h2>

      <div className="categorias-grid">
        {categorias.map((categoria, index) => (
          <div className="categoria-card" key={index}>
            <h3>{categoria}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categoria;