import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cooking-class-ac192.firebaseio.com/'
});

export default instance;