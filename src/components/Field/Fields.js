import React from "react";
import { FieldCard } from "./FieldCard/FieldCard";
export const Fields = (props) => {
  return (
    <div>
      {props.fields.length === 0
        ? "No Fields to display"
        : props.fields.map((todo) => {
            //console.log(props.query);
            return <FieldCard todo={todo} query={props.query} key={todo.sno} />;
          })}
    </div>
  );
};
