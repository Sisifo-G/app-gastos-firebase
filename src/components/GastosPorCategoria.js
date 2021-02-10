import React from "react";
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/BtnRegresar";
import { Header, Titulo } from "./../elements/Header";
import BarraTotalGastado from "./BarraTotalGastado";

import useObtenerGastosMesPorCategoria from "./../hooks/useObtenerGastosMesPorCategoria";

const GastosPorCategoria = () => {
  const gastos = useObtenerGastosMesPorCategoria();
  console.log(gastos);
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
