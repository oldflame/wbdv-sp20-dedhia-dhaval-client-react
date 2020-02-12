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

const stateToPropertyMapper = state => {
    return {
      lessons: state.lessons.lessons
    };
  };

const dispatchToPropertyMapper = dispatch => {
    return {
      deleteModuleForCourse: moduleId => {
        moduleService.deleteModule(moduleId).then(
          dispatch({
            type: "DELETE_MODULE_FOR_COURSE",
            moduleId: moduleId
          })
        );
      },
      updateModuleForCourse: (module) => {
        moduleService.updateModule(module._id,module).then(
          dispatch({
            type: "UPDATE_MODULE_FOR_COURSE",
            module: module
          })
        );
      },
      setSelectedModule: (moduleId) => {
        dispatch({
          type: "SET_SELECTED_MODULE",
          moduleId:moduleId
        })
      }
    };
  };
  export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(NavBarCourseEditorComponent);
