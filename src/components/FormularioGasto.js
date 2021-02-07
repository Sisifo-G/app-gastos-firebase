import React, { useState } from "react";
import Boton from "../elements/Boton";
import {
  ContenedorFiltros,
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton,
} from "./../elements/ElementosDeFormulario";
import { ReactComponent as IconoPlus } from "./../images/plus.svg";
import SelectCategorias from "./SelectCategorias";

const FormularioGasto = () => {
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCantidad, setInputCantidad] = useState("");
  const [categoria, setCategoria] = useState("hogar");

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      setInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  return (
    <Formulario>
      <ContenedorFiltros>
        <SelectCategorias categoria={categoria} setCategoria={setCategoria} />
        <p>DataPicker</p>
      </ContenedorFiltros>
      <div>
        <Input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={inputDescripcion}
          onChange={handleChange}
        />
        <InputGrande
          type="text"
          name="cantidad"
          placeholder="$0.00"
          value={inputCantidad}
          onChange={handleChange}
        />
      </div>
      <ContenedorBoton>
        <Boton as="button" primario conIcono type="submit">
          Agregar Gasto <IconoPlus />
        </Boton>
      </ContenedorBoton>
    </Formulario>
  );
};

export default FormularioGasto;
