import React, { Component } from "react";
import './NavBar.css'

class NavBar extends Component {
  state = { 
    courseTitle : ''
   }


   handleInputChange = (event) => {
     this.setState({courseTitle : event.target.value})
   }

   submitCourse = () => {
    this.props.onAddCourse(this.state.courseTitle)
    this.setState({courseTitle:''})
   }
   
  render() { 
    return (
      <div className="">
      <nav className="navbar navbar-light justify-content-between nav-bg">
        <a className="navbar-brand text-white">{this.props.title}</a>
    
          <input
            className=" course-title-input form-control mr-sm-2"
            type="search"
            value={this.state.courseTitle}
            placeholder="Enter Course Name"
            aria-label="Search"
            onChange={this.handleInputChange}
          />
        <i className="plus-icon fa fa-2x fa-plus" onClick={this.submitCourse}></i>
      </nav>
    </div>
      );
  }
}
 
export default NavBar;