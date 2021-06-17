import React from "react";
import { XAxis } from "./Axis/XAxis";
import { YAxis } from "./Axis/YAxis";
export const Right = ({ query }) => {
  return (
    <>
      <h3>Right Panel</h3>
      <br />
      <XAxis query={query} />
      <YAxis query={query} />
    </>
  );
};
