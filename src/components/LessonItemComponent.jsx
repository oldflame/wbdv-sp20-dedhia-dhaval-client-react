import React, { Component } from "react";
import { connect } from "react-redux";
import lessonService from "../services/LessonService";
import topicService from "../services/TopicService";
import "../styles/NavBarCourseEditor.css";

class LessonItemComponent extends Component {
  state = {
    showActions: false,
    editEnabled: false,
    lessonTitle: ""
  };

  handleLessonChange = event => {
    this.setState({ lessonTitle: event.target.value });
  };

  submitLesson = () => {
    const lesson = {...this.props.lesson}
    lesson.title = this.state.lessonTitle;
    this.props.updateLessonForModule(lesson);
    this.setState({editEnabled: false, lessonTitle: ""});
  }

  selectLesson = () => {
    this.props.setSelectedLesson(this.props.lesson._id)
    //this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lessons/${this.props.lesson._id}`);
    this.props.getTopicsForLesson(this.props.lesson._id)
    this.props.setSelectedLessonForTopic(this.props.lesson._id);
  }

  render() {
    return (
      <>
        {!this.state.editEnabled && (
          <a
            className={`navbar-brand navbar-text-color navtabs ${this.props.lesson.isSelected ? "active" : ""}`}
            href="#"
            onMouseOver={() => this.setState({ showActions: true })}
            onMouseLeave={() => this.setState({ showActions: false })}
            onClick={this.selectLesson}
          >
            {this.props.lesson.title}
            {this.state.showActions && (
              <>
                <i className="fa fa-pencil mx-1 text-info" onClick={() => this.setState({editEnabled: true})}></i>
                <i className="fa fa-times-circle mx-1 text-danger" onClick={() => this.props.deleteLessonForModule(this.props.lesson._id)}></i>
              </>
            )}
          </a>
        )}
        {this.state.editEnabled && (
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
                  this.setState({lessonTitle: "", editEnabled: false})
                }
              ></i>
            </span>
          </>
        )}
      </>
    );
  }
}

const dispatchToPropertyMapper = dispatch => {
  return {
    deleteLessonForModule: lessonId => {
      lessonService.deleteLesson(lessonId).then(
        dispatch({
          type: "DELETE_LESSON_FOR_MODULE",
          lessonId: lessonId
        })
      );
    },
    updateLessonForModule: lesson => {
      lessonService.updateLesson(lesson._id, lesson).then(
        dispatch({
          type: "UPDATE_LESSON_FOR_MODULE",
          lesson: lesson
        })
      );
    },
    setSelectedLesson: lessonId => {
      dispatch({
        type: "SET_SELECTED_LESSON",
        lessonId: lessonId
      });
    },
    getTopicsForLesson: (lessonId) => {
      topicService.findTopicsForLesson(lessonId).then(topics => {
        dispatch({
          type: "FIND_TOPICS_FOR_LESSON",
          topics: topics
        })
      })
    },
    setSelectedLessonForTopic: lessonId => {
      dispatch({
        type: "SET_SELECTED_LESSON_FOR_TOPICS",
        lessonId: lessonId
      });
    }
  };
};

export default connect(null, dispatchToPropertyMapper)(LessonItemComponent);
