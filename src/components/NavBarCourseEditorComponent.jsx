import React, { Component } from "react";
import "../styles/NavBarCourseEditor.css";
import { Link } from "react-router-dom";
import Topic from "../components/TopicListItemComponent";
import lessonReducer from "../reducers/lessonReducers";
import LessonItemComponent from '../components/LessonItemComponent';
import { connect } from "react-redux";
import lessonService from '../services/LessonService'

class NavBarCourseEditorComponent extends Component {
  state = {
      showInputField:false,
      lessontitle:""
  };

    componentDidMount(){
        this.props.findLessonsForModules(this.props.moduleId)
    }

    componentDidUpdate(prevProps){
        if(prevProps.moduleId != this.props.moduleId)
            this.props.findLessonsForModules(this.props.moduleId)
    }
    

  render() {
    return (
      <div className="">
        <nav className="navbar navbar-bg navbar-color .navbar-text-color">
          <form className="form-inline">
            <div>
              <a className="navbar-brand navbar-text-color" href="#">
                <Link to="/">
                  <i className="fa fa-times mr-3 wbdv-course-title wbdv-course-editor wbdv-close text-white"></i>
                </Link>
                {this.props.courseTitle}
              </a>
             
              {this.props.lessons &&
            this.props.lessons.map(lesson => (
              <LessonItemComponent lesson={lesson} key={lesson._id}  courseId = {this.props.courseId} moduleId = {this.props.moduleId} history={this.props.history}/>
            ))}
              <a className="navbar-brand navbar-text-color" href="#">
                <i className="fa fa-plus wbdv-new-page-btn"></i>
              </a>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

const stateToPropertyMapper = state => {
  return {
    lessons: state.lessons.lessons
  };
};
const dispatchToPropertyMapper = dispatch => {
  return {
    findLessonsForModules: moduleId => {
        console.log(moduleId)
      lessonService.findLessonsForModule(moduleId).then(lessons => {
        dispatch({
          type: "FIND_LESSONS_FOR_MODULE",
          lessons: lessons
        });
      });
    }
  };
};
export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(NavBarCourseEditorComponent);
