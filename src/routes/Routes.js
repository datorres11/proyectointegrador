import React from 'react'
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Login from '../pages/Login'; 
import PaginaPrincipal from '../pages/PaginaPrincipal';
import Temperatura from '../pages/Temperatura';
import Ubicacion from '../pages/Ubicacion';
import Humedad from '../pages/Humedad';
import Perfil from '../pages/Perfil';
import RegistrarUsuario from '../pages/RegistrarUsuario';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/principal" component={PaginaPrincipal}/>
        <Route exact path="/temperatura" component={Temperatura}/>
        <Route exact path="/humedad" component={Humedad}/>
        <Route exact path="/ubicacion" component={Ubicacion}/>
        <Route exact path="/perfil" component={Perfil}/>
        <Route exact path="/registrar" component={RegistrarUsuario}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
