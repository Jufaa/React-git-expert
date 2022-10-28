import React, { useState } from "react";
import { AgregarCategoria, GifCreate } from "./components";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Piece"]);
  const agregarCategoria = (nuevaCategoria) => {
    if (categorias.includes(nuevaCategoria)) return;
    setCategorias([nuevaCategoria, ...categorias]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AgregarCategoria onNewCategory={agregarCategoria} />

      {categorias.map((categoria) => (
        <GifCreate key={categoria} categoria={categoria} />
      ))}
    </>
  );
};
