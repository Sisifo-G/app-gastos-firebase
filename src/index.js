import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import Contenedor from "./elements/Contenedor";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditarGasto from "./components/EditarGasto";
import GastosPorCategoria from "./components/GastosPorCategoria";
import InicioSesion from "./components/InicioSesion";
import ListaGastos from "./components/ListaGastos";
import RegistroUsuarios from "./components/RegistroUsuarios";
import { Helmet } from "react-helmet";
import favicon from "./images/logo.png";
import Fondo from "./elements/Fondo";
import { AuthProvider } from "./contexts/AuthContext";
import RutaPrivada from "./components/RutaPrivada";

WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ["Work Sans: 400, 500, 700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path="/iniciar-sesion" component={InicioSesion} />
              <Route path="/crear-cuenta" component={RegistroUsuarios} />
              <RutaPrivada path="/categorias">
                <GastosPorCategoria />
              </RutaPrivada>
              <RutaPrivada path="/lista">
                <ListaGastos />
              </RutaPrivada>
              <RutaPrivada path="/editar/:id">
                <EditarGasto />
              </RutaPrivada>
              <RutaPrivada path="/">
                <App />
              </RutaPrivada>
            </Switch>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>
      <Fondo />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
