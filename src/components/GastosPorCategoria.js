import React from "react";
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/BtnRegresar";
import { Header, Titulo } from "./../elements/Header";
import BarraTotalGastado from "./BarraTotalGastado";
import IconoCategoria from "./../elements/IconoCategoria";
import convertirAMoneda from "./../funciones/convertirAMoneda";

import useObtenerGastosMesPorCategoria from "./../hooks/useObtenerGastosMesPorCategoria";
import {
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Valor,
} from "./../elements/ElementosDeLista";

const GastosPorCategoria = () => {
  const gastosPorCategoria = useObtenerGastosMesPorCategoria();

  return (
    <>
      <Helmet>
        <title>Gastos por Categoría</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Gastos por Categoría</Titulo>
      </Header>
      <ListaDeCategorias>
        {gastosPorCategoria.map((elemento, index) => {
          return (
            <ElementoListaCategorias key={index}>
              <Categoria>
                <IconoCategoria nombre={elemento.categoria} />
                {elemento.categoria}
              </Categoria>
              <Valor>{convertirAMoneda(elemento.cantidad)}</Valor>
            </ElementoListaCategorias>
          );
        })}
      </ListaDeCategorias>

      <BarraTotalGastado />
    </>
  );
};

export default GastosPorCategoria;
