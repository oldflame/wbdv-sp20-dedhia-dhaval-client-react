import React, { Component } from "react";
import './NavBarCourseEditor.css';

const NavBarCourseEditor = props => {
  return (
    <div classNameName="">
        <nav className="navbar navbar-bg navbar-color .navbar-text-color">
        <form className="form-inline">
            <div>
                <a   onClick={props.toggleEditor} className="navbar-brand navbar-text-color" href="#">
                    <i className="fa fa-times mr-3 wbdv-course-title wbdv-course-editor wbdv-close"></i>
                    {props.title}
                </a>
                <a className="navbar-brand navbar-text-color ml-4" href="#">
                    Build
                </a>
                <a className="navbar-brand navbar-text-color active wbdv-page-tab" href="#">
                    <span className="mx-1">Pages</span>
                </a>
                <a className="navbar-brand navbar-text-color" href="#">
                    Theme
                </a>
                <a className="navbar-brand navbar-text-color" href="#">
                    Store
                </a>
                <a className="navbar-brand navbar-text-color" href="#">
                    Apps
                </a>
                <a className="navbar-brand navbar-text-color" href="#">
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
