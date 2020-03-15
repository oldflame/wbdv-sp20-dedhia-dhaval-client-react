import React, { Component } from "react";

const ListPreviewComponent = props => {
  return (
    <div>
      {props.text!== "" && props.listType === "UNORDERED_LIST" && (
        <ul>
          {props.text.trim().split("\n").map(item => (
            <li>{item}</li>
          ))}
        </ul>
      )}
      {props.text!== "" && props.listType === "ORDERED_LIST" && (
        <ol>
          {props.text.trim().split("\n").map(item => (
            <li>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default ListPreviewComponent;
