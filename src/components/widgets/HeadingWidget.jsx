import React, { Component } from "react";
import "../../styles/Widget.css";
import WidgetService from "../../services/WidgetService";
import { connect } from "react-redux";


class HeadingWidget extends Component {
  state = {
    headingText: "",
    size: "",
    widgetName: ""
  };

  handleHeadingTextChange = event => {
    this.setState({ headingText: event.target.value });
  };

  handleSizeChange = event => {
    this.setState({ size: event.target.value });
  };

  handleWidgetNameChange = event => {
    this.setState({ widgetName: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="card m-3 border-dark">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h1>Heading Widget</h1>
              </div>
              <div className="col-4 right-pull">
                <button
                  type="button"
                  className="btn btn-outline-dark yellow-btn"
                >
                  <i className="fa fa-arrow-up"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark yellow-btn"
                >
                  <i className="fa fa-arrow-down"></i>
                </button>
                <select
                  className="custom-select small-select"
                  id="inputGroupSelect01"
                >
                  <option selected>Heading</option>
                  <option value="slides">Paragraph</option>
                </select>
                <button type="button" className="btn btn-danger" onClick={this.props.deleteWidget}>
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="col-12">
              <input
                type="textarea"
                className="form-control"
                placeholder="Heading Text"
              />
              <select className="custom-select mt-3">
                <option selected>Heading 1</option>
                <option value="heading2">Heading 2</option>
                <option value="heading3">Heading 3</option>
                <option value="heading4">Heading 4</option>
              </select>
            </div>
            <div className="col-12">
              <input
                type="textarea"
                className="form-control mt-3 my-2"
                placeholder="Widget Name"
              />
              <div className="offset-11 col-1">
                <button type="button" className="btn btn-success">
                  Save
                </button>
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
    }
  };
};
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
  ) (HeadingWidget);
