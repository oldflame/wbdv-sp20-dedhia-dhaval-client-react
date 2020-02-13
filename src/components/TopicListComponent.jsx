import React, { Component } from "react";
import TopicListItemComponent from "./TopicListItemComponent";
import { connect } from "react-redux";
import topicService from "../services/TopicService";
import "../styles/TopicList.css";

class TopicListComponent extends Component {
  state = {
    showInputField: false,
    topicTitle: ""
  };

  componentDidMount() {
    this.props.findTopicsForLessons(this.props.lessonId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedLesson != this.props.selectedLesson)
      this.props.findTopicsForLessons(this.props.lessonId);
  }

  handleTopicChange = event => {
    this.setState({ topicTitle: event.target.value });
  };

  submitTopic = () => {
    this.props.createTopicForLesson(this.props.selectedLesson, {
      title: this.state.topicTitle,
      isSelected: false
    });
    this.setState({ showInputField: false, topicTitle: "" });
  };

  render() {
    return (
      <div className="m-2">
        {this.props.topics &&
          this.props.topics.map(topic => (
            <TopicListItemComponent topic={topic} key={topic._id} />
          ))}

        {this.state.showInputField && (
          <>
            <input
              className="form-control topic-input"
              type="text"
              placeholder="Topic Title"
              onChange={this.handleTopicChange}
            />
            <i
              className="fa fa-2x fa-check mx-1 text-success"
              onClick={this.submitTopic}
            ></i>
            <i
              className="fa fa-2x fa-times mx-1 text-danger"
              onClick={() => this.setState({ showInputField: false })}
            ></i>
          </>
        )}
        {!this.state.showInputField && (
          <button className="btn btn-outline-dark mt-2">
            <i
              className="fa fa-2x fa-plus"
              onClick={() => this.setState({ showInputField: true })}
            ></i>
          </button>
        )}
      </div>
    );
  }
}

const stateToPropertyMapper = state => {
  console.log("Jugaad id", state.topics.selectedLesson)
  return {
    topics: state.topics.topics,
    selectedLesson: state.topics.selectedLesson
  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
    findTopicsForLessons: lessonId => {
      topicService.findTopicsForLesson(lessonId).then(topics => {
        dispatch({
          type: "FIND_TOPICS_FOR_LESSON",
          topics: topics
        });
      });
    },
    createTopicForLesson: (lessonId, topic) => {
      console.log("Creating topic", lessonId)
      topicService.createTopic(lessonId, topic).then(topic => {
        dispatch({
          type: "CREATE_TOPIC_FOR_LESSON",
          topic: topic
        });
      });
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(TopicListComponent);
