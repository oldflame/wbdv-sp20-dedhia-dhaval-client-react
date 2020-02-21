import React, { Component } from "react";
import ModuleList from "../components/ModuleListComponent";
import NavBarCourseEditor from "../components/NavBarCourseEditorComponent";
import "../styles/CourseEditor.css";
import { findCourseById } from "../services/CourseService";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import moduleReducer from "../reducers/moduleReducer";
import ModuleListComponent from '../components/ModuleListComponent'
import '../styles/Modulecomponent.css'
import lessonReducer from "../reducers/lessonReducers";
import topicReducer from "../reducers/topicReducers";
import TopicListComponent from "../components/TopicListComponent";
import WidgetListComponent from "../components/widgets/WidgetListComponent";
import widgetReducer from "../reducers/widgetReducer";

class CourseEditor extends Component {
  rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
  });

  store = createStore(this.rootReducer);

  state = {
    title: "WhiteBoard Course Editor"
  };

  componentDidMount() {
    this.getCourseName();
  }

  componentDidUpdate(prevProps){
    if(prevProps.courseId != this.props.courseId)
      this.getCourseName()
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
            <ModuleListComponent courseId={this.props.courseId} moduleId={this.props.moduleId} history={this.props.history}/>
            </div>
          <div className="col-9">
            <TopicListComponent lessonId={this.props.lessonId} courseId={this.props.courseId} moduleId={this.props.moduleId} history={this.props.history}/>
            <WidgetListComponent topicId={this.props.topicId}/>

          </div>
        </div>
      </Provider>
    );
  }
}

export default CourseEditor;
