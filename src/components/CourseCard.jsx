import React, { Component } from "react";
import moment from "moment";
import "./CourseCard.css";

class CourseCard extends Component {
  state = {
    isEditable: false,
    newCourseTitle: ""
  };

  toggleEditMode = () => {
    console.log("Toggle cliecked")
    this.setState({ isEditable: !this.state.isEditable });
  };

  onChangeUpdateCourse = event => {
    this.setState({ newCourseTitle: event.target.value });
  };

  submitNewTitle = () => {
    this.props.editCourse(this.props.course._id, this.state.newCourseTitle);
    this.toggleEditMode();
  };

  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4  col-lg-3 col-xl-2 my-2">
        <div className="card">
          <div className="card-body pointer" onClick={this.props.toggleEditor}>
            <img
              className="course-image"
              src={process.env.PUBLIC_URL + "/online-course.svg"}
            ></img>
            <p className="card-title">
              <b>Course Title: </b>
              {this.props.course.title}
            </p>
            <p>
              <b> Modified: </b>
              {moment(this.props.course.lastModified).fromNow()}
            </p>
          </div>
          {!this.state.isEditable && (
            <div className="card-footer">
              <i className="fa fa-2x fa-pencil mx-2 text-success pointer" onClick={this.toggleEditMode}></i>
              <i
                className="fa fa-2x fa-trash mx-2  text-danger pointer"
                onClick={() => this.props.onDelete(this.props.course._id)}
              ></i>
            </div>
          )}
          {this.state.isEditable && (
            <div className="card-footer">
               <input
                className=" course-title-input form-control mr-sm-2"
                type="search"
                value={this.state.courseTitle}
                placeholder="Course Name"
                aria-label="courseName"
                onChange={this.onChangeUpdateCourse}
              />
              <button type="button" className="btn btn-sm btn-danger mx-1 my-1" onClick={this.toggleEditMode}>Cancel</button>
              <button type="button" className="btn btn-sm btn-success mx-1 my-1" onClick={this.submitNewTitle}>Save</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CourseCard;
