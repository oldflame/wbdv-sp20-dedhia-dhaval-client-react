const API_URL = "https://wbdv-generic-server.herokuapp.com/api/001835414/courses"


export const createModule = async (courseId, module) => {
    const response = await fetch(`${API_URL}/${courseId}/modules`,{
        method : 'POST',
        body  :JSON.stringify(module),
        headers: {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}

export const findModulesForCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}/modules`)
        return await response.json()

}

export const findModule = async (moduleId) => {

}

export const updateModule = async (moduleId,module) => {
    const response = await fetch(`${API_URL}/${moduleId}/modules`,{
        method : 'PUT',
        body : JSON.stringify(module),
        headers : {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}



export const deleteModule = async (moduleId) => {
    const response = await fetch(`${API_URL}/${moduleId}`,{
        method : 'DELETE',
        headers : {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}


export default {
    deleteModule,
    findModulesForCourse,
    createModule,
    updateModule
}