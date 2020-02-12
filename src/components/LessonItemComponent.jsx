import React, { Component } from 'react';

class LessonListItemComponent extends Component {
    state = {  }
    
    
    render() { 
        return (  
<div>
  
</div>
          );
    }
}



const dispatchToPropertyMapper = dispatch => {
    return {
      deleteLessonForModule: lessonId => {
        lessonService.deleteLesson(lessonId).then(
          dispatch({
            type: "DELETE_LESSON_FOR_MODULE",
            lessonId: lessonId
          })
        );
      },
      updateLessonForModule: (lesson) => {
        lessonService.updateLesson(lesson._id,lesson).then(
          dispatch({
            type: "UPDATE_LESSON_FOR_MODULE",
            lesson: lesson
          })
        );
      },
      setSelectedLesson: (lessonId) => {
        dispatch({
          type: "SET_SELECTED_LESSON",
          lessonId:lessonId
        })
      }
    };
  };
  
  export default connect(null, dispatchToPropertyMapper)(LessonListItemComponent);
  

