import axios from 'axios';

export default axios.create({
    baseURL: "https://strapi.route-tanapoom.in.th/",
    headers: {
        "Content-type": "application/json"
    }
});