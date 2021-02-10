import React from "react";
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/BtnRegresar";
import { Header, Titulo } from "./../elements/Header";
import BarraTotalGastado from "./BarraTotalGastado";

import useObtenerGastosDelMes from "./../hooks/useObtenerGastosDelMes";

const GastosPorCategoria = () => {
  useObtenerGastosDelMes();
  return (
    <>
      <Helmet>
        <title>Gastos por Categoría</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Gastos por Categoría</Titulo>
      </Header>
      <BarraTotalGastado />
    </>
  );
};

export default GastosPorCategoria;
