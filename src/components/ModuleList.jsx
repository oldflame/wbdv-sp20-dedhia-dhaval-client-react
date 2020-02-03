import React, { Component } from "react";

const ModuleList = props => {
  return (
    <div className="row">
      <div className="col-12 mb-2">
        <div className="list-group">
          <div className="list-group-item list-group-item-action">
            <div className="row pointer">
              <div className="col-10">Module {props.moduleTitle}</div>
              <div className="col-2">
                <i className="fa fa-2x fa-times"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleList;
