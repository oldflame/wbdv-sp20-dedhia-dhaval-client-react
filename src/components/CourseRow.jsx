import React, { Component } from 'react';

const CourseRow = (props) => {
    return (
        <tr>
<td>{props.course.title}</td>
            <td className="d-none d-md-table-cell">{props.course.owner}</td>
            <td className="d-none d-lg-table-cell">{props.course.lastModified}</td>
            <td className = "text-right">
                <i className="fa fa-2x fa-pencil mx-2"></i>
                <i className="fa fa-2x fa-trash mx-2" onClick={()=> props.onDelete(props.course._id)}> </i>
            </td>
        </tr>
     );
}
 
export default CourseRow;