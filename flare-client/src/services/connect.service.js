import api from "../utils/axios";

export const connect = async (formData) => {
    const {data} = await api.post('/connect', formData)
    return data
}