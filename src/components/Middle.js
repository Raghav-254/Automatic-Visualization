import React from "react";
import Select from "react-select";
const cql = require("/Users/rmittal/Desktop/CompassQL/compassql");
const data = require("/Users/rmittal/Desktop/UI/my-app/src/example.json");

export const Middle = (props) => {
  let data1 = [
    {
      value: 1,
      label: "automatic",
    },
    {
      value: 2,
      label: "bar",
    },
    { value: 3, label: "line" },
    { value: 4, label: "area" },
    { value: 5, label: "point" },
    { value: 6, label: "tick" },
  ];
  const handleChange = (obj) => {
    props.query.spec.mark = obj.label;
  };
  const intialise = () => {
    props.query.spec.mark = "?";
    props.query.spec.encodings[0].channel = "?";
    props.query.spec.encodings[0].field = "?";
    props.query.spec.encodings[0].type = "?";
    props.query.spec.encodings[0].bin = "?";
    props.query.spec.encodings[0].aggregate = "?";
    props.query.spec.encodings[1].channel = "?";
    props.query.spec.encodings[1].field = "?";
    props.query.spec.encodings[1].type = "?";
    props.query.spec.encodings[1].bin = "?";
    props.query.spec.encodings[1].aggregate = "?";
  };
  const query_generator = () => {
    var schema = cql.schema.build(data);

    //This is the query for producing a variety of charts or i can say univariate summeries.
    console.log(props.query);
    var query = props.query;

    var output = cql.recommend(query, schema);
    var result = output.result;
    props.handleClick(result);
    // intialise();

    // console.log(intialise);
    //console.log(result.items.length);
  };
  return (
    <div>
      <div className="data">
        <h3>Middle Panel</h3>
        <br />
        <h6>Choose a Mark type:</h6>
        <Select options={data1} onChange={handleChange} />
        <br />
        <br />
        <button type="button" class="btn btn-primary">
          Tooltip
        </button>
        <br />
        <br />
        <button type="button" class="btn btn-primary" onClick={query_generator}>
          Visualize
        </button>
      </div>
    </div>
  );
};
