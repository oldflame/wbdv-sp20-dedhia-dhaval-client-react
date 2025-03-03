import React, { Component } from "react";
import CourseCard from "./CourseCardComponent";

class CourseGrid extends Component {
  state = {};
  render() {
    return (
      <div className="row mx-0">
        {this.props.courses !== undefined &&
          this.props.courses.map(course => (
            <CourseCard
              key={course._id}
              course={course}
              onDelete={this.props.deleteCourse}
              toggleEditor={this.props.toggleEditor}
              editCourse={this.props.editCourse}
            />
          ))}
      </div>
    );
  }
}

export default CourseGrid;
