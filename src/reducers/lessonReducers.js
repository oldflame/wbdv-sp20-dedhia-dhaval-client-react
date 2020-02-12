import _ from 'lodash';

const initialState = {

}

const lessonReducer = (state = initialState, action) => {
    switch(action.type){
        case "FIND_LESSONS_FOR_MODULE":
            return {
                lessons: action.lessons.map(lesson=>( {
                    ...lesson,
                    isSelected: false
                }))
            }
        case "CREATE_LESSON_FOR_MODULE":
            return {
                lessons:[...state.lessons , action.newLesson]
            }
        case "DELETE_LESSON_FOR_MODULE":
            const lessons = [...state.lessons]
            const indexToDelete = _.findIndex(lessons,{_id:action.lessonId})
            lessons.splice(indexToDelete,1)
            return {
                lessons:lessons
            }
        case "UPDATE_LESSON_FOR_MODULE":
            const lessons1 = [...state.lessons]
            let lessonToUpdate = _.find(lessons1,{_id:action.lesson._id})
            let indexToUpdate = _.findIndex(lessons1,{_id:action.lesson._id})
            lessonToUpdate = action.lesson
            lessons1.splice(indexToUpdate, 1, lessonToUpdate);
            return {
                lessons:lessons1
            }
        case "SET_SELECTED_LESSON":
            const lessons2 = [...state.lessons]
            lessons2.forEach((lesson) => lesson.isSelected=false)
            const indexToSelect = _.findIndex(lessons2,{_id:action.lessonId})
            const updatedLesson = {...lessons2[indexToSelect], isSelected: true}
            lessons2.splice(indexToSelect, 1, updatedLesson);
            console.log(lessons2)
            return {
                lessons:_.cloneDeep(lessons2)
            }
        default:
            return state
    }

}


export default lessonReducer


