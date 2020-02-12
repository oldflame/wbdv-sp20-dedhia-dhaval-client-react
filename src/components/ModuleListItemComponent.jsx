import React, { Component } from "react";
import moduleService, { findModuleForCourse } from "../services/ModuleService";
import { connect } from "react-redux";


class ModuleListItemComponent extends Component {
  state = {
    editEnabled: false,
    newTitle: ""
  };

  handleInputChange = event => {
    this.setState({ newTitle: event.target.value });
  };

  render() {
    return (
      <a
        href="#"
        className="list-group-item list-group-item-action my-2 round-btn wbdv-module-list"
      >
        {!this.state.editEnabled && (
          <div className="row">
            <div className="col-9 wbdv-module-item wbdv-module-item-title">
              {this.props.module.title}
            </div>
            <div className="col-3">
              <i
                className="fa fa-2x fa-pencil mx-1"
                onClick={() => this.setState({ editEnabled: true })}
              ></i>
              <i
                className="fa fa-2x fa-trash wbdv-module-item-delete-btn mx-1"
                onClick={() =>
                  this.props.deleteModuleForCourse(this.props.module._id)
                }
              ></i>
            </div>
          </div>
        )}

        {this.state.editEnabled && (
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                placeholder="Module Title"
                value={this.state.newTitle}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-3">
              <i className="fa fa-2x fa-check mx-1"></i>
              <i
                className="fa fa-2x fa-times mx-1"
                onClick={() => this.setState({ editEnabled: false })}
              ></i>
            </div>
          </div>
        )}
      </a>
    );
  }
}
const dispatchToPropertyMapper = dispatch => {
  return {
    deleteModuleForCourse: moduleId => {
      moduleService.deleteModule(moduleId).then(
        dispatch({
          type: "DELETE_MODULE_FOR_COURSE",
          moduleId: moduleId
        })
      )
    }
  };
};

export default connect(null, dispatchToPropertyMapper)(ModuleListItemComponent);
