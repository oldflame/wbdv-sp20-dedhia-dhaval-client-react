import React, { Component } from "react";
import moduleService, { findModuleForCourse } from "../services/ModuleService";
import ModuleListItemComponent from "../components/ModuleListItemComponent";
import { connect } from "react-redux";

class ModuleListComponent extends Component {
  state = {
    editEnabled: false,
    moduleTitle: ""
  };


  componentDidMount() {
    console.log("Find modules called")
    this.props.findModuleForCourse(this.props.courseId);
  }

  handleChange = (event) => {
      this.setState({moduleTitle:event.target.value})
  }

  submitNewTitle = () => {
    this.props.createModule(this.props.courseId,this.state.moduleTitle)
    this.setState({editEnabled:false,moduleTitle:""})
  }

  render() {
    return (
      <>
        <div className="list-group ">
          {this.props.modules &&
            this.props.modules.map(module => (
              <ModuleListItemComponent module={module} key={module._id}  courseId = {this.props.courseId} history={this.props.history}/>
            ))}
          <div>
            {this.state.editEnabled &&
            <a className="list-group-item list-group-item-action my-2 round-btn wbdv-module-list">
             <div className="row">
             <div className="col-9">
               <input
                 className="form-control"
                 type="text"
                 placeholder="Module Title"
                 value={this.state.moduleTitle}
                 onChange={this.handleChange}
               />
             </div>
             <div className="col-3">
             <i className="fa fa-2x fa-check mx-1 text-success" onClick={this.submitNewTitle}></i>
               <i className="fa fa-2x fa-times mx-1 text-danger" onClick={() => this.setState({ editEnabled: false })}></i>
             </div>
           </div>
             </a>
            }
            
            <i className="fa fa-3x fa-plus pull-right mr-2 mt-3"onClick={() => this.setState({ editEnabled: true })}></i>
          </div>
        </div>
      </>
    );
  }
}

const stateToPropertyMapper = state => {
  return {
    modules: state.modules.modules
  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
    findModuleForCourse: courseId =>
      moduleService.findModulesForCourse(courseId).then(actualModules =>
        dispatch({
          type: "FIND_MODULES_FOR_COURSE",
          modules: actualModules
        })),

    createModule : (courseId,moduleTitle) => {
        moduleService.createModule(courseId,{title:moduleTitle,isSelected:false}).then(newModule => 
            dispatch({
                type: "CREATE_MODULE_FOR_COURSE",
                newModule: newModule
            }))
    }
      
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ModuleListComponent);
