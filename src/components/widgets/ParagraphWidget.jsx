import React, { Component } from "react";

class ParagraphWidget extends Component {
  state = {
      paragraphText: "",
      widgetName: ""
  };

  handleParagraphChange = event => {
      this.setState({paragraphText: event.target.value})
  }

  handleWidgetNameChange = event => {
      this.setState({widgetName: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="card m-3 border-dark">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h1>Paragraph Widget</h1>
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
                  <option selected>Paragraph</option>
                  <option value="slides">Heading</option>
                </select>
                <button type="button" className="btn btn-danger">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="col-12">
              <textarea
                type="text"
                className="form-control"
                placeholder="Paragraph Text"
              />
            </div>
            <div className="col-12">
              <input
                type="textarea"
                className="form-control mt-3 my-2"
                placeholder="Widget Name"
              />
            </div>
            <div className="offset-11 col-1">
              <button type="button" className="btn btn-success">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParagraphWidget;
