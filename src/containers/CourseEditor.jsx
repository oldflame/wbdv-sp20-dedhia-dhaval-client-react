import React, { Component } from "react";
import ModuleList from "../components/ModuleList";
import NavBarCourseEditor from "../components/NavBarCourseEditor";
import "../components/CourseEditor.css";
import { findCourseById } from "../services/CourseService";
import Topic from "../components/Topic";

class CourseEditor extends Component {
  state = {
    title: "WhiteBoard Course Editor"
  };

  componentDidMount() {
    this.getCourseName();
  }
  getCourseName = () => {
    findCourseById(this.props.courseId).then(course => {
      this.setState({ title: "WhiteBoard Course Editor " + course.title });
    });
  };
  render() {
    return (
      <div>
        <NavBarCourseEditor
          toggleEditor={this.props.toggleEditor}
          title={this.state.title}
        />
        <div className="row">
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
          <div className="col-9">
            <Topic topicTitle="1" />
            <Topic topicTitle="2" />
            <Topic topicTitle="3" />
            <Topic topicTitle="4" />
            <Topic topicTitle="5" />
            <a className="navbar-brand navbar-text-color" href="#">
                    <i className="fa fa-plus wbdv-new-page-btn"></i>
                </a>
            <div className="row">
              <div className="col-12">
                <div className="custom-control custom-switch mid-layer float-right mx-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch1"
                  >
                    Preview
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-success float-right mx-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseEditor;
