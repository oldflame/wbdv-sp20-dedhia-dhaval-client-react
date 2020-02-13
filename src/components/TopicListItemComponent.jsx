import React, { Component } from "react";
import { connect } from "react-redux";
import topicService from "../services/TopicService";

class TopicListItemComponent extends Component {
  state = {
    editEnabled: false,
    newTopicTitle: "",
    showActions: false
  };

  handleTopicChange = (event) => {
    this.setState({ newTopicTitle: event.target.value })
  }

  submitUpdatedTopic = () => {
    const topic = {...this.props.topic}
    topic.title = this.state.newTopicTitle;
    this.props.updateTopicForModule(topic);
    this.setState({ editEnabled: false, newTopicTitle: ""})
  }

  render() {
    return (
      <>
          <button
            className="btn btn-outline-dark m-2"
            onMouseOver={() => this.setState({ showActions: true })}
            onMouseLeave={() => this.setState({ showActions: false })}
          >
            {!this.state.editEnabled && <span>{this.props.topic.title}</span>}
            {!this.state.editEnabled && this.state.showActions && (
              <>
                <i
                  className="fa fa-pencil ml-2 mx-1 text-info"
                  onClick={() => this.setState({ editEnabled: true })}
                ></i>
                <i className="fa fa-times mx-1 text-danger" onClick={() => this.props.deleteTopicForModule(this.props.topic._id)}></i>
              </>
            )}
            {this.state.editEnabled && (
              <>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lesson Title"
                  onChange={this.handleTopicChange}
                />
                <span className="navbar-brand navbar-text-color">
                  <i
                    className="fa fa-check mx-1 text-success"
                    onClick={this.submitUpdatedTopic}
                  />
                  <i
                    className="fa fa-times wbdv-module-item-delete-btn mx-1 text-danger"
                    onClick={() =>
                      this.setState({ lessonTitle: "", editEnabled: false })
                    }
                  ></i>
                </span>
              </>
            )}
          </button>
      </>
    );
  }
}

const dispatchToPropertyMapper = dispatch => {
  return {
    deleteTopicForModule: topicId => {
      topicService.deleteTopic(topicId).then(
        dispatch({
          type: "DELETE_TOPIC_FOR_LESSON",
          topicId: topicId
        })
      );
    },
    updateTopicForModule: topic => {
      topicService.updateTopic(topic._id, topic).then(
        dispatch({
          type: "UPDATE_TOPIC_FOR_LESSON",
          topic: topic
        })
      );
    },
    setSelectedTopic: topicId => {
      dispatch({
        type: "SET_SELECTED_TOPIC",
        topicId: topicId
      });
    }
  };
};

export default connect(null, dispatchToPropertyMapper)(TopicListItemComponent);
