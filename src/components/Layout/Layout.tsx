import React, { Fragment } from "react";

import Routes from "../Routes";
import Header from "./Header";

export default function Layout(): JSX.Element {
  return (
    <Fragment>
      <div className="flex items-center px-4 py-6 h-10 bg-gray-600">
        <Header />
      </div>

      <div className="container mx-auto h-full">
        <Routes />
      </div>
    </Fragment>
  );
}
