import React, { Component } from "react";
import "../styles/NavBarCourseEditor.css";
import { Link } from "react-router-dom";
import Topic from "../components/TopicListItemComponent";
import lessonReducer from "../reducers/lessonReducers";
import LessonItemComponent from "../components/LessonItemComponent";
import { connect } from "react-redux";
import lessonService from "../services/LessonService";
import LessonService from "../services/LessonService";

class NavBarCourseEditorComponent extends Component {
  state = {
    showInputField: false,
    lessonTitle: ""
  };

  componentDidMount() {
    if(this.props.moduleId!= undefined)
      this.props.findLessonsForModules(this.props.moduleId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.moduleId != this.props.moduleId) {
      this.props.findLessonsForModules(this.props.moduleId);
    }
  }

  handleLessonChange = event => {
    this.setState({ lessonTitle: event.target.value });
  };

  submitLesson = () => {
    this.props.createLessonForModule(this.props.moduleId, {
      title: this.state.lessonTitle,
      isSelected: false
    });
    this.setState({ showInputField: false, lessonTitle: "" });
  };

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
                  <LessonItemComponent
                    lesson={lesson}
                    key={lesson._id}
                    courseId={this.props.courseId}
                    moduleId={this.props.moduleId}
                    history={this.props.history}
                  />
                ))}
              {this.state.showInputField && (
                <>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lesson Title"
                    onChange={this.handleLessonChange}
                  />
                  <span className="navbar-brand navbar-text-color">
                    <i
                      className="fa fa-check mx-1 text-success"
                      onClick={this.submitLesson}
                    />
                    <i
                      className="fa fa-times wbdv-module-item-delete-btn mx-1 text-danger"
                      onClick={() =>
                        this.props.deleteModuleForCourse(this.props.module._id)
                      }
                    ></i>
                  </span>
                </>
              )}
              {!this.state.showInputField && (
                <a className="navbar-brand navbar-text-color" href="#">
                  <i
                    className="fa fa-plus wbdv-new-page-btn mx-2"
                    onClick={() => this.setState({ showInputField: true })}
                  ></i>
                </a>
              )}
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

const stateToPropertyMapper = state => {
  console.log(state.lessons)
  return {
    lessons: state.lessons.lessons
  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
    findLessonsForModules: moduleId => {
      lessonService.findLessonsForModule(moduleId).then(lessons => {
        dispatch({
          type: "FIND_LESSONS_FOR_MODULE",
          lessons: lessons
        });
      });
    },
    createLessonForModule: (moduleId, lesson) => {
      lessonService.createLesson(moduleId, lesson).then(lesson => {
        dispatch({
          type: "CREATE_LESSON_FOR_MODULE",
          lesson: lesson
        });
      });
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(NavBarCourseEditorComponent);
