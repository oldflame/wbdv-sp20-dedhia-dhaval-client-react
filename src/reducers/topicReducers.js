import _ from 'lodash';

const initialState = {

}

const topicReducer = (state = initialState, action) => {
    switch(action.type){
        case "FIND_TOPICS_FOR_LESSON":
            console.log("Lessons find", action.topics)
            return {
                topics: action.topics.map(topic=>( {
                    ...topic,
                    isSelected: false
                }))
            }
        case "CREATE_TOPIC_FOR_LESSON":
            return {
                topics:[...state.topics , action.topic]
            }
        case "DELETE_TOPIC_FOR_LESSON":
            const topics = [...state.topics]
            const indexToDelete = _.findIndex(topics,{_id:action.topicId})
            topics.splice(indexToDelete,1)
            return {
                topics:topics
            }
        case "UPDATE_TOPIC_FOR_LESSON":
            const topics1 = [...state.topics]
            let topicToUpdate = _.find(topics1,{_id:action.topic._id})
            let indexToUpdate = _.findIndex(topics1,{_id:action.topic._id})
            topicToUpdate = action.topic
            topics1.splice(indexToUpdate, 1, topicToUpdate);
            return {
                topics:topics1
            }
        case "SET_SELECTED_TOPIC":
            const topics2 = [...state.topics]
            topics2.forEach((topic) => topic.isSelected=false)
            const indexToSelect = _.findIndex(topics2,{_id:action.topicId})
            const updatedLesson = {...topics2[indexToSelect], isSelected: true}
            topics2.splice(indexToSelect, 1, updatedLesson);
            return {
                topics:_.cloneDeep(topics2)
            }
        default:
            return state
    }

}


export default topicReducer


