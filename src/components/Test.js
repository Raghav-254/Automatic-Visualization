import React from "react";
import { ResultCard } from "./Result/ResultCard.js";

export const Test = ({ recommendations }) => {
  if (recommendations.length <= 4) {
    return (
      <div>
        <br />
        <br />
        <h2>Recommendations</h2>
        <br />

        {recommendations.length === 0
          ? "No Recommendations to display"
          : recommendations.map((result) => {
              //console.log(props.query);
              return <ResultCard result={result.items[0]} />;
            })}
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <br />
        <h2>Recommendations</h2>
        <br />

        {recommendations.length === 0
          ? "No Recommendations to display"
          : recommendations.slice(0, 4).map((result) => {
              //console.log(props.query);
              return <ResultCard result={result.items[0]} />;
            })}
      </div>
    );
  }
};
