import React, { Component } from "react";
import ModuleList from "../components/ModuleListComponent";
import NavBarCourseEditor from "../components/NavBarCourseEditorComponent";
import "../styles/CourseEditor.css";
import { findCourseById } from "../services/CourseService";
import Topic from "../components/TopicComponent";
import Widget from "../components/WidgetComponent";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import moduleReducer from "../reducers/moduleReducer";
import ModuleListComponent from '../components/ModuleListComponent'

class CourseEditor extends Component {
  rootReducer = combineReducers({
    modules: moduleReducer
  });

  store = createStore(this.rootReducer);

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
      <Provider store={this.store}>
        <NavBarCourseEditor />
        <div className="row">
          <div className="col-3">
            <ModuleListComponent courseId={this.props.courseId}/>
            </div>
          <div className="col-9"></div>
        </div>
      </Provider>
    );
  }
}

export default CourseEditor;
