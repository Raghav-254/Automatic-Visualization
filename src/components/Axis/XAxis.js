import React from "react";
import { useDrop } from "react-dnd";
export const XAxis = ({ query }) => {
  let x;
  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => {
      {
        query.spec.encodings[0].channel = "x";
        query.spec.encodings[0].field = item.field;
        query.spec.encodings[0].type = item.type;
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div className="card" ref={drop}>
      <div className="card-body">X</div>
    </div>
  );
};
