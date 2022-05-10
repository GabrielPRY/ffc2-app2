import React from "react";
import "../css/contador.css";

export default function Contador({ cantidad }) {
  return <div className="contador">{cantidad}</div>;
}
