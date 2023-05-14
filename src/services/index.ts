import axios from 'axios';

interface data{
    username: string;
    password: string;
}

const API_URL = 'https://localhost:3001/api';

const Service = (data:data) => {
    const login = async() => {
        try{
            const response = await axios.post(`${API_URL}/auth/login_check`, {username: data.username, password:data.password});
            console.log("logn check error", response.data);
            const token = response.data.token;
            const projects = await axios.post(`${API_URL}/v2/project`, null, {
            headers:{Authorization: `Bearer ${token}`}
            });
        return projects.data;
        }catch(error:any){
            console.log("Error from services",error);
            throw new Error(error);
            
        }
    };
    return {login};
}

export default Service;