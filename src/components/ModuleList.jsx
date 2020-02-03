import React, { Component } from "react";

const ModuleList = (props) => {
  return (
    <div className="row">
      <div className="col-3">
        <div className="list-group">
          <div className="row list-group-item list-group-item-action">
<div className="col-9">Module 1 - {props.moduleTitle}</div>
            <div className="col-3">
              <i className="fa fa-2x fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleList;
