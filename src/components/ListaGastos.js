import React from "react";
import { Helmet } from "react-helmet";
import BtnRegresar from "../elements/BtnRegresar";
import { Header, Titulo } from "./../elements/Header";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "./../hooks/useObtenerGastos";
import {
  Lista,
  ElementoLista,
  Categoria,
  Descripcion,
  Valor,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
} from "./../elements/ElementosDeLista";
import IconoCategoria from "./../elements/IconoCategoria";
import convertirAMoneda from "./../funciones/convertirAMoneda";
import { ReactComponent as IconoEditar } from "./../images/editar.svg";
import { ReactComponent as IconoBorrar } from "./../images/borrar.svg";
import { Link } from "react-router-dom";
import Boton from "./../elements/Boton";

const ListaGastos = () => {
  const [gastos] = useObtenerGastos();

  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Lista de Gastos</Titulo>
      </Header>
      <Lista>
        {gastos.map((gasto) => {
          return (
            <ElementoLista key={gasto.id}>
              <Categoria>
                <IconoCategoria nombre={gasto.categoria} />
                {gasto.categoria}
              </Categoria>
              <Descripcion>{gasto.descripcion}</Descripcion>
              <Valor>{convertirAMoneda(gasto.cantidad)}</Valor>
              <ContenedorBotones>
                <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                  <IconoEditar />
                </BotonAccion>
                <BotonAccion>
                  <IconoBorrar />
                </BotonAccion>
              </ContenedorBotones>
            </ElementoLista>
          );
        })}
        <ContenedorBotonCentral>
          <BotonCargarMas>Cargar Más</BotonCargarMas>
        </ContenedorBotonCentral>
        {gastos.length === 0 && (
          <ContenedorSubtitulo>
            <Subtitulo>No hay gastos por mostrar</Subtitulo>
            <Boton as={Link} to="/">
              Agregar Gasto
            </Boton>
          </ContenedorSubtitulo>
        )}
      </Lista>
      <BarraTotalGastado />
    </>
  );
};

export default ListaGastos;
