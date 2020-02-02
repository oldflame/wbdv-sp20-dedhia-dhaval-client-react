import React, { Component } from "react";

class CourseEditor extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-color">
          <form className="form-inline">
            <div>
              <a className="navbar-brand navbar-text-color" href="#">
                <i class="fa fa-times mr-3 wbdv-course-title wbdv-course-editor wbdv-close" onClick={this.props.toggleEditor}></i>
                CS 5610 Web Development Graduate
              </a>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

export default CourseEditor;
