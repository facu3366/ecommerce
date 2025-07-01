export function Carrito({ carrito, listaDeCompra }) {
  return ( 
    <div>
      <h2>Carrito de Compras</h2>
      <p>Total: ${carrito}</p>
      <ul>
        {listaDeCompra.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;


