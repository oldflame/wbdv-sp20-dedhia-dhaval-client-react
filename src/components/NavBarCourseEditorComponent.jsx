import React, { Component } from "react";
import '../styles/NavBarCourseEditor.css';
import { Link } from "react-router-dom";
import Topic from "../components/TopicListItemComponent";


class NavBarCourseEditorComponent extends Component {
    state = {  }
    render() { 
        return (  
            <div className="">
        <nav className="navbar navbar-bg navbar-color .navbar-text-color">
        <form className="form-inline">
            <div>
                <a className="navbar-brand navbar-text-color" href="#">
                    <Link to = "/">
                    <i className="fa fa-times mr-3 wbdv-course-title wbdv-course-editor wbdv-close text-white"></i>
                    </Link>{this.props.courseTitle}
                </a>
                

                <a className="navbar-brand navbar-text-color" href="#">
                    <i className="fa fa-plus wbdv-new-page-btn"></i>
                </a>
            </div>

        </form>
    </nav>
    </div>
        );
    }
}
 
export default NavBarCourseEditorComponent