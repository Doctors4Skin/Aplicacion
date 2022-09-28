import axios from "axios";

const getPatients = axios.create({
    baseURL: 'http://localhost:3000/patients'
})

export default getPatients