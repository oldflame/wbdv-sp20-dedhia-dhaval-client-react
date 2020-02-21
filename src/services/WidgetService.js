const API_URL = "http://localhost:8080/api/"


export const createWidget = async (topicId, widget) => {
    const response = await fetch(`${API_URL}topics/${topicId}/widgets`,{
        method : 'POST',
        body  :JSON.stringify(widget),
        headers: {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}

export const findWidgetsForTopic = async (topicId) => {
    const response = await fetch(`${API_URL}topic/${topicId}/widgets`)
        return await response.json()

}

export const updateWidget = async (widgetId,widget) => {
    const response = await fetch(`${API_URL}widgets/${widgetId}/`,{
        method : 'PUT',
        body : JSON.stringify(widget),
        headers : {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}



export const deleteWidget = async (widgetId) => {
    console.log("in service",widgetId)
    const response = await fetch(`${API_URL}widgets/${widgetId}`,{
        method : 'DELETE',
        headers : {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}


export default {
    createWidget,
    updateWidget,
    deleteWidget,
    findWidgetsForTopic
}