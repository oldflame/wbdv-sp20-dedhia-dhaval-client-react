import React, { Component } from "react";
import ModuleList from "../components/ModuleListComponent";
import NavBarCourseEditor from "../components/NavBarCourseEditorComponent";
import "../styles/CourseEditor.css";
import { findCourseById } from "../services/CourseService";
import Widget from "../components/WidgetComponent";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import moduleReducer from "../reducers/moduleReducer";
import ModuleListComponent from '../components/ModuleListComponent'
import '../styles/Modulecomponent.css'
import lessonReducer from "../reducers/lessonReducers";
import topicReducer from "../reducers/topicReducers";
import TopicListComponent from "../components/TopicListComponent";
import WidgetComponent from '../components/WidgetComponent';  

class CourseEditor extends Component {
  rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer
  });

  store = createStore(this.rootReducer);

  state = {
    title: "WhiteBoard Course Editor"
  };

  shouldComponentUpdate(){
    return this.props.lessonId==undefined;
  }

  componentDidMount() {
    console.log("In CourseEditor")
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
        <NavBarCourseEditor courseTitle={this.state.title} courseId={this.props.courseId} moduleId={this.props.moduleId} history={this.props.history}/>
        <div className="row">
          <div className="col-3 left-bar">
            <ModuleListComponent courseId={this.props.courseId} history={this.props.history}/>
            </div>
          <div className="col-9">
            <TopicListComponent lessonId={this.props.lessonId} history={this.props.history}/>
            <WidgetComponent />

          </div>
        </div>
      </Provider>
    );
  }
}

export default CourseEditor;
