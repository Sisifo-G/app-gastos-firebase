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
import { auth } from "./../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";
import Alerta from "./../elements/Alerta";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

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

    if (correo === "" || password === "" || password2 === "") {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Por favor ingrese valores para todos los campos",
      });
      return;
    }

    if (password !== password2) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: "error",
        mensaje: "Las contraseñas no coinciden",
      });
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(correo, password);
      history.push("/");
    } catch (error) {
      setEstadoAlerta(true);
      let mensaje;
      switch (error.code) {
        case "auth/invalid-password":
          mensaje = "La contraseña debe contener almenos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          mensaje = "Ya existe una cuenta con el correo proporcionado.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico proporcionado no es válido.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta";
          break;
      }
      setAlerta({ tipo: "error", mensaje: mensaje });
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
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        setEstadoAlerta={setEstadoAlerta}
      />
    </>
  );
};

export default RegistroUsuarios;
