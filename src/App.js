import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseManager from './containers/CourseManager';
import CourseEditor from './containers/CourseEditor';


class App extends Component {
  state = { 
    showCourseEditor: false
   }

toggleEditor = (courseId) => {
  this.setState({courseId:courseId})
  this.setState({showCourseEditor: !this.state.showCourseEditor})
}

  render() { 
    return ( 
      this.state.showCourseEditor ? <CourseEditor toggleEditor={this.toggleEditor} courseId={this.state.courseId}/> : <CourseManager toggleEditor={this.toggleEditor}/>
      );
  }
}
 
export default App;