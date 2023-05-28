import axios from 'axios';

export const register = async (name: string, lastname: string, username: string, password: string) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { name, lastname, username, password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, { username, password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
};
