import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Ajo4MNe3bBYECp7koSuo5bPj6QrMbhEflqRPZ_Uhxvo'
    }
});