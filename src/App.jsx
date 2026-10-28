import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Categoria from "./components/Categoria";
import Producto from "./components/Producto";
import Footer from "./components/Footer";
import ProductosEconomicos from "./components/ProductosEconomicos";
import ClientesRecientes from "./components/ClientesRecientes";
import ClientesFrecuentes from "./components/ClientesFrecuentes";
import ClientesVIP from "./components/ClientesVIP";
import FichaProducto from "./components/FichaProducto";
import Buscador from "./components/Buscador";
import "./App.css";

function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [precioMaximo, setPrecioMaximo] = useState("Todos");

  const productos = [
    { 
      id: 1, 
      nombre: "Laptop", 
      precio: 2500, 
      categoria: "Tecnología", 
      imagen: "/productos/lapto.jpg", 
      stock: 5, 
      descuento: 10,
      descripcion: "Laptop de alto rendimiento ideal para desarrollo web y diseño.",
      caracteristicas: ["Memoria RAM: 16GB", "Almacenamiento: 512GB SSD", "Procesador: Core i7"]
    },
    { 
      id: 2, 
      nombre: "Mouse", 
      precio: 80, 
      categoria: "Accesorios", 
      imagen: "/productos/mouse.jpg", 
      stock: 15,
      descripcion: "Mouse para el trabajo diario.",
      caracteristicas: ["Conexión: USB", "Tipo: óptico", "Diseño: ergonómico"]
    },
    { 
      id: 3, 
      nombre: "Teclado", 
      precio: 150, 
      categoria: "Accesorios", 
      imagen: "/productos/teclado.jpg", 
      stock: 8, 
      descuento: 15,
      descripcion: "Teclado mecánico para escritura rápida y cómoda.",
      caracteristicas: ["Tipo: Mecánico", "Conexión: Bluetooth/USB", "Retroiluminación: RGB"]
    },
    { 
      id: 4, 
      nombre: "Monitor", 
      precio: 900, 
      categoria: "Tecnología", 
      imagen: "/productos/monitor.jpg", 
      stock: 0,
      descripcion: "Monitor de alta resolución para colores nítidos.",
      caracteristicas: ["Tamaño: 27 pulgadas", "Resolución: 4K", "Tasa de refresco: 144Hz"]
    },
    { 
      id: 5, 
      nombre: "Audífonos", 
      precio: 120, 
      categoria: "Audio", 
      imagen: "/productos/audifonos.jpg", 
      stock: 10, 
      descuento: 5,
      descripcion: "Audífonos con cancelación de ruido.",
      caracteristicas: ["Conexión: Inalámbrica", "Batería: 20 horas", "Micrófono: Integrado"]
    }
  ];

  const clientes = [
    { id: 1, nombre: "Juan Pérez", compras: 8, fechaRegistro: "2026-09-10" },
    { id: 2, nombre: "María López", compras: 3, fechaRegistro: "2026-10-01" },
    { id: 3, nombre: "Carlos Torres", compras: 12, fechaRegistro: "2026-08-15" },
    { id: 4, nombre: "Ana García", compras: 2, fechaRegistro: "2026-10-05" },
    { id: 5, nombre: "Pedro Sánchez", compras: 10, fechaRegistro: "2026-07-20" }
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    const coincidePrecio = precioMaximo === "Todos" || producto.precio <= Number(precioMaximo);

    return coincideNombre && coincideCategoria && coincidePrecio;
  });

  return (
    <div>
      <Header />
      <Menu />
      
      <main className="contenedor">
        <Categoria />

        <Buscador 
          busqueda={busqueda} 
          setBusqueda={setBusqueda}
          categoria={categoria}
          setCategoria={setCategoria}
          precioMaximo={precioMaximo}
          setPrecioMaximo={setPrecioMaximo}
        />
        
        <Producto productos={productosFiltrados} onVerProducto={setProductoSeleccionado} />
        
        <ProductosEconomicos productos={productos} />
        
        <ClientesRecientes clientes={clientes} />
        <ClientesFrecuentes clientes={clientes} />
        <ClientesVIP clientes={clientes} />
      </main>

      {productoSeleccionado && (
        <FichaProducto
          producto={productoSeleccionado}
          onCerrar={() => setProductoSeleccionado(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;