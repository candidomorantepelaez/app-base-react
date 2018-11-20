import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "core/pages/login/login-page";
import module from "core/module/index";
import HomePage from "core/pages/home/home-page";

const rutas = module.getRoutes().map((ruta, key) => <Route path={ruta.path} component={ruta.component} exact={ruta.exact} key={key} />);

const AppRoutes = () => (
    <Switch>
      {rutas}
      <Route path="/home" component={ HomePage } exact={ true } />
      <Route path="/login" component={ LoginPage } exact={ true } />
      <Route component={ HomePage } />
    </Switch>
);

export default AppRoutes;
