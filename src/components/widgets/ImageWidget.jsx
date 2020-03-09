import React, { Component } from "react";
import _ from "lodash";


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
                  <option value="HEADING" selected>
                    Heading
                  </option>
                  <option value="PARAGRAPH">Paragraph</option>
                  <option value="IMAGE">Image</option>
                  <option value="LIST">List</option>
                </select>
                <button type="button" className="btn btn-danger">
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

export default ImageWidget;
