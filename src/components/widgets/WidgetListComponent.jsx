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

  componentDidUpdate() {
    console.log(this.props.widgets);
  }
  render() {
    return (
      <div>
        {this.props.widgets.map(widget => (
          <>
            {widget.type === "HEADING" && <HeadingWidget />}
            {widget.type === "PARAGRAPH" && <ParagraphWidget />}
          </>
        ))}
        {/* <ParagraphWidget /> */}
        <div className="row">
          <div className="offset-11 col-1">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.props.createWidget}
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
    createWidget: (heading, size, widgetName) => {
      WidgetService.createWidget(123, {
        text: "Heading Text",
        size: "1",
        name: "Heading Widget",
        type: "HEADING"
      }).then(newWidget =>
        dispatch({
          type: "CREATE_WIDGET_FOR_TOPIC",
          newWidget: newWidget
        })
      );
    }
}
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListComponent);
