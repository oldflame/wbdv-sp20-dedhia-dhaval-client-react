import React, { Component } from "react";
import _ from "lodash";
import WidgetService from "../../services/WidgetService";
import { connect } from "react-redux";
import ImagePreviewComponent from "./ImagePreviewComponent";

class ImageWidget extends Component {
  state = {
    name: "Widget name",
    url: "",
    width: 150,
    height: 150
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
  handleURLChange = event => {
    this.setState({ url: event.target.value});
  }

  handleWidthChange = event => {
    this.setState({ width: event.target.value })
  }

  handleHeightChange = event => {
    this.setState({ height: event.target.value})
  }

  updateWidgetData = () => {
    const widget = _.cloneDeep(this.props.widget);
    widget.name = this.state.name;
    widget.url = this.state.url;
    widget.width = this.state.width;
    widget.height = this.state.height;
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
      widget.name = "Widget name";
      widget.text = "Image URL";
    }

    if (event.target.value == "LIST") {
      widget.type = event.target.value;
      widget.name = "List Widget";
      widget.text = "";
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
                {this.props.widgetIndex != this.props.widgetCount - 1 && (
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
                  <option value="PARAGRAPH">Paragraph</option>
                  <option selected value="IMAGE">
                    Image
                  </option>
                  <option value="LIST">List</option>
                </select>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.props.deleteWidget(this.props.widget.id)}
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
              <div className="col-12">
                <input
                  type="textarea"
                  className="form-control"
                  placeholder="Image URL"
                  value={this.state.url}
                  onChange={this.handleURLChange}
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

              <div className="col-md-6 mt-3">
                <p>Image Width</p>
                <input
                  type="number"
                  className="form-control"
                  placeholder="100"
                  value={this.state.width}
                  onChange={this.handleWidthChange}
                />
              </div>
              <div className="col-md-6 mt-3">
                <p>Image Height</p>
                <input
                  type="number"
                  className="form-control"
                  placeholder="100"
                  value={this.state.height}
                  onChange={this.handleHeightChange}
                />
              </div>

              <div className="col-12 mt-3">
                <img className="shadow" src={this.state.url} width={this.state.width} height={this.state.height} />
              </div>
              <div className="offset-11 col-1">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.updateWidgetData}
                >
                  Save
                </button>
              </div>
            </div>
            <div>
              <ImagePreviewComponent url={this.state.url} width={this.state.width} height={this.state.height} />
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
