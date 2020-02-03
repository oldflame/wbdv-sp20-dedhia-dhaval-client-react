import React, { Component } from "react";
import ModuleList from "../components/ModuleList";
import NavBarCourseEditor from "../components/NavBarCourseEditor";

class CourseEditor extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBarCourseEditor />
        <nav className="navbar navbar-light navbar-color">
          <form className="form-inline">
            <div>
              <a className="navbar-brand navbar-text-color" href="#">
                <i
                  class="fa fa-times mr-3 wbdv-course-title wbdv-course-editor wbdv-close"
                  onClick={this.props.toggleEditor}
                ></i>
              </a>
            </div>
          </form>
        </nav>
        <ModuleList moduleTitle="jQuery" />
        <ModuleList moduleTitle="React"/>
        <ModuleList moduleTitle="Redux"/>
        <ModuleList moduleTitle="Native"/>
        <ModuleList moduleTitle="Angular"/>
        <ModuleList moduleTitle="Node"/>
        <ModuleList moduleTitle="Mongo"/>
      </div>
    );
  }
}

export default CourseEditor;
