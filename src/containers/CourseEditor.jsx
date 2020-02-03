import React, { Component } from "react";
import ModuleList from "../components/ModuleList";
import NavBarCourseEditor from "../components/NavBarCourseEditor";
import "../components/CourseEditor.css";

class CourseEditor extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBarCourseEditor toggleEditor={this.props.toggleEditor} title="Dhaval "/>


        <div className="left-bar col-3 pt-3">
          <ModuleList moduleTitle="1 - jQuery" />
          <ModuleList moduleTitle="2 - React" />
          <ModuleList moduleTitle="3 - Redux" />
          <ModuleList moduleTitle="4 - Native" />
          <ModuleList moduleTitle="5 - Angular" />
          <ModuleList moduleTitle="5 - Node" />
          <ModuleList moduleTitle="6 - Mongo" />
          <i className="fa fa-2x fa-plus float-right my-3 mr-4"></i>
        </div>
      </div>
    );
  }
}

export default CourseEditor;
