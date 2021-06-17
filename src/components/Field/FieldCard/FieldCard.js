import React from "react";
import { ItemTypes } from "/Users/rmittal/Desktop/UI/my-app/src/utils/index.js";
import { useDrag } from "react-dnd";
import { useState } from "react";

export const FieldCard = (props) => {
  //query-setup code

  //const [field1, setfield1] = useState(false);
  //const [field2, setfield2] = useState(false);
  const query_generator = () => {
    if (props.query.spec.encodings[0].field === "?") {
      props.query.spec.encodings[0].field = props.todo.field;
      props.query.spec.encodings[0].type = props.todo.type;
    } else {
      props.query.spec.encodings[1].field = props.todo.field;
      props.query.spec.encodings[1].type = props.todo.type;
    }
  };

  //Dragging code
  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: props.todo,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  //return function code
  return (
    <div
      className="card text-white bg-success mb-1 fieldCard"
      onClick={query_generator}
      ref={drag}
      opacity={isDragging ? "0.5" : "1"}
    >
      <div className="card-body">{props.todo.field}</div>
    </div>
  );
};
