    const API_URL = "https://wbdv-generic-server.herokuapp.com/api/001835414/courses"

    export const createCourse = async (course) => {
        const response = await fetch(API_URL,{
            method : 'POST',
            body : JSON.stringify(course),
            headers: {
                'content-type' : 'application/json'
            }
        })
        return await response.json()
    }   

    export const findCourseById = async (courseId) => {
        const response = await fetch(API_URL+"/"+courseId)
        return await response.json()
    }

    export const updateCourse = async (course, courseId) => {
        const response = await fetch(API_URL+"/"+courseId, {
            method : 'PUT',
            body : JSON.stringify(course),
            headers : {
                'content-type' : 'application/json'
            }
        })
        return await response.json()
    }

    export const deleteCourse = async (courseId) => {
        const response = await fetch(API_URL+"/"+courseId,{
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json'
            }
        })
        return await response.json()
    }

    export const findAllCourses = async () => {
        const response = await fetch(API_URL)
        return await response.json()

    }