import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Homepage from "./Homepage";
import Login from "./Login/Login";

export default function Routes(): JSX.Element {
  return (
    <Fragment>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
    </Fragment>
  );
}
