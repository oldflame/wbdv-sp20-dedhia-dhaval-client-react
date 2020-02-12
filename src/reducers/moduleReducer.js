
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
        default:
            return state
    }

}


export default moduleReducer


