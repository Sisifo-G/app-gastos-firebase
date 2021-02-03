import React from "react";
import { Helmet } from "react-helmet";
import Boton from "./elements/Boton";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones,
} from "./elements/Header";

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorías</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}

export default App;
