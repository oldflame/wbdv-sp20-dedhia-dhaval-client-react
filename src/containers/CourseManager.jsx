import React, { Component } from "react";
import NavBar from "../components/NavBar";
import CourseTable from "../components/CourseTable";
import CourseGrid from "../components/CourseGrid";
import {
  findAllCourses,
  createCourse,
  deleteCourse
} from "../services/CourseService";
import moment from "moment";
import _ from "lodash";

class CourseManager extends Component {
  state = {
    view: "list",
    order: "asc",
    visible: true
  };

  componentDidMount() {
    this.getCourses();
  }

  getCourses = () => {
    findAllCourses().then(courses => {
      this.setState({ courses: courses });
    });
  };

  addCourse = courseTitle => {
    console.log(courseTitle);
    const course = {
      title: courseTitle,
      owner: "Dhaval Dedhia",
      lastModified: moment()
    };

    createCourse(course).then(newCourse => {
      const courses = [...this.state.courses];
      courses.push(newCourse);
      this.setState({ courses: courses });
    });
  };

  toggleOrder = () => {
    this.setState({ order: this.state.order === "asc" ? "desc" : "asc" });
  };

  toggleView = () => {
    this.setState({ view: this.state.view === "list" ? "grid" : "list" });
  };

  removeCourse = courseId => {
    deleteCourse(courseId).then(() => {
      const courses = [...this.state.courses];
      const indexToDelete = _.findIndex(courses, { _id: courseId });
      courses.splice(indexToDelete, 1);
      this.setState({ courses: courses });
    });
  };

  render() {
    return (
      <>
        <NavBar title="Course Manager" onAddCourse={this.addCourse} />
        <div className="container">
          <div className="row">
            <div className="col-12" align="right">
              {this.state.view === "list" && (
                <i
                  className="fa fa-2x fa-th mx-2 my-2"
                  onClick={this.toggleView}
                ></i>
              )}
              {this.state.view === "grid" && (
                <i
                  className="fa fa-2x fa-list mx-2 my-2"
                  onClick={this.toggleView}
                ></i>
              )}
            </div>
          </div>
          {this.state.courses === undefined && (
            <h4 className="text-center">Fetching Courses...</h4>
          )}

          {this.state.courses !== undefined && this.state.view === "list" && (
            <CourseTable
              courses={this.state.courses}
              deleteCourse={this.removeCourse}
            />
          )}
          {this.state.courses !== undefined && this.state.view === "grid" && (
            <CourseGrid
              courses={this.state.courses}
              deleteCourse={this.removeCourse}
            />
          )}
        </div>
      </>
    );
  }
}

export default CourseManager;
