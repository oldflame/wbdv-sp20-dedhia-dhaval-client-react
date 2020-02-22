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
    case "FIND_WIDGET_FOR_TOPIC":
      return {
        widgets: _.sortBy(action.widgets, 'order')
      };
    case "MOVE_WIDGET_UP": 
    console.log("In up",action)
    let widgets2 = [...state.widgets];
    const widgetIndex =  _.findIndex(widgets2, { id: action.widgetId });
    console.log(action,widgetIndex)
    const temp = widgets2[widgetIndex].order;
    widgets2[widgetIndex].order = widgets2[widgetIndex-1].order;
    widgets2[widgetIndex-1].order = temp;
    console.log("move", widgets2)
    widgets2 = _.sortBy(widgets2,'order');

      return{
        widgets: _.cloneDeep(widgets2)
      }

      case "MOVE_WIDGET_DOWN": 
      console.log("In down",action)
    let widgets3 = [...state.widgets];
    const widgetIndex2 =  _.findIndex(widgets3, { id: action.widgetId });
    const temp2 = widgets3[widgetIndex2].order;
    widgets3[widgetIndex2].order = widgets3[widgetIndex2+1].order;
    widgets3[widgetIndex2+1].order = temp2;
    widgets3 = _.sortBy(widgets3,'order');

      return{
        widgets:_.cloneDeep(widgets3)
      }
    
    default:
      return state;
  }
};

export default widgetReducer;
