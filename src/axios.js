import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://whatsapp-backend-js.herokuapp.com/',
});

export default instance; 