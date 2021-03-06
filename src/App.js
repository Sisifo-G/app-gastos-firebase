import React from "react";
import { Helmet } from "react-helmet";
import BarraTotalGastado from "./components/BarraTotalGastado";
import FormularioGasto from "./components/FormularioGasto";
import Boton from "./elements/Boton";
import BotonCerrarSesion from "./elements/BotonCerrarSesion";
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
            <BotonCerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
      <FormularioGasto />
      <BarraTotalGastado />
    </>
  );
}

export default App;
