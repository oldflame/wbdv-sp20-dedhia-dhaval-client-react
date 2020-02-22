import React, { Component } from "react";
import WidgetService from "../../services/WidgetService";
import { connect } from "react-redux";
import "../../styles/Widget.css";

import _ from "lodash";
import ParagraphPreviewComponent from "./ParagraphPreviewComponent";

class ParagraphWidget extends Component {
  state = {
    text: "",
    name: ""
  };

  constructor(props) {
    super(props);
    this.state = props.widget;
  }

  handleParagraphChange = event => {
    this.setState({ text: event.target.value });
  };

  handleWidgetNameChange = event => {
    this.setState({ name: event.target.value });
  };

  updateWidget = () => {
    const widget = _.cloneDeep(this.props.widget);
    widget.text = this.state.text;
    widget.name = this.state.name;
    this.props.updateWidgetForTopic(widget);
  };

  handleTypeChange = event => {
    const widget = _.cloneDeep(this.props.widget);

    if (event.target.value == "HEADING") {
      widget.type = event.target.value;
      widget.name = "Heading Widget";
      widget.text = "Heading Text";
    }

    if (event.target.value == "PARAGRAPH") {
      widget.type = event.target.value;
      widget.name = "Paragraph Widget";
      widget.text = "Paragraph Text";
    }


    this.props.updateWidgetForTopic(widget);
  };

  render() {
    return (
      <div>
        <div className="card m-3 border-dark">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h1>{this.state.name}</h1>
              </div>
              <div className="col-4 right-pull">
              {this.props.widgetIndex != 0 && (
                  <button
                    type="button"
                    className="btn btn-outline-dark yellow-btn"
                    onClick={() =>
                      this.props.moveWidget("UP", this.props.widget.id)
                    }
                  >
                    <i className="fa fa-arrow-up"></i>
                  </button>
                )}

                {this.props.widgetIndex != (this.props.widgetCount - 1) && (
                  <button
                    type="button"
                    className="btn btn-outline-dark yellow-btn"
                    onClick={() =>
                      this.props.moveWidget("DOWN", this.props.widget.id)
                    }
                  >
                    <i className="fa fa-arrow-down"></i>
                  </button>
                )}
                <select
                  className="custom-select small-select"
                  id="inputGroupSelect01"
                  onChange={this.handleTypeChange}
                  value={this.props.widget.type}
                >
                  <option value="HEADING">Heading</option>
                  <option selected value="PARAGRAPH">
                    Paragraph
                  </option>
                </select>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.props.deleteWidget(this.props.widget.id)}
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="col-12">
              <textarea
                type="text"
                className="form-control"
                placeholder="Paragraph Text"
                onChange={this.handleParagraphChange}
                value={this.state.text}
              />
            </div>
            <div className="col-12">
              <input
                type="textarea"
                className="form-control mt-3 my-2"
                placeholder="Widget Name"
                value={this.state.name}
                onChange={this.handleWidgetNameChange}
              />
            </div>
            <div className="offset-11 col-1">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.updateWidget}
              >
                Save
              </button>
            </div>
            <div>
              <h3> Preview </h3>
              <ParagraphPreviewComponent widget={this.state} />
            </div>
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
    deleteWidget: widgetId => {
      WidgetService.deleteWidget(widgetId).then(
        dispatch({
          type: "DELETE_WIDGET_FOR_TOPIC",
          widgetId: widgetId
        })
      );
    },
    updateWidgetForTopic: widget => {
      WidgetService.updateWidget(widget.id, widget).then(
        dispatch({
          type: "UPDATE_WIDGET_FOR_TOPIC",
          widget: widget
        })
      );
    },
    moveWidget: (direction, widgetId) => {
      if (direction === "UP") {
        dispatch({
          type: "MOVE_WIDGET_UP",
          widgetId: widgetId
        })
      } else if (direction === "DOWN") {
        dispatch({
          type: "MOVE_WIDGET_DOWN",
          widgetId: widgetId
        })
      }
    }
  };
};
export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ParagraphWidget);
