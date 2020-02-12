const API_URL = "https://wbdv-generic-server.herokuapp.com/api/001835414/"


export const createTopic = async (lessonId, topic) => {
    const response = await fetch(`${API_URL}lessons/${lessonId}/topics`,{
        method : 'POST',
        body  :JSON.stringify(topic),
        headers: {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}

export const findTopicsForLesson = async (lessonId) => {
    const response = await fetch(`${API_URL}lessons/${lessonId}/topics`)
        return await response.json()

}

export const updateTopic = async (topicId,topic) => {
    const response = await fetch(`${API_URL}topics/${topicId}/`,{
        method : 'PUT',
        body : JSON.stringify(topic),
        headers : {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}



export const deleteTopic = async (topicId) => {
    const response = await fetch(`${API_URL}topics/${topicId}`,{
        method : 'DELETE',
        headers : {
            'content-type' : 'application/json'
        }
    })
    return await response.json()
}


export default {
    deleteTopic,
    findTopicsForLesson,
    createTopic,
    updateTopic
}