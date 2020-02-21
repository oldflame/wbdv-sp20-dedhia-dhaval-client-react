import _ from "lodash";
const initialState = {
  widgets: []
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET_FOR_TOPIC":
      return {
        widgets: [...state.widgets, action.newWidget]
      };
    case "DELETE_WIDGET_FOR_TOPIC":
      const widgets = [...state.widgets];
      const indexToDelete = _.findIndex(widgets, { _id: action.widgetId });
      widgets.splice(indexToDelete, 1);
      return {
        widgets: widgets
      };
    case "UPDATE_WIDGET_FOR_TOPIC":
      const widgets1 = [...state.widgets];
      let widgetToUpdate = _.find(widgets1, { id: action.widget.id });
      let indexToUpdate = _.findIndex(widgets1, { id: action.widget.id });
      widgetToUpdate = action.widget;
      widgets1.splice(indexToUpdate, 1, widgetToUpdate);
      return {
        widgets: widgets1
      };
    default:
      return state;
  }
};

export default widgetReducer;
