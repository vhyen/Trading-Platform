import axios from 'axios'
const accountURL = import.meta.env.VITE_ACCOUNT_SERVICE_URL


const account = axios.create({
	baseURL: accountURL,
})
export default account

