import React, { Component } from "react";
import moment from "moment";
import '../styles/CourseRow.css';
import {Link} from "react-router-dom";

class CourseRow extends Component {
  state = {
    isEditable: false,
    newCourseTitle: ''
  };

  toogleEditMode = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };

  onChangeUpdateCourse = (event) => {
    this.setState({newCourseTitle: event.target.value})
  }

  submitNewTitle = () => {
    this.props.editCourse(this.props.course._id,this.state.newCourseTitle)
    this.toogleEditMode()
  }

  render() {
    return (
      <tr>
        <td className="title-td">
          <div 
            className="pointer"
          >
            {!this.state.isEditable && <>
            <img
              src={process.env.PUBLIC_URL + "/online-course.svg"}
              width="50"
              className="mr-2"
            />
            <Link to={`/course-editor/${this.props.course._id}`}>
              <span>{this.props.course.title}</span>
            </Link></>}
            {this.state.isEditable && (
              <input
                className=" course-title-input form-control mr-sm-2"
                type="search"
                value={this.state.courseTitle}
                placeholder="Course Name"
                aria-label="courseName"
                onChange={this.onChangeUpdateCourse}
              />
            )}
          </div>
        </td>
        <td className="d-none d-md-table-cell">{this.props.course.owner}</td>
        <td className="d-none d-lg-table-cell">
          {moment(this.props.course.lastModified).fromNow()}
        </td>
        {!this.state.isEditable &&
        <td className="text-right">
          <i
            className="fa fa-2x fa-pencil mx-2 text-success pointer"
            onClick={this.toogleEditMode}
          ></i>
          <i
            className="fa fa-2x fa-trash mx-2 text-danger pointer"
            onClick={() => this.props.onDelete(this.props.course._id)}
          >
            {" "}
          </i>
        </td>}

        {this.state.isEditable &&
        <td className="text-right">
          <button type="button" className="btn btn-sm btn-danger mx-1" onClick={this.toogleEditMode}>Cancel</button>
          <button type="button" className="btn btn-sm btn-success mx-1" onClick={this.submitNewTitle}>Save</button>

        </td>}
      </tr>
    );
  }
}

export default CourseRow;
