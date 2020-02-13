import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseManager from './containers/CourseManager';
import CourseEditor from './containers/CourseEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() { 
    return ( 
      <Router>
        <Route path = "/course-editor/:courseId"
        exact = {true}
        render = {(props) => 
          <CourseEditor {...props}
          courseId = {props.match.params.courseId}/>
        }/>
          
          <Route path = "/"
          exact = {true}
          render = {() => <CourseManager/>}
          />

          <Route path = "/course-editor/:courseId/module/:moduleId"
          exact = {true}
          render = {(props) =>
          <CourseEditor {...props}
          courseId = {props.match.params.courseId}
          moduleId = {props.match.params.moduleId}
          history = {props.history}
          />}/>
    
          <Route path = "/course-editor/:courseId/module/:moduleId/lessons/:lessonId"
          exact = {true}
          render = {(props) => 
            <CourseEditor {...props}
            courseId = {props.match.params.courseId}
            moduleId = {props.match.params.moduleId}
            lessonId = {props.match.params.lessonId}
            history = {props.history}
            />}/>
      </Router>
      );
  }
}
 
export default App;