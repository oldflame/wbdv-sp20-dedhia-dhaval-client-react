import React, { Component } from "react";
import CourseRow from "./CourseRowComponent";
import { deleteCourse } from "../services/CourseService";

const CourseTable = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col" className="d-none d-md-table-cell">
            Owned By
          </th>
          <th scope="col" className="d-none d-lg-table-cell">
            Last Modified
          </th>
          <th scope="col " className="text-right">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {props.courses !== undefined &&
          props.courses.map(course => (
            <CourseRow
              key={course._id}
              course={course}
              onDelete={props.deleteCourse}
              toggleEditor={props.toggleEditor}
              editCourse={props.editCourse}
            />
          ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
