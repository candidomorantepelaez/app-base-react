import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import registerServiceWorker from "registerServiceWorker";
import Bluebird from "bluebird";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import store from "core/store/store";
import history from "core/routes/history";
import { addLocale, language, messages } from "core/i18/index";
import Menu from "core/components/menus/menu-principal";
import AppRoutes from "core/routes/routes";
import AlertPage from "core/components/alerts/alert-page";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/esm/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "assets/css/index.css";

window.Promise = Bluebird;
Bluebird.config({ warnings: false});
window.addEventListener("unhandlerrejection", error => {
  error.preventDefault();
  if(process.env.NODE_ENV !== "production"){
    console.warn("Unhandler promise rejection warning.", error.detail);
  }
});

addLocale();

ReactDOM.render(
  <Provider store={ store }>
    <IntlProvider locale={language} messages={messages()[language]}>
      <Router history={history} >
        <div className="App container-fluid">
          <AlertPage />
          <Menu />
          <AppRoutes />
        </div>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
