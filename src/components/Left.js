import React from "react";
import { Fields } from "./Field/Fields";
export const Left = (props) => {
  return (
    <div>
      <div className="data">
        <h3>Left Panel</h3>
        <br />
        <h4> Data </h4>
        <p> Cars </p>
        <button type="button" class="btn btn-danger">
          Change
        </button>
        <br />
        <br />
        <br />
        <h4> Fields </h4>

        <Fields fields={props.fields} query={props.query} />
      </div>
    </div>
  );
};
