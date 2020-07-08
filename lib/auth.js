import axios from 'axios';

export const loginUser = async (email, password) => {

    //response.data destructed coming back
    const {data} = await axios.post('/api/login', {email, password});
    console.log(data);
}