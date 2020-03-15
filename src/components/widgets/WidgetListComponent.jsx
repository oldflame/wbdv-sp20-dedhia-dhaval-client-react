import React, { Component } from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";
import ParagraphPreviewComponent from './ParagraphPreviewComponent';
import HeadingPreviewComponent from './HeadingPreviewComponent';
import ImagePreviewComponent from './ImagePreviewComponent';
import { connect } from "react-redux";
import "../../services/WidgetService";
import WidgetService, {
  findWidgetsForTopic
} from "../../services/WidgetService";

class WidgetListComponent extends Component {
  state = {
    showPreview: false
  };

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

  togglePreview = e => {
    console.log("preview", e.target.checked)
    this.setState({ showPreview: e.target.checked });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="offset-9 col-3">
            <div class="custom-control custom-switch pull-left mr-3">
              <input
                onChange={this.togglePreview}
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
              />
              <label class="custom-control-label" for="customSwitch1">
                Preview
              </label>
            </div>
            <button
              className="btn btn-success pull-left"
              onClick={() => this.props.saveAllWidgets(this.props.widgets)}
            >
              Save
            </button>
          </div>
        </div>
        {!this.state.showPreview && this.props.widgets &&
          this.props.topicId &&
          this.props.widgets.map((widget, $index) => (
            <>
              {widget.type === "HEADING" && (
                <HeadingWidget
                  key={widget.id}
                  widget={widget}
                  widgetIndex={$index}
                  widgetCount={this.props.widgets.length}
                />
              )}
              {widget.type === "PARAGRAPH" && (
                <ParagraphWidget
                  key={widget.id}
                  widget={widget}
                  widgetIndex={$index}
                  widgetCount={this.props.widgets.length}
                />
              )}
              {widget.type === "IMAGE" && (
                <ImageWidget
                key={widget.id}
                widget={widget}
                widgetIndex={$index}
                widgetCount={this.props.widgets.length}
                />
              )}
              {widget.type === "LIST" && (
                <ListWidget
                key={widget.id}
                widget={widget}
                widgetIndex={$index}
                widgetCount={this.props.widgets.length}
                />
              )}
            </>
          ))}
          {this.state.showPreview && this.props.widgets &&
          this.props.topicId &&
          this.props.widgets.map((widget, $index) => (
            <>
              {widget.type === "HEADING" && (
                <HeadingPreviewComponent
                  key={widget.id}
                  widget={widget}
                />
              )}
              {widget.type === "PARAGRAPH" && (
                <ParagraphPreviewComponent
                  key={widget.id}
                  widget={widget}
                />
              )}
              {widget.type === "IMAGE" && (
                <ImagePreviewComponent
                  key={widget.id}
                  url={widget.url}
                  width={widget.width}
                  height={widget.height}
                />
              )}
            </>
          ))}
        {this.props.topicId && (
          <div className="row">
            <div className="offset-11 col-1">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() =>
                  this.props.createWidget(
                    this.props.topicId,
                    this.props.widgets.length == 0
                      ? 1
                      : this.props.widgets[this.props.widgets.length - 1]
                          .order + 1
                  )
                }
              >
                <i className="fa fa-2x fa-plus"></i>
              </button>
            </div>
          </div>
        )}
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
    createWidget: (topicId, order) => {
      WidgetService.createWidget(topicId, {
        text: "Heading Text",
        size: 1,
        name: "Heading Widget",
        type: "HEADING",
        order: order
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
    },
    saveAllWidgets: widgets => {
      WidgetService.saveAllWidgets(widgets).then(() => {
        alert("Widgets saved successfully");
      });
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListComponent);
