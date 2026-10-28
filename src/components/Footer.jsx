function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <h3>Mi Tienda Virtual</h3>
      <p>LB - Todos los derechos reservados © {2026}</p>
    </footer>
  );
}

export default Footer;