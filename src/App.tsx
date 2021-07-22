import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { userStore } from "./store";

import Layout from "./components/Layout/Layout";

import "./App.css";

function App(): JSX.Element {
  return (
    <Provider store={userStore}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
