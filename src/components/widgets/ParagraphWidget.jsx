import React, { Component } from "react";
import WidgetService from "../../services/WidgetService";
import { connect } from "react-redux";
import "../../styles/Widget.css";

import _ from 'lodash';

class ParagraphWidget extends Component {
  state = {
      paragraphText: "",
      widgetName: "",
  };

  handleParagraphChange = event => {
      this.setState({paragraphText: event.target.value})
  }

  handleWidgetNameChange = event => {
      this.setState({widgetName: event.target.value})
  }

  updateWidget = () => {
    const widget = _.cloneDeep(this.props.widget)
    widget.text = this.state.paragraphText
    widget.name = this.state.widgetName
    this.props.updateWidgetForTopic(widget)
  }

  handleTypeChange = event => {
    const widget = _.cloneDeep(this.props.widget)
    
    if (event.target.value ==  "HEADING") {
      widget.type = event.target.value;
      widget.name = "Heading Widget"
      widget.text = "Heading Text"
    }
    
    
    if (event.target.value ==  "PARAGRAPH") {
      widget.type = event.target.value;
      widget.name = "Paragraph Widget"
      widget.text = "Paragraph Text"
    }
    
    console.log("type change", event.target.value, widget)

    this.props.updateWidgetForTopic(widget)
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
                  id="inputGroupSelect01" onChange={this.handleTypeChange}
                >
                  <option value="HEADING">Heading</option>
                  <option selected value="PARAGRAPH">Paragraph</option>
                </select>
                <button type="button" className="btn btn-danger" onClick={()=> this.props.deleteWidget(this.props.widget.id)}>
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
              />
            </div>
            <div className="col-12">
              <input
                type="textarea"
                className="form-control mt-3 my-2"
                placeholder="Widget Name"
                onChange={this.handleWidgetNameChange}
              />
            </div>
            <div className="offset-11 col-1">
              <button type="button" className="btn btn-success" onClick={this.updateWidget}>
                Save
              </button>
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
    updateWidgetForTopic: (widget) => {
      console.log("Updating", widget)
      WidgetService.updateWidget(widget.id,widget).then(
        dispatch({
          type:"UPDATE_WIDGET_FOR_TOPIC",
          widget:widget
        })
      );  
    },
  };
};
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
  ) (ParagraphWidget);

