import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elements/Contenedor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditarGasto from './components/EditarGasto';
import GastosPorCategoria from './components/GastosPorCategoria';
import InicioSesion from './components/InicioSesion';
import ListaGastos from './components/ListaGastos';
import RegistroUsuarios from './components/RegistroUsuarios';


WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans: 400, 500, 700', 'sans-serif']
  }
});

const Index = () => {
  return ( 
    <BrowserRouter>
      <Contenedor>
        <Switch>
          <Route path="/iniciar-sesion" component={InicioSesion} />
          <Route path="/crear-cuenta" component={RegistroUsuarios} />
          <Route path="/categorias" component={GastosPorCategoria} />
          <Route path="/lista" component={ListaGastos} />
          <Route path="/editar/:id" component={EditarGasto} />
          <Route path="/" component={App} />
        </Switch>
 
      </Contenedor>
    </BrowserRouter>
   );
}


ReactDOM.render(<Index />, document.getElementById('root'));

