import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_URL


const client = axios.create({
	baseURL: baseURL,
})
export default client

