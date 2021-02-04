import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Boton from "../elements/Boton";
import { Header, Titulo, ContenedorHeader } from "./../elements/Header";
import {
  Formulario,
  Input,
  ContenedorBoton,
} from "./../elements/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "./../images/login.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth } from "./../firebase/firebaseConfig";
import Alerta from "./../elements/Alerta";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setCorreo(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});

    // Comprobamos del lado del cliente que el correo sea válido
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor ingrese un correo válido",
      });
      return;
    }

    if (correo === "" || password === "") {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor ingrese valores para todos los campos",
      });
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(correo, password);
      history.push("/");
    } catch (error) {
      setEstadoAlerta(true);
      let mensaje;
      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "Contraseña incorrecta.";
          break;
        case "auth/user-not-found":
          mensaje = "No existe ninguna cuenta con el correo ingresado.";
          break;
        default:
          mensaje = "Hubo un error al intentar acceder";
          break;
      }
      setAlerta({ tipo: "error", mensaje: mensaje });
    }
  };

  return (
    <>
      <Helmet>
        <title>Inicio de Sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Inicio de Sesión</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
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

        <ContenedorBoton>
          <Boton as="button" primario type="submit">
            Iniciar Sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        setEstadoAlerta={setEstadoAlerta}
      />
    </>
  );
};

export default InicioSesion;
