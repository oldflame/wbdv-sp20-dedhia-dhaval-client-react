import React, { Component } from "react";
import '../styles/NavBarCourseEditor.css';

const NavBarCourseEditor = props => {
  return (
    <div className="">
        <nav className="navbar navbar-bg navbar-color .navbar-text-color">
        <form className="form-inline">
            <div>
                <a    className="navbar-brand navbar-text-color" href="#">
                    <i onClick={props.toggleEditor} className="fa fa-times mr-3 wbdv-course-title wbdv-course-editor wbdv-close"></i>
                    {props.title}
                </a>
                <a className="navbar-brand navbar-text-color ml-4 navtabs" href="#">
                    Build
                </a>
                <a className="navbar-brand navbar-text-color navtabs" href="#">
                    <span className="mx-1">Pages</span>
                </a>
                <a className="navbar-brand navbar-text-color navtabs" href="#">
                    Theme
                </a>
                <a className="navbar-brand navbar-text-color navtabs" href="#">
                    Store
                </a>
                <a className="navbar-brand navbar-text-color navtabs" href="#">
                    Apps
                </a>
                <a className="navbar-brand navbar-text-color navtabs" href="#">
                    Settings
                </a>
                <a className="navbar-brand navbar-text-color" href="#">
                    <i className="fa fa-plus wbdv-new-page-btn"></i>
                </a>
            </div>

        </form>
    </nav>
    </div>
  );
};

export default NavBarCourseEditor;