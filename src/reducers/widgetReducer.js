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

    default:
      return state;
  }
};

export default widgetReducer;
