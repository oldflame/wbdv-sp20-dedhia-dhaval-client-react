import React, { Component } from "react";

const HeadingPreviewComponent = props => {
    console.log("in preview",props.widget)
  return (
    <div>
      {props.widget.size == "1" && <h1>{props.widget.text}</h1>}
      {props.widget.size == "2" && <h2>{props.widget.text}</h2>}
      {props.widget.size == "3" && <h3>{props.widget.text}</h3>}
      {props.widget.size == "4" && <h4>{props.widget.text}</h4>}
    </div>
  );
};

export default HeadingPreviewComponent;
