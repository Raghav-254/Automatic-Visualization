import "./App.css";
import { Left } from "./components/Left";
import { Middle } from "./components/Middle";
import { Right } from "./components/Right";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Test } from "./components/Test.js";
import { useState } from "react";

function App() {
  //Query object
  let query = {
    spec: {
      data: { url: "data/cars.json" },
      mark: "?",
      encodings: [
        {
          channel: "?",
          field: "?",
          type: "?",
          bin: "?",
          aggregate: "?",
        },
        {
          channel: "?",
          field: "?",
          type: "?",
          bin: "?",
          aggregate: "?",
        },
      ],
    },
    groupBy: ["field", "aggregate", "bin", "timeUnit", "stack", "channel"],
    chooseBy: "effectiveness",
  };

  //Field Object
  let fields = [
    {
      sno: 1,
      field: "Name",
      type: "ordinal",
    },
    {
      sno: 2,
      field: "Origin",
      type: "ordinal",
    },
    {
      sno: 3,
      field: "Cylinders",
      type: "ordinal",
    },
    {
      sno: 4,
      field: "Year",
      type: "temporal",
    },
    {
      sno: 5,
      field: "Horsepower",
      type: "quantitative",
    },
    {
      sno: 6,
      field: "Miles_per_gallon",
      type: "quantitative",
    },
    {
      sno: 7,
      field: "Acceleration",
      type: "quantitative",
    },
    {
      sno: 8,
      field: "Displacement",
      type: "quantitative",
    },
  ];

  const [recommendations, update_recommendations] = useState([]);

  const handleClick = (result) => {
    update_recommendations(result.items);
    /*if (result.items.length >= 4) {
      for (let i = 0; i < 4; i++) {
        console.log(result.items[i].items[0]._spec);
      }
    } else {
      for (let i = 0; i < result.items.length; i++) {
        console.log(result.items[i].items[0]._spec);
      }
    }*/
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="row">
          <div className="column left">
            <Left fields={fields} query={query} />
          </div>
          <div className="column middle">
            <Middle query={query} handleClick={handleClick} />
          </div>
          <div className="column right">
            <Right query={query} />
            <Test recommendations={recommendations} />
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default App;
