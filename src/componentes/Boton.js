import React from "react";
import "../css/boton.css";

export default function Boton({ texto, isClickButton, manejarClic }) {
  return (
    <button
      className={isClickButton ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}
