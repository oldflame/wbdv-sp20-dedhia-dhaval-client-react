import React, { Component } from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import { connect } from "react-redux";
import "../../services/WidgetService";
import WidgetService, {
  findWidgetsForTopic
} from "../../services/WidgetService";

class WidgetListComponent extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    console.log("In mount", this.props.topicId);
    if (prevProps.topicId != this.props.topicId) {
      this.props.findWidgetsForTopic(this.props.topicId);
    }
  }

  componentDidMount() {
    console.log("In mount", this.props.topicId);
    this.props.findWidgetsForTopic(this.props.topicId);
  }

  render() {
    return (
      <div>
        {this.props.widgets.map(widget => (
          <>
            {widget.type === "HEADING" && (
              <HeadingWidget key={widget.id} widget={widget} />
            )}
            {widget.type === "PARAGRAPH" && (
              <ParagraphWidget key={widget.id} widget={widget} />
            )}
          </>
        ))}
        {/* <ParagraphWidget /> */}
        <div className="row">
          <div className="offset-11 col-1">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => this.props.createWidget(this.props.topicId)}
            >
              <i className="fa fa-2x fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const stateToPropertyMapper = state => {
  return {
    widgets: state.widgets.widgets
  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
    createWidget: topicId => {
      WidgetService.createWidget(topicId, {
        text: "Heading Text",
        size: 1,
        name: "Heading Widget",
        type: "HEADING"
      }).then(newWidget =>
        dispatch({
          type: "CREATE_WIDGET_FOR_TOPIC",
          newWidget: newWidget
        })
      );
    },
    findWidgetsForTopic: topicId => {
      WidgetService.findWidgetsForTopic(topicId).then(widgets =>
        dispatch({
          type: "FIND_WIDGET_FOR_TOPIC",
          widgets: widgets
        })
      );
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListComponent);