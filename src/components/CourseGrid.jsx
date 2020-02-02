import React, { Component } from 'react';
import CourseCard from './CourseCard'


class CourseGrid extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
                <CourseCard id="1"/>
                <CourseCard id="2"/>
                <CourseCard id="3"/>
                <CourseCard id="4"/>
                <CourseCard id="5"/>
                <CourseCard id="6"/>
                <CourseCard id="7"/>
            </div> 
         );
    }
}
 
export default CourseGrid;