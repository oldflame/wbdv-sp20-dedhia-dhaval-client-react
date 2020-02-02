import React, { Component } from "react";
import moment from "moment";
import "./CourseCard.css";

class CourseCard extends Component {
  state = {};
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
          <div className="card-footer">
            <i className="fa fa-2x fa-pencil mx-2 text-success pointer"></i>
            <i
              className="fa fa-2x fa-trash mx-2  text-danger pointer"
              onClick={() => this.props.onDelete(this.props.course._id)}
            >
              {" "}
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
