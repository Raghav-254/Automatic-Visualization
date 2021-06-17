import React from "react";

export const ResultCard = ({ result }) => {
  return (
    <div className="card  mb-1">
      <div className="card-body">Mark type: {result._spec.mark}</div>
      <div className="card-body">
        Field on X axis: {result._spec.encodings[0].field}
      </div>
      <div className="card-body">
        Field on Y axis: {result._spec.encodings[1].field}
      </div>
    </div>
  );
};
