import React, { Component } from "react";
import moment from "moment";

const CourseRow = props => {
  return (
    <tr>
      <td>
        <div class="pointer" onClick={props.toggleEditor}>
          <img
            src={process.env.PUBLIC_URL + "/online-course.svg"}
            width="50"
            className="mr-2"
          />
          {props.course.title}
        </div>
      </td>
      <td className="d-none d-md-table-cell">{props.course.owner}</td>
      <td className="d-none d-lg-table-cell">
        {moment(props.course.lastModified).fromNow()}
      </td>
      <td className="text-right">
        <i className="fa fa-2x fa-pencil mx-2 text-success pointer"></i>
        <i
          className="fa fa-2x fa-trash mx-2 text-danger pointer"
          onClick={() => props.onDelete(props.course._id)}
        >
          {" "}
        </i>
      </td>
    </tr>
  );
};

export default CourseRow;
