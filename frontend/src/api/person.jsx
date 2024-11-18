import api from './api' 

export const createPerson = async (user) => {


    const response = await api.post('/person', user)

    return response.data
}

export const loginUser = async(email, password) => {

    const body = {email, password}

    const response = await api.post('/person/login', body)
    
    return response.data
}

export const getSession = async () => {
    const response = await api.get('/person/session')

    return response.data
}
