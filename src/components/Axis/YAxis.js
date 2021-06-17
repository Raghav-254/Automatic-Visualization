import React from "react";
import { useDrop } from "react-dnd";

export const YAxis = ({ query }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => {
      {
        query.spec.encodings[1].channel = "y";
        query.spec.encodings[1].field = item.field;
        query.spec.encodings[1].type = item.type;
      }
    },

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div className="card" ref={drop}>
      <div className="card-body">Y</div>
    </div>
  );
};
