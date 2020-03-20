import axios from 'axios'
// import firebase from "firebase";


const axiosBase = axios.create({
    baseURL: 'http://localhost:5000',
    json: true
})

export default axiosBase;