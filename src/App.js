import { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import logo from "./imagenes/logo.png";

function App() {
  //Hook de react
  const [contador, setContador] = useState(0);

  const manejarClic = () => {
    setContador(contador + 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <h1>Contador de Clics</h1>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="contenedor-principal">
        <Contador cantidad={contador}></Contador>
        <Boton
          texto="Clic"
          isClickButton={true}
          manejarClic={manejarClic}
        ></Boton>
        <Boton
          texto="Reiniciar"
          isClickButton={false}
          manejarClic={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;

/*

03:52:00

*/
