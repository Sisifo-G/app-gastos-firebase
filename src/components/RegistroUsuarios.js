import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Boton from "../elements/Boton";
import { Header, Titulo, ContenedorHeader } from "./../elements/Header";
import {
  Formulario,
  Input,
  ContenedorBoton,
} from "./../elements/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "./../images/registro.svg";
import styled from "styled-components";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setCorreo(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobamos del lado del cliente que el correo sea válido
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      console.log("Correo inválido");
      return;
    }

    if (correo === "" || password === "" || password2 === "") {
      console.log("Por favor ingresar todos los valores");
      return;
    }

    if (password !== password2) {
      console.log("Las contraseñas no coinciden");
      return;
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to="/iniciar-sesion">Iniciar Sesión</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Repetir Contraseña"
          value={password2}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">
            Crear Cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default RegistroUsuarios;
