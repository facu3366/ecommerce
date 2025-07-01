import { useState } from 'react';
import './App.css';

function Header({ nombre }) {
  return (
    <header>
      <h1>Bienvenido, {nombre ? nombre : 'invitado'}!</h1>
    </header>
  );
}

function Carrito({ carrito, listaDeCompra }) {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Total: ${carrito.toFixed(2)}</p>
      <ul>
        {listaDeCompra.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [nombre, setNombre] = useState('');
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [listaDeCompra, setListaDeCompra] = useState([]);
  const [carrito, setCarrito] = useState(0);

  const manejarCambioNombre = (e) => {
    setNombre(e.target.value);
  };

  const agregarAlCarrito = () => {
    if (producto && precio && !isNaN(precio)) {
      setListaDeCompra([...listaDeCompra, `${producto} ($${parseFloat(precio).toFixed(2)})`]);
      setCarrito(carrito + parseFloat(precio));
      setProducto('');
      setPrecio('');
    }
  };

  return (
    <div className="App">
      <Header nombre={nombre} />
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={manejarCambioNombre}
      />
      <hr />
      <input
        type="text"
        placeholder="Nombre del producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      <Carrito carrito={carrito} listaDeCompra={listaDeCompra} />
    </div>
  );
}

export default App;
