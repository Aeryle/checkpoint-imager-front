import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import useUserSelector from "../hooks/user/useUserSelector";

export default function Homepage(): JSX.Element {
  const id = useUserSelector("id");

  console.log(id);

  return (
    <Fragment>
      <p>{0}</p>
    </Fragment>
  );
}
