import React, { Component } from 'react';
import { connect } from "react-redux";
import topicService from '../services/TopicService'

class TopicListItemComponent extends Component {
    state = { 
      editEnabled:false,
      newTopicTitle : ""
     }
    
    
    render() { 
        return (  
<div>
{/* <button>
  {this.state.}
</button> */}
</div>
          );
    }
}



const dispatchToPropertyMapper = dispatch => {
    return {
      deleteTopicForModule: topicId => {
        topicService.deleteTopic(topicId).then(
          dispatch({
            type: "DELETE_TOPIC_FOR_MODULE",
            topicId: topicId
          })
        );
      },
      updateTopicForModule: (topic) => {
        topicService.updateTopic(topic._id,topic).then(
          dispatch({
            type: "UPDATE_TOPIC_FOR_MODULE",
            topic: topic
          })
        );
      },
      setSelectedTopic: (topicId) => {
        dispatch({
          type: "SET_SELECTED_TOPIC",
          topicId:topicId
        })
      }
    };
  };
  
  export default connect(null, dispatchToPropertyMapper)(TopicListItemComponent);
  

