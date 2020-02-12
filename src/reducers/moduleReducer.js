import _ from 'lodash';

const initialState = {

}

const moduleReducer = (state = initialState, action) => {
    switch(action.type){
        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules
            }
        case "CREATE_MODULE_FOR_COURSE":
            return {
                modules:[...state.modules , action.newModule]
            }
        case "DELETE_MODULE_FOR_COURSE":
            const modules = [...state.modules]
            const indexToDelete = _.findIndex(modules,{_id:action.moduleId})
            modules.splice(indexToDelete,1)
            return {
                modules:modules
            }
        default:
            return state
    }

}


export default moduleReducer


