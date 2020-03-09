import React, { Component } from "react";
import _ from "lodash";
import WidgetService from "../../services/WidgetService";
import { connect } from "react-redux";



class ImageWidget extends Component {
  state = {
    text: "",
    size: "1",
    name: "Image Widget"
  };

  constructor(props) {
    super(props);
    this.state = props.widget;
  }

  handleHeadingTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSizeChange = event => {
    this.setState({ size: event.target.value });
  };

  handleWidgetNameChange = event => {
    this.setState({ name: event.target.value });
  };

  updateWidgetData = () => {
    const widget = _.cloneDeep(this.props.widget);
    widget.text = this.state.text;
    widget.size = this.state.size;
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

    if (event.target.value == "IMAGE") {
      widget.type = event.target.value;
      widget.name = "Image Widget";
      widget.text = "Image URL";
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
                <button
                  type="button"
                  className="btn btn-outline-dark yellow-btn"
                  onClick={() =>
                    this.props.moveWidget("UP", this.props.widget.id)
                  }
                >
                  <i className="fa fa-arrow-up"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark yellow-btn"
                  onClick={() =>
                    this.props.moveWidget("DOWN", this.props.widget.id)
                  }
                >
                  <i className="fa fa-arrow-down"></i>
                </button>
                <select
                  className="custom-select small-select"
                  id="inputGroupSelect01"
                  onChange={this.handleTypeChange}
                  value={this.props.widget.type}
                >
                  <option value="HEADING">Heading</option>
                  <option value="PARAGRAPH">Paragraph</option>
                  <option selected value="IMAGE">Image</option>
                  <option value="LIST">List</option>
                </select>
                <button type="button" className="btn btn-danger" onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                  <i className="fa fa-times"></i>
                </button>
              </div>
              <div>
                <img src=""></img>
              </div>
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
        });
      } else if (direction === "DOWN") {
        dispatch({
          type: "MOVE_WIDGET_DOWN",
          widgetId: widgetId
        });
      }
    }
  };
};
export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ImageWidget);