/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import MainPageLayout from "layouts/MainPage/MainPage.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";


import 'assets/css/custom.css'



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <HashRouter>
        <Switch>
          <Route path="*" render={(props) => <MainPageLayout {...props} />} />
          {/* <Route path="/rtl" render={(props) => <RTLLayout {...props} />} /> */}
          {/* <Redirect from="/" to="/" /> */}
        </Switch>
      </HashRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
