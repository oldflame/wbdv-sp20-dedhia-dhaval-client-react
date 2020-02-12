import _ from 'lodash';

const initialState = {

}

const moduleReducer = (state = initialState, action) => {
    switch(action.type){
        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules.map(module=>( {
                    ...module,
                    isSelected: false
                }))
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
        case "UPDATE_MODULE_FOR_COURSE":
            const modules1 = [...state.modules]
            let moduleToUpdate = _.find(modules1,{_id:action.module._id})
            let indexToUpdate = _.findIndex(modules1,{_id:action.module._id})
            moduleToUpdate = action.module
            modules1.splice(indexToUpdate, 1, moduleToUpdate);
            return {
                modules:modules1
            }
        case "SET_SELECTED_MODULE":
            const modules2 = [...state.modules]
            modules2.forEach((module) => module.isSelected=false)
            const indexToSelect = _.findIndex(modules2,{_id:action.moduleId})
            const updatedModule = {...modules2[indexToSelect], isSelected: true}
            modules2.splice(indexToSelect, 1, updatedModule);
            console.log(modules2)
            return {
                modules:_.cloneDeep(modules2)
            }
        default:
            return state
    }

}


export default moduleReducer


